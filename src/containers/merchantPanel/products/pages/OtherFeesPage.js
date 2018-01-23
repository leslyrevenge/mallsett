import React, { Component } from 'react';
import FormOtherFees from '../forms/formOtherFees';
import IntlMessages from '../../../../components/utility/intlMessages';
import DateList from '../lists/DateList';
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
        <Col span="10">
          <FormOtherFees />
        </Col>
        <Col span="14">
         
              <DateList />
        </Col>
      </Row>
    );
  }
}
