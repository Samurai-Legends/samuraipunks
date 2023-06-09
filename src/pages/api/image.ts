import axios from 'axios';
import {NextApiRequest, NextApiResponse} from 'next';
import sharp, {ResizeOptions} from 'sharp';


const PROCESSING_CONFIGURATION: ResizeOptions = {
  kernel: 'nearest',
  fastShrinkOnLoad: true,
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const {data} = await axios.get(`https://api.samurailegends.io/v3/metadata/${req.query.unitVariant}/${req.query.unitId}/full`);
    if (!data) return res.status(400).send('The requested unit does not exist');

    const {data: originalImage} = await axios({url: data.images['squareSmall'], responseType: 'arraybuffer'});
    const {data: logoImage} = await axios({
      url: `https://sl-samuraipunks.netlify.app/favicon.png`,
      responseType: 'arraybuffer',
    });

    const logoMosaicBuffer = await sharp(logoImage)
      .resize(32, 32, PROCESSING_CONFIGURATION)
      .toBuffer();
    const logoBuffer = await sharp(logoMosaicBuffer)
      .resize(80, 80, PROCESSING_CONFIGURATION)
      .toBuffer();
    const nftMosaicBuffer = await sharp(originalImage)
      .resize(64, 64, PROCESSING_CONFIGURATION)
      .toBuffer();

    const borderSize = req.query.border === 'true' ? 6 : 0;
    const combinedBuffer = await sharp(nftMosaicBuffer)
      .resize(512 - (borderSize * 2), 512 - (borderSize * 2), PROCESSING_CONFIGURATION)
      .composite([{input: logoBuffer, left: 16, top: 16}])
      .extend({
        top: borderSize,
        left: borderSize,
        bottom: borderSize,
        right: borderSize,
        background: '#000',
      })
      .toBuffer();

    return res.status(200).send(combinedBuffer);
  } catch (error) {
    console.log(error);
    return res.status(500).send('Something went wrong internally');
  }
}