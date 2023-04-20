import {Checkbox, InputNumber, Select} from 'antd';

import {Spacing} from '~/components';
import {unitTypes} from '~/constants';


export type UnitSelectorProps = {
  onIsBorderEnabledChange: (value: boolean) => void;
  onSelectedIdChange: (value: number) => void;
  onSelectedUnitChange: (value: typeof unitTypes[number]['value']) => void;
  isBorderEnabled: boolean;
  selectedId: number;
  selectedUnit: typeof unitTypes[number];
}

export const UnitSelector = ({
  onIsBorderEnabledChange,
  onSelectedIdChange,
  onSelectedUnitChange,
  isBorderEnabled,
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
    <Checkbox
      checked={isBorderEnabled}
      onChange={e => onIsBorderEnabledChange(e.target.checked)}
    >
      Show border around image
    </Checkbox>
  </Spacing>
);