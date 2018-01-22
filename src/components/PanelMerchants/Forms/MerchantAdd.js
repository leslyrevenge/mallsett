import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { Card, Icon, Popover, Button } from 'antd';
import { Radio } from 'antd';
import Select, { SelectOption } from '../../../components/uielements/select';
import Input, { InputGroup } from '../../../components/uielements/input';
import MerchantCategoryInputTag from './MerchantCategoryInputTag';
import BusinessLogo from './BusinessLogo';
import BusinessQuickChart from './reactVis/BusinessQuickChart';

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const Option = SelectOption;

const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

class MerchantTitle extends Component {
  render() {
     return (
       <div>
        Panther Coffee Shop
        <Popover content={(
            <div>
              <InputGroup size="small" style={{ marginBottom: '15px' }}>
          <Col span="18">
            <Input placeholder="Pather Coffee Shop" />
          </Col>
          <Col span="6">
            <Button className="fullButton" size="small">submit</Button>
          </Col> 
        </InputGroup>
              </div>)} 
            title="Edit Business Name"  trigger="click">
          <Button type="dashed" shape="circle" icon="edit" /> 
          </Popover> 
          
        <small> 111 East Flagler,Miami, Fl 32453 <Popover content={(
            <div>
              <InputGroup size="small" style={{ marginBottom: '15px' }}>
              <Col span="24">
           <img src="../../images/googleMap.png" className="imageFullWidth" />
          </Col>
          <Col span="18">
            <Input placeholder="Pather Coffee Shop" />
          </Col>
          <Col span="6">
            <Button className="fullButton" size="small">submit</Button>
          </Col> 
        </InputGroup>
              </div>)} 
            title="Edit Address"  trigger="click">
          <Button type="dashed" shape="circle" icon="edit" />
          </Popover> | 305-589-5965 <Popover content={(
            <div>
              <InputGroup size="small" style={{ marginBottom: '15px' }}>
          <Col span="18">
            <Input placeholder="305-589-5965" />
          </Col>
          <Col span="6">
            <Button className="fullButton" size="small">submit</Button>
          </Col> 
        </InputGroup>
              </div>)} 
            title="Edit Phone Number"  trigger="click">
          <Button type="dashed" shape="circle" icon="edit" />

          </Popover> </small>
       </div>
       )
  }
}

class MerchantItemCard extends Component {



