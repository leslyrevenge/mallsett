import React, { Component } from 'react';
import FormDescription from '../forms/formDescription';
import IntlMessages from '../../../../components/utility/intlMessages';
import DescriptionList from '../lists/DescriptionList';
import { 
  Row, 
  Collapse,
  Col,
  Icon
} from 'antd';

const Panel = Collapse.Panel;


export default class  extends Component {

  render() {
    return (
      <Row gutter={24}>
        <Col span="18">
          <FormDescription />
        </Col>
        <Col span="6">
         
              <DescriptionList />
        </Col>
      </Row>
    );
  }
}
