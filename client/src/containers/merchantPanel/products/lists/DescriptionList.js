import React, { Component } from 'react';
import DescriptionListItem from './DescriptionListItem';
import { 
  Row, 
  Col
} from 'antd';


export default class  extends Component {

  render() {
    return (
      <Row gutter={24}>
        <h4  style={{marginBottom: 15}}>List of Description </h4>
        <Col span="24" style={{marginBottom: 15}}  >
          <DescriptionListItem />
        </Col>
        <Col span="24" style={{marginBottom: 15}}  >
          <DescriptionListItem />
        </Col>
        <Col span="24" style={{marginBottom: 15}}  >
          <DescriptionListItem />
        </Col>
        <Col span="24" style={{marginBottom: 15}}  >
          <DescriptionListItem />
        </Col>
      </Row>
    );
  }
}