  render() {
    return (
        <Card title={<MerchantTitle />} bordered={true}>
        <Row gutter={8} style={{ marginBottom: 8 }}>
          <InputGroup size="small">
          <Col span="12"  style={{ marginTop: 2 }}>
          <h4>Business Name <Popover content={(
            <div>
              <InputGroup size="small" style={{ marginBottom: '15px' }}>
              <Col span="24">
           explain the name
          </Col>
        </InputGroup>
              </div>)} 
            title="Business Name"  trigger="click">
          <Button type="dashed" icon="question-circle-o" />
          </Popover> </h4>
          </Col>
         
          <Col span="12">
           <Input placeholder="enter business name" />
          </Col>
        </InputGroup>
        </Row>
        <Row gutter={8} style={{ marginBottom: 8 }}>
          <InputGroup size="small">
          <Col span="12"  style={{ marginTop: 2 }}>
          <h4>Business Address <Popover content={(
            <div>
              <InputGroup size="small" style={{ marginBottom: '15px' }}>
              <Col span="24">
           explain the address
          </Col>
        </InputGroup>
              </div>)} 
            title="Business Address"  trigger="click">
          <Button type="dashed" icon="question-circle-o" />
          </Popover> </h4>
          </Col>
         
          <Col span="12">
           <Input placeholder="enter business address" />
          </Col>
        </InputGroup>
        </Row>
        <Row gutter={8} style={{ marginBottom: 8 }}>
          <InputGroup size="small">
          <Col span="12"  style={{ marginTop: 2 }}>
          <h4>Business Phone Number <Popover content={(
            <div>
              <InputGroup size="small" style={{ marginBottom: '15px' }}>
              <Col span="24">
           explain the phone number
          </Col>
        </InputGroup>
              </div>)} 
            title="Business Phone Number"  trigger="click">
          <Button type="dashed" icon="question-circle-o" />
          </Popover> </h4>
          </Col>
         
          <Col span="12">
           <Input placeholder="business phone number" />
          </Col>
        </InputGroup>
        </Row>
        
        <Row gutter={8} style={{ marginBottom: 8 }}>
          <InputGroup size="small">
          
          <Col span="12"  style={{ marginTop: 4 }}>
          <h4>Google Business Category<Popover content={(
            <div>
              <InputGroup size="small" style={{ marginBottom: '15px' }}>
              <Col span="24">
           explains the category
          </Col>
        </InputGroup>
              </div>)} 
            title="Google Categories"  trigger="click">
          <Button type="dashed" icon="question-circle-o" />
          </Popover> </h4>
          </Col>
          <Col span="12">
            <Select
                  mode="multiple"
                  style={{ width: '100%' }}
                  placeholder="Business Type"
                  defaultValue={['a10', 'c12']}
                  onChange={this.handleChange}
                >
                  {children}
                </Select>
                
          </Col>
        </InputGroup>
        </Row>
        <Row gutter={8} style={{ marginBottom: 8 }}>
          <InputGroup size="small">
          <Col span="12"  style={{ marginTop: 2 }}>
          <h4>B2B Commercial<Popover content={(
            <div>
              <InputGroup size="small" style={{ marginBottom: '15px' }}>
              <Col span="24">
           youtube video link
          </Col>
        </InputGroup>
              </div>)} 
            title="b2b commercial"  trigger="click">
          <Button type="dashed" icon="question-circle-o" />
          </Popover> </h4>
          </Col>
         
          <Col span="12">
           <Input placeholder="youtube link" />
          </Col>
        </InputGroup>
        </Row>
        <Row gutter={8} style={{ marginBottom: 8 }}>
          <InputGroup size="small">
          <Col span="12"  style={{ marginTop: 2 }}>
          <h4>B2C Commercial<Popover content={(
            <div>
              <InputGroup size="small" style={{ marginBottom: '15px' }}>
              <Col span="24">
           youtube video link
          </Col>
        </InputGroup>
              </div>)} 
            title="b2c commercial"  trigger="click">
          <Button type="dashed" icon="question-circle-o" />
          </Popover> </h4>
          </Col>
         
          <Col span="12">
           <Input placeholder="youtube link" />
          </Col>
        </InputGroup>
        </Row>
        <Row gutter={8} style={{ marginBottom: 8 }}>
          <InputGroup size="small">
          
          <Col span="12"  style={{ marginTop: 4 }}>
          <h4>Plugg Business Type<Popover content={(
            <div>
              <InputGroup size="small" style={{ marginBottom: '15px' }}>
              <Col span="24">
           explains the category
          </Col>
        </InputGroup>
              </div>)} 
            title="Google Categories"  trigger="click">
          <Button type="dashed" icon="question-circle-o" />
          </Popover> </h4>
          </Col>
          <Col span="12">
            <Select
                  mode=""
                  style={{ width: '100%' }}
                  placeholder="Business Type"
                  defaultValue={['a10', 'c12']}
                  onChange={this.handleChange}
                >
                  {children}
                </Select>
                
          </Col>
        </InputGroup>
        </Row>
        <Row gutter={8} style={{ marginBottom: 8 }}>
          <InputGroup size="small">
          
          <Col span="12"  style={{ marginTop: 4 }}>
          <h4>Assigned Phone Number<Popover content={(
            <div>
              <InputGroup size="small" style={{ marginBottom: '15px' }}>
              <Col span="24">
           explains the phone number 
          </Col>
        </InputGroup>
              </div>)} 
            title="Phone Number"  trigger="click">
          <Button type="dashed" icon="question-circle-o" />
          </Popover> </h4>
          </Col>
          <Col span="12">
            <Select
                  mode=""
                  style={{ width: '100%' }}
                  placeholder="Business Type"
                  defaultValue={['a10', 'c12']}
                  onChange={this.handleChange}
                >
                  {children}
                </Select>
                
          </Col>
        </InputGroup>
        </Row>
        
        <Row gutter={24} style={{ marginTop: 20 }}>
        <Col span="16">

          </Col>
          <Col span="8">
            <Button type="danger" icon="delete" className="fullButton"> Remove </Button>
          </Col>
      </Row>
        </Card>
    );
  }
}

export default MerchantItemCard;