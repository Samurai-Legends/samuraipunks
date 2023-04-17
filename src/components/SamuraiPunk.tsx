import {Image} from 'antd';

import {unitTypes} from '~/constants';


export type SamuraiPunkProps = {
  selectedId: number;
  selectedUnit: typeof unitTypes[number];
  src: string;
}

export const SamuraiPunk = ({
  selectedId,
  selectedUnit,
  src,
}: SamuraiPunkProps) => (
  <Image
    style={{
      boxShadow: '0 0 10px 0 rgba(255,255,255, 0.5)',
    }}
    alt={`Image for ${selectedUnit.label} id ${selectedId}`}
    src={src}
    width="100%"
    preview={false}
  />
);