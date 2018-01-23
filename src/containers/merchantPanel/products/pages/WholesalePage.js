import React, { Component } from 'react';
import FormWholesale from '../forms/formWholesale';
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
        <Col span="10">
          <FormWholesale />
        </Col>
        <Col span="14">
         
              <DateList />
        </Col>
      </Row>
    );
  }
}
