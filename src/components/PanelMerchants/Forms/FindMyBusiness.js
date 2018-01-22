import React, { Component } from 'react';
import { Row, Col } from 'antd';
import Input, { InputGroup } from '../../../components/uielements/input';
import Button from '../../../components/uielements/button';
import ContentHolder from '../../../components/utility/contentHolder';

import MerchantAdd from './MerchantAdd';



class CreateAddress extends Component {
  render() {
    return (
      <div>

      <Row  justify="start" >
  <Col md={24} sm={24} xs={24} >
      <ContentHolder>
      <InputGroup size="large" style={{ marginBottom: '15px' }}>
          <Col span="24">
            <Input placeholder="Type business name" />
          </Col>
        </InputGroup>
        <InputGroup size="large" style={{ marginBottom: '15px' }}>
          <Col span="24">
             <img src="../../images/googleMap.png" className="imageFullWidth" />
          </Col>
        </InputGroup>
        <InputGroup size="large" style={{ marginBottom: '15px' }}>
        <MerchantAdd />
        </InputGroup>
    
      </ContentHolder>
  </Col>
</Row>
</div>
    );
  }
}

export default CreateAddress;