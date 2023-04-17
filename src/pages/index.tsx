import {Col, Row} from 'antd';
import Head from 'next/head';
import {useCallback, useState} from 'react';

import {Background, Spacing, UnitGenerator, UnitSelector} from '~/components';
import {unitTypes, ValueType} from '~/constants';


export default function Home() {
  const [selectedUnit, setSelectedUnit] = useState<ValueType>(unitTypes[0]);
  const [selectedId, setSelectedId] = useState<number>(0);

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
              selectedUnit={selectedUnit}
              selectedId={selectedId}
              onSelectedUnitChange={handleUnitChange}
              onSelectedIdChange={handleIdChange}
            />
            <UnitGenerator
              selectedUnit={selectedUnit}
              selectedId={selectedId}
            />
          </Spacing>
        </Col>
      </Row>
    </>
  );
}
