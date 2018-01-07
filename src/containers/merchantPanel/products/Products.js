import React, { Component } from 'react';
import { Row, Col, Tabs, Steps, Icon, Pagination } from 'antd';
import Input, { InputGroup } from '../../../components/uielements/input';
import Button from '../../../components/uielements/button';
import ContentHolder from '../../../components/utility/contentHolder';
import LayoutContentWrapper from '../../../components//utility/layoutWrapper';
import LayoutContent from '../../../components//utility/layoutContent';
import Select, { SelectOption } from '../../../components/uielements/select';

const Option = SelectOption;
const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}


const TabPane = Tabs.TabPane;

const Step = Steps.Step;


const steps = [{
  title: 'Add Products',
  noIcon: 'plus-square-o',
  content: 'form goes here',
  description: 'Watch this short video and learn more about plugging your business with other businesses and consumers.',
  help: 'soemthing here to help',
  key: '1'
}, {
  title: 'Sections',
  noIcon: 'layout',
  content: 'form goes here',
  description: '',
  help: 'Groceries',
  key: '3'
}, {
  title: 'Sizes',
  noIcon: 'environment-o',
  content: 'form goes here',
  description: '',
  help: 'Groceries',
  key: '11'
}, {
  title: 'Variations',
  noIcon: 'calendar',
  content: 'form goes here',
  description: '',
  help: 'soemthing here to help',
  key: '4'
}, {
  title: 'Wholesale',
  noIcon: 'book',
  content: 'form goes here',
  description: '',
  help: 'soemthing here to help',
  key: '5'
}, {
  title: 'Lifespan',
  noIcon: 'environment-o',
  content: 'form goes here',
  description: '',
  help: 'soemthing here to help',
  key: '9'
}, {
  title: 'Age Range',
  noIcon: 'team',
  content: 'form goes here',
  description: '',
  help: 'soemthing here to help',
  key: '6'
},  {
  title: 'Class Range',
  noIcon: 'car',
  content: 'form goes here',
  description: '',
  help: 'soemthing here to help',
  key: '7'
}, {
  title: 'Date Range',
  noIcon: 'calendar',
  content: 'form goes here',
  description: '',
  help: 'soemthing here to help',
  key: '8'
}, {
  title: 'Time Range',
  noIcon: 'clock-circle-o',
  content: 'form goes here',
  description: '',
  help: 'soemthing here to help',
  key: '10'
}, {
  title: 'Other Fees',
  noIcon: 'global',
  content: 'form goes here',
  description: '',
  help: 'soemthing here to help',
  key: '10'
}];

const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);

class BuildYourMall extends Component {
  render() {
    return (
      <LayoutContentWrapper>
        <LayoutContent>
            <Row gutter={24} style={{ marginTop: '0px'}}>
              <Col span="24">
                <Tabs defaultActiveKey='1'>
                  {steps.map(item =><TabPane key={item.key} tab={<span><Icon type={item.icon} /> {item.title}</span>} >
                  </TabPane> )}
                </Tabs>
              </Col>
             </Row>   
              
              <Row gutter={24} style={{ marginTop: '5px'}}>
              <Col span="24">
                <Input placeholder="Search Merchant" />
              </Col>
              </Row>  
              <Row gutter={24} style={{ marginTop: '15px'}}>
                <Col span="24">
                <div className="lightBrown divLeft" style={{ color: '#c69c6d', marginRight: '15px' }}>a. build your mall. </div>
                <div className="divLeft">
                <Pagination
                  total={85}
                  showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
                  pageSize={8}
                  size="small"
                  defaultCurrent={1}
                />
                </div>
              </Col>
            </Row>
            <Row gutter={24} style={{ marginTop: '15px'}}>
              <Col xs={{ span: 8}} sm={{ span: 6}} md={{ span: 4}} lg={{ span: 3}} xl={{ span: 2}} >
                 'form goes here',
              </Col>
            </Row>
            </LayoutContent>
      </LayoutContentWrapper>
    );
  }
}

export default BuildYourMall;