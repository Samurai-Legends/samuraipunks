import {Space} from 'antd';
import {ReactNode} from 'react';


export type SpacingProps = {
  children: ReactNode;
}

export const Spacing = ({children}: SpacingProps) => (
  <Space direction="vertical" size="large" style={{width: '100%'}}>
    {children}
  </Space>
);