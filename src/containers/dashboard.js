
import React, { Component } from 'react';
import LayoutContentWrapper from '../components/utility/layoutWrapper';
import LayoutContent from '../components/utility/layoutContent';
import { Tabs } from 'antd';
import { Steps, Button, message, Icon, Popover, Pagination } from 'antd';
import Box from '../components/utility/box';
import FrontPageMerchantCard from '../components/PanelMerchants/Forms/FrontPageMerchantCard';
import FindMyBusiness from '../components/PanelMerchants/Forms/FindMyBusiness';
import AssignedPhoneNumber from'../components/PanelMerchants/Forms/AssignedPhoneNumber';
import ServiceCard from '../components/PanelMerchants/Forms/ServiceCard';
import Competitors from '../components/PanelMerchants/Forms/Competitors';
import TouchUp from '../components/PanelMerchants/Forms/TouchUp';
import Suppliers from '../components/PanelMerchants/Forms/Suppliers';
import Services from '../components/PanelMerchants/Forms/Services';
import ProfessionalServices from '../components/PanelMerchants/Forms/ProfessionalServices';
import Customers from '../components/PanelMerchants/Forms/Customers';
import CreditCardProcessor from '../components/PanelMerchants/Forms/CreditCardProcessor';
import BusinessAssociations from '../components/PanelMerchants/Forms/BusinessAssociations';
import CompletePlugBusiness from '../components/PanelMerchants/Forms/CompletePlugBusiness';

import Input, { InputGroup } from '../components/uielements/input';


import PageHeader from '../components/utility/pageHeader';
import LayoutWrapper from '../components/utility/layoutWrapper';
import IntlMessages from '../components/utility/intlMessages';
import { Row, Col } from 'antd';
import Select, { SelectOption } from '../components/uielements/select';

const Option = SelectOption;

const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}
const TabPane = Tabs.TabPane;

const Step = Steps.Step;


const steps = [{
  title: 'All',
  icon: 'bell',
  content: <FrontPageMerchantCard />,
  description: 'Watch this short video and learn more about plugging your business with other businesses and consumers.',
  help: 'soemthing here to help',
  key: '1'
}, {
  title: 'Food',
  icon: 'coffee',
  content: <FrontPageMerchantCard />,
  description: '',
  help: 'Groceries',
  key: '2'
}, {
  title: 'Shops',
  icon: 'tags',
  content: <FrontPageMerchantCard />,
  description: '',
  help: 'Groceries',
  key: '3'
}, {
  title: 'OnDemand',
  icon: 'environment-o',
  content: <FrontPageMerchantCard />,
  description: '',
  help: 'Groceries',
  key: '11'
}, {
  title: 'Book/Rent',
  icon: 'calendar',
  content: <FrontPageMerchantCard />,
  description: '',
  help: 'soemthing here to help',
  key: '4'
}, {
  title: 'Schools',
  icon: 'book',
  content: <FrontPageMerchantCard />,
  description: '',
  help: 'soemthing here to help',
  key: '5'
}, {
  title: 'Events',
  icon: 'environment-o',
  content: <FrontPageMerchantCard />,
  description: '',
  help: 'soemthing here to help',
  key: '9'
}, {
  title: 'Services',
  icon: 'team',
  content: <FrontPageMerchantCard />,
  description: '',
  help: 'soemthing here to help',
  key: '6'
},  {
  title: 'Car/Boat',
  icon: 'car',
  content: <FrontPageMerchantCard />,
  description: '',
  help: 'soemthing here to help',
  key: '7'
}, {
  title: 'Medical',
  icon: 'medicine-box',
  content: <Suppliers />,
  description: '',
  help: 'soemthing here to help',
  key: '8'
}, {
  title: 'Worship',
  icon: 'global',
  content: <Suppliers />,
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

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
    };
  }
  next() {
    const current = this.state.current + 1;
    this.setState({ current });
  }
  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
  }
  render() {
    const { current } = this.state;
    return (
      <LayoutContentWrapper style={{ height: '100vh' }}>
        <LayoutContent>
            <Row gutter={24}>
              <Col span="24">
                <Tabs defaultActiveKey='1'>
                  {steps.map(item =><TabPane key={item.key} tab={<span><Icon type={item.icon} /> {item.title}</span>} >
                  </TabPane> )}
                </Tabs>
              </Col>
            </Row>
            <Row gutter={24}>
              <Col span="24" style={{ marginBottom: '5px'}}>
                <h4 className="lightBrown" style={{ color: '#c69c6d', marginBottom: '15px' }}>1. build your mall. </h4>
              </Col>
            </Row>
            <Row gutter={8}>
              <Col xs={{ span: 8}} sm={{ span: 6}} md={{ span: 4}} lg={{ span: 3}} xl={{ span: 2}} >
                  {steps[this.state.current].content}
              </Col>
            </Row>
            
            <Row  style={{ marginTop: '15px'}}>
              <Col>
                <Pagination
                  total={85}
                  showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
                  pageSize={8}
                  size="small"
                  defaultCurrent={1}
                />
              </Col>
            </Row>
            
            <Row gutter={8}>
              <Col span="24" style={{ marginTop: '15px'}}>
                <h4 style={{ marginBottom: '255px', color: '#c69c6d' }}>b. shop your mall.</h4>
              </Col> 
            </Row>
      </LayoutContent>
      </LayoutContentWrapper>
    );
  }
}