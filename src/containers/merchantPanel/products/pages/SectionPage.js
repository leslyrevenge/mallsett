import React, { Component } from 'react';
import ProductNav from '../navigation/ProductNav';
import FormSections from '../forms/formSections';
import { 
  Row, 
  Col
} from 'antd';

export default class  extends Component {
  render() {
    return (
      <Row gutter={24}>
        <Col span="10">
          <FormSections />
        </Col>
        <Col span="14">
          <ProductNav />
        </Col>
      </Row>
    );
  }
}
