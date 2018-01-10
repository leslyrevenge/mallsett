import React, { Component } from 'react';
import GroupPart1 from './formParts/group-part.1';
import GroupPart2 from './formParts/group-part.2';
import GroupPart3 from './formParts/group-part.3';
import GroupPart4 from './formParts/group-part.4';
import GroupPart5 from './formParts/group-part.5';
import FormWrapper from './form.style';
import IntlMessages from '../../../../components/utility/intlMessages';
import { 
  Row, 
  Button,
  Collapse
} from 'antd';

const Panel = Collapse.Panel;


export default class  extends Component {

  render() {
    return (
      <Row gutter={24}>
      <Collapse bordered={false} defaultActiveKey={['1']}>
        <Panel header={<IntlMessages id="form.group.header.1" />}  key="1" style={FormWrapper.collapsed}>
          <p style={{marginBottom: 15}}><IntlMessages id="form.group.message.1" /></p>
          <GroupPart1 />
        </Panel>
        <Panel header={<IntlMessages id="form.group.header.2" />}  key="2" style={FormWrapper.collapsed}>
          <p style={{marginBottom: 15}}><IntlMessages id="form.group.message.2" /></p>
          <GroupPart2 />
          <GroupPart3 />
          <GroupPart4 />
          <GroupPart5 />
        </Panel>
      </Collapse>
       <Button type="primary"  style={{ width: '100%', marginBottom: 15, marginTop: 5, borderRadius: 0 }}>Submit</Button>
      </Row>
    );
  }
}
