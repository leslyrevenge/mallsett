import React, { Component } from 'react';
import DateListItem from './DateListItem';
import { 
  Row, 
  Col
} from 'antd';


export default class  extends Component {

  render() {
    return (
      <Row gutter={24}>
        <h4  style={{marginBottom: 15}}>Date List </h4>
        <Col span="12" style={{marginBottom: 15}}  >
          <DateListItem />
        </Col>
        <Col span="12" style={{marginBottom: 15}}  >
          <DateListItem />
        </Col>
        <Col span="12" style={{marginBottom: 15}}  >
          <DateListItem />
        </Col>
        <Col span="12" style={{marginBottom: 15}}  >
          <DateListItem />
        </Col>
      </Row>
    );
  }
}

