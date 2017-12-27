import React, { Component } from 'react';
import { Steps, Button, message, Icon, Popover } from 'antd';
import Box from '../../components/utility/box';
import PlugIntroduction from './Forms/PlugIntroduction';
import FindMyBusiness from './Forms/FindMyBusiness';
import AssignedPhoneNumber from './Forms/AssignedPhoneNumber';
import ServiceCard from './Forms/ServiceCard';
import Competitors from './Forms/Competitors';
import Suppliers from './Forms/Suppliers';
import Services from './Forms/Services';
import ProfessionalServices from './Forms/ProfessionalServices';
import Customers from './Forms/Customers';
import CreditCardProcessor from './Forms/CreditCardProcessor';
import BusinessAssociations from './Forms/BusinessAssociations';
import CompletePlugBusiness from './Forms/CompletePlugBusiness';

import Input, { InputGroup } from '../../components/uielements/input';


import PageHeader from '../../components/utility/pageHeader';
import LayoutWrapper from '../../components/utility/layoutWrapper';
import IntlMessages from '../../components/utility/intlMessages';
import { Row, Col } from 'antd';


const Step = Steps.Step;

const steps = [{
  title: '2 Minute Introduction',
  icon: 'bell',
  content: <PlugIntroduction />,
  help: 'soemthing here to help'
}, {
  title: 'Find my Business',
  icon: 'environment-o',
  content: <FindMyBusiness />,
  help: 'soemthing here to help'
}, {
  title: 'Parent Company',
  icon: 'team',
  content: <Suppliers />,
  help: 'soemthing here to help'
}, {
  title: 'Child Company',
  icon: 'usergroup-add',
  content: <Suppliers />,
  help: 'soemthing here to help'
},  {
  title: 'Find my Suppliers',
  icon: 'shopping-cart',
  content: <Suppliers />,
  help: 'soemthing here to help'
}, {
  title: 'Find My B2B Customers',
  content: 'Second-content',
  icon: 'shop',
  content: <Suppliers />,
  help: 'soemthing here to help'
}, {
  title: 'Find my Professional Services',
  icon: 'user',
  content: <Suppliers />,
  help: 'soemthing here to help'
}, {
  title: 'Track my Competitors',
  content: 'Second-content',
  icon: 'meh-o',
  content: <Suppliers />,
  help: 'soemthing here to help'
}, {
  title: 'Join Business Associations',
  icon: 'global',
  content: <Suppliers />,
  help: 'soemthing here to help'
}, {
  title: 'POS Systems',
  icon: 'desktop',
  content: <Services />,
  help: 'soemthing here to help'
}, {
  title: 'Credit Card Processor',
  icon: 'credit-card',
  content: <Services />,
  help: 'soemthing here to help'
}, {
  title: 'Complete',
  icon: 'trophy',
  content: <Services />,
  help: 'soemthing here to help'
}];

const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);

class PlugBusiness extends React.Component {
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
      <LayoutWrapper>
      
      <PageHeader>
          {<IntlMessages id="Panel.Merchant.Header" />}
        </PageHeader>
     <Box>
      
                <Row gutter={24}>
                  <Col span="24">
        <Steps  size="small" current={current}>
          {steps.map(item => <Step key={item.title} icon={<Icon type={item.icon} />}  progressDot="true" description={item.description} />
          
    
          )}
        </Steps>
        <h3 style={{ marginTop: 20, marginBottom: 20 }}> 
        {steps[this.state.current].title} <Popover content={(<div>
                {steps[this.state.current].help} 
              </div>)} 
            title={steps[this.state.current].title}  trigger="click">
          <Button type="dashed" icon="question-circle-o"> Help</Button>
          </Popover> 
         </h3> 
        <div className="steps-content">{steps[this.state.current].content}</div>
        <div className="steps-action">
        <InputGroup  style={{ marginBottom: '15px' }}>
             <Row gutter={24}>
            <Col span="8"></Col>
            {
           this.state.current <= 0
             && 
             <Col span="8"></Col>
            }
            
            
               
                

          {
            this.state.current > 0
            &&     
                <Col span="8">
                  <Button className="fullButton square" style={{ marginRight: 8 }} onClick={() => this.prev()}>
                    Previous
                  </Button>
                </Col>
               
              
              
            
          }
          {
            this.state.current < steps.length - 1
            &&
            <Col span="8">
                  <Button className="fullButton square" type="primary" style={{ marginRight: 8 }} onClick={() => this.next()}>
                    Next
                  </Button>
                </Col>
          }
          
          {
            this.state.current === steps.length - 1
            &&
            <Col span="8">
                  <Button className="fullButton square" type="primary" style={{ marginRight: 8 }} 
                  onClick={() => message.success('Processing complete!')}>
                    Done
                  </Button>
                </Col>
          }
</Row>
            </InputGroup>
        </div>
       </Col>
                  
                </Row>
              
     </Box>
      </LayoutWrapper>
    );
  }
}
export default PlugBusiness;