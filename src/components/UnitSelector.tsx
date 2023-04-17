import {InputNumber, Select} from 'antd';

import {Spacing} from '~/components';
import {unitTypes} from '~/constants';


export type UnitSelectorProps = {
  onSelectedIdChange: (value: number) => void;
  onSelectedUnitChange: (value: typeof unitTypes[number]['value']) => void;
  selectedId: number;
  selectedUnit: typeof unitTypes[number];
}

export const UnitSelector = ({
  onSelectedIdChange,
  onSelectedUnitChange,
  selectedId,
  selectedUnit,
}: UnitSelectorProps) => (
  <Spacing spacing="middle">
    <Select
      onChange={onSelectedUnitChange}
      size="large" style={{width: '100%'}}
      value={selectedUnit.value as any}
    >
      {unitTypes.map(({value, label, disabled}) => (
        <Select.Option disabled={disabled} key={value} value={value}>{label}</Select.Option>
      ))}
    </Select>
    <InputNumber
      min="0"
      onChange={onSelectedIdChange as any}
      size="large"
      step="1"
      style={{width: '100%'}}
      value={selectedId as any}
    />
  </Spacing>
);