import React, { Component } from 'react';
import LifespanListItem from './LifespanListItem';
import { 
  Row, 
  Collapse,
  Col
} from 'antd';



export default class  extends Component {

  render() {
    return (
      <Row gutter={24}>
        <h4  style={{marginBottom: 15}}>Lifespan List </h4>
        <Col span="12" style={{marginBottom: 15}}  >
          <LifespanListItem />
        </Col>
        <Col span="12" style={{marginBottom: 15}}  >
          <LifespanListItem />
        </Col>
        <Col span="12" style={{marginBottom: 15}}  >
          <LifespanListItem />
        </Col>
        <Col span="12" style={{marginBottom: 15}}  >
          <LifespanListItem />
        </Col>
      </Row>
    );
  }
}

