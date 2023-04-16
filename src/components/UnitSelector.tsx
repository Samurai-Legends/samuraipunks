import {InputNumber, Select} from 'antd';

import {Spacing} from '~/components';
import {unitTypes} from '~/constants';


export type UnitSelectorProps = {
  selectedUnit: typeof unitTypes[number];
  selectedId: number;

  onSelectedUnitChange: (value: typeof unitTypes[number]['value']) => void;
  onSelectedIdChange: (value: number) => void;
}

export const UnitSelector = ({
  selectedUnit,
  selectedId,
  onSelectedUnitChange,
  onSelectedIdChange,
}: UnitSelectorProps) => (
  <Spacing>
    <Select style={{width: '100%'}} value={selectedUnit.value as any} onChange={onSelectedUnitChange}>
      {unitTypes.map(({value, label, disabled}) => (
        <Select.Option disabled={disabled} key={value} value={value}>{label}</Select.Option>
      ))}
    </Select>
    <InputNumber
      style={{width: '100%'}}
      value={selectedId as any}
      onChange={onSelectedIdChange as any}
      min="0"
      step="1"
    />
  </Spacing>
);