import {Col, Row} from 'antd';
import Head from 'next/head';
import {useCallback, useState} from 'react';

import {Background, Spacing, UnitGenerator, UnitSelector} from '~/components';
import {unitTypes, ValueType} from '~/constants';


export default function Home() {
  const [selectedUnit, setSelectedUnit] = useState<ValueType>(unitTypes[0]);
  const [selectedId, setSelectedId] = useState<number>(0);
  const [isBorderEnabled, setIsBorderEnabled] = useState<boolean>(false);

  const handleIsBorderEnabledChange = useCallback((value: boolean) => {
    setIsBorderEnabled(value);
  }, []);

  const handleUnitChange = useCallback((value: string) => {
    setSelectedUnit(unitTypes.find(x => x.value == value) as ValueType);
  }, []);

  const handleIdChange = useCallback((value: number) => {
    setSelectedId(value);
  }, []);

  return (
    <>
      <Head>
        <title>SamuraiPunks — By SamuraiLegends</title>
      </Head>
      <Row justify="center" align="middle" style={{width: '100vw', height: '100vh'}}>
        <Background/>
        <Col xs={20} sm={12} md={9} lg={7} xl={5} xxl={4}>
          <Spacing spacing="middle">
            <UnitSelector
              isBorderEnabled={isBorderEnabled}
              onIsBorderEnabledChange={handleIsBorderEnabledChange}
              onSelectedIdChange={handleIdChange}
              onSelectedUnitChange={handleUnitChange}
              selectedId={selectedId}
              selectedUnit={selectedUnit}
            />
            <UnitGenerator
              isBorderEnabled={isBorderEnabled}
              selectedId={selectedId}
              selectedUnit={selectedUnit}
            />
          </Spacing>
        </Col>
      </Row>
    </>
  );
}
