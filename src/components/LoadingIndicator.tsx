import {Row, Spin} from 'antd';


export const LoadingIndicator = () => (
  <Row justify="center">
    <Spin style={{justifySelf: 'center'}}/>
  </Row>
);