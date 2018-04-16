import React, { Component } from 'react';
import FormSize from '../forms/formSize';
import IntlMessages from '../../../../components/utility/intlMessages';
import DateList from '../lists/DateList';
import { 
  Row, 
  Col
} from 'antd';


export default class  extends Component {

  render() {
    return (
      <Row gutter={24}>
        <Col span="16">
          <FormSize />
        </Col>
        <Col span="8">
         
              <DateList />
        </Col>
      </Row>
    );
  }
}
