import {DownloadOutlined} from '@ant-design/icons';
import {Button, notification} from 'antd';
import {useCallback, useMemo, useState} from 'react';

import {LoadingIndicator, SamuraiPunk, Spacing} from '~/components';
import {unitTypes} from '~/constants';


export type UnitGeneratorProps = {
  selectedUnit: typeof unitTypes[number];
  selectedId: number;
}

export const UnitGenerator = ({selectedUnit, selectedId}: UnitGeneratorProps) => {
  const [generatedImage, setGeneratedImage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const fileName = useMemo(() => {
    return `samuraiPunk-${selectedUnit.label}-${selectedId}.png`;
  }, [selectedUnit, selectedId]);

  const fetchOriginalImage = useCallback(async () => {
    try {
      setGeneratedImage('');
      setIsLoading(true);
      const response = await fetch(`/api/image?unitVariant=${selectedUnit.value}&unitId=${selectedId}`);
      if (!response.ok) {
        return notification.error({message: 'Oh no!', description: await response.text()});
      }
      setGeneratedImage(URL.createObjectURL(await response.blob()));
    } finally {
      setIsLoading(false);
    }
  }, [selectedUnit, selectedId]);

  return (
    <Spacing>
      <Button onClick={fetchOriginalImage} size="large" style={{width: '100%'}}>
        Generate
      </Button>
      {isLoading && (<LoadingIndicator/>)}
      {generatedImage && !isLoading && (
        <>
          <SamuraiPunk
            src={generatedImage}
            selectedUnit={selectedUnit}
            selectedId={selectedId}
          />
          <Button
            type="dashed"
            download={fileName}
            href={generatedImage}
            style={{width: '100%'}}
            icon={<DownloadOutlined/>}
          >
            Download
          </Button>
        </>
      )}
    </Spacing>
  );
};