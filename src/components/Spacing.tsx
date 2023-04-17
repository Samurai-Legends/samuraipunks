import {Space, SpaceProps} from 'antd';
import {ReactNode} from 'react';


export type SpacingProps = {
  children: ReactNode;
  spacing?: SpaceProps['size'];
}

export const Spacing = ({
  children,
  spacing = 'large',
}: SpacingProps) => (
  <Space direction="vertical" size={spacing} style={{width: '100%'}}>
    {children}
  </Space>
);