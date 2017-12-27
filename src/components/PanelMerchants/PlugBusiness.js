import React, { Component } from 'react';
import Tabs, { TabPane } from '../../components/uielements/tabs';
import PageHeader from '../../components/utility/pageHeader';
import Box from '../../components/utility/box';
import LayoutWrapper from '../../components/utility/layoutWrapper';
import IntlMessages from '../../components/utility/intlMessages';
import { Row, Col } from 'antd';
import { Icon } from 'antd';
import { Timeline } from 'antd';
import YouTube from 'react-youtube';

import UserGamification from './Gamification/userGamification';
import { Popover, Button } from 'antd';

import FindMyBusiness from './Forms/FindMyBusiness';
import AssignedPhoneNumber from './Forms/AssignedPhoneNumber';
import BusinessDetail from './Forms/BusinessDetail';
import Competitors from './Forms/Competitors';
import Suppliers from './Forms/Suppliers';
import PosSystems from './Forms/PosSystems';
import ProfessionalServices from './Forms/ProfessionalServices';
import Customers from './Forms/Customers';
import CreditCardProcessor from './Forms/CreditCardProcessor';
import BusinessAssociations from './Forms/BusinessAssociations';
import CompletePlugBusiness from './Forms/FindMyBusiness';

import BusinessProfile from './Lists/BusinessProfile';
import BusinessLogo from './Forms/BusinessLogo';


// const TabPane = Tabs.TabPane;

function callback(key) {}
const logoutBtn = <span className="red pointer textAlignLeft"> <Icon type="logout" /> logout </span>;

  
  const opts = {
      width: '100%',
      height: '100%',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
        controls: 0,
        rel: 0 ,
        showinfo: 0,
        frameborder: 0,
        modestbranding: 1
      }
    };
    
    const whyContents = {
      FindMyBusiness: (
  <div>
    <YouTube
        videoId="MXKkygPGYi0"
        opts={opts}
      />
  </div>),
  AssignPhoneNumber: (
  <div>
    <YouTube
        videoId="MXKkygPGYi0"
        opts={opts}
      />
  </div>)
  
};
export default class UserPanelTab extends Component {
  constructor(props) {
    super(props);

  }


  render() {
    return (
      <LayoutWrapper>
      <PageHeader>
          {<IntlMessages id="Panel.Merchant.Header" />}
        </PageHeader>
      <Box>
      
                <Row gutter={24}>
                  <Col span="24">
                    <Timeline>
    <Timeline.Item dot={<Icon type="bell" style={{ fontSize: '16px' }} />} color="green">
      <Row gutter={16}>
        <Col span="24">
         <h3> {<IntlMessages id="Panel.Merchant.Start" />} </h3>
        </Col>
        <Col span="12"> 
        
        <YouTube
        videoId="MXKkygPGYi0"
        opts={opts}
      />
        
        </Col>
        <Col span="12">
          notes to merchant is here. This address isso cool to find. I love it very much. notes to merchant is here. This address isso cool to find. I love it very much. notes to merchant is here. This address isso cool to find. I love it very much. 

        </Col>
      </Row>
    
    </Timeline.Item>
    <Timeline.Item dot={<Icon type="environment-o" style={{ fontSize: '16px' }} />} color="red">
      <Row gutter={16}>
        <Col span="24">
         <h3> {<IntlMessages id="Panel.Merchant.FindMyBusiness" />} <Popover content={whyContents.AssignPhoneNumber} title="Why do I need this?" trigger="click">
      <Button type="dashed" icon="question-circle-o">Help!</Button>

    </Popover>  </h3>
        </Col>
        <Col span="24">
            <FindMyBusiness />
        </Col>
      </Row>
    </Timeline.Item>
    
    <Timeline.Item dot={<Icon type="phone" style={{ fontSize: '16px' }} />} color="red">
      <Row gutter={16}>
        <Col span="24">
         <h3> {<IntlMessages id="Panel.Merchant.AssignedPhoneNumber" />} <Popover content={whyContents.AssignPhoneNumber} title="Why do I need this?" trigger="click">
      <Button type="dashed" icon="question-circle-o">Help!</Button>

    </Popover> </h3>
        </Col>
        <Col span="24">
            <AssignedPhoneNumber />
        </Col>
      </Row>
    </Timeline.Item>

    <Timeline.Item dot={<Icon type="edit" style={{ fontSize: '16px' }} />} color="red">
      <Row gutter={16}>
        <Col span="24">
         <h3> {<IntlMessages id="Panel.Merchant.BusinessDetail" />} <Popover content={whyContents.BusinessDetail} title="Why do I need this?" trigger="click">
      <Button type="dashed" icon="question-circle-o">Help!</Button>

    </Popover> </h3>
        </Col>
        <Col span="24">
            <BusinessDetail />
        </Col>
      </Row>
    </Timeline.Item>
     <Timeline.Item dot={<Icon type="picture" style={{ fontSize: '16px' }} />} color="red">
      <Row gutter={16}>
        <Col span="24">
         <h3> {<IntlMessages id="Panel.Merchant.BusinessLogo" />} <Popover content={whyContents.AssignPhoneNumber} title="Why do I need this?" trigger="click">
      <Button type="dashed" icon="question-circle-o">Help!</Button>

    </Popover> </h3>
        </Col>
        <Col span="24">
            <BusinessLogo />
        </Col>
      </Row>
    </Timeline.Item>
    
    
    <Timeline.Item dot={<Icon type="meh-o" style={{ fontSize: '16px' }} />} color="red">
      <Row gutter={16}>
        <Col span="24">
         <h3> {<IntlMessages id="Panel.Merchant.Competitors" />} <Popover content={whyContents.AssignPhoneNumber} title="Why do I need this?" trigger="click">
      <Button type="dashed" icon="question-circle-o">Help!</Button>

    </Popover>  </h3>
        </Col>

        <Col span="24">
            <Competitors />
        </Col>
      </Row>
    </Timeline.Item>
    
   

    <Timeline.Item dot={<Icon type="shopping-cart" style={{ fontSize: '16px' }} />} color="red">
      <Row gutter={16}>
        <Col span="24">
         <h3> {<IntlMessages id="Panel.Merchant.Suppliers" />} <Popover content={whyContents.AssignPhoneNumber} title="Why do I need this?" trigger="click">
      <Button type="dashed" icon="question-circle-o">Help!</Button>

    </Popover>  </h3>
        </Col>
        <Col span="24">
            <Suppliers />
        </Col>
      </Row>
    </Timeline.Item>
    
    <Timeline.Item dot={<Icon type="shop" style={{ fontSize: '16px' }} />} color="red">
      <Row gutter={16}>
        <Col span="24">
         <h3> {<IntlMessages id="Panel.Merchant.Customers" />} <Popover content={whyContents.AssignPhoneNumber} title="Why do I need this?" trigger="click">
      <Button type="dashed" icon="question-circle-o">Help!</Button>

    </Popover> </h3>
        </Col>

        <Col span="24">
            <Customers />
        </Col>
      </Row>
    </Timeline.Item>
    
     <Timeline.Item dot={<Icon type="team" style={{ fontSize: '16px' }} />} color="red">
      <Row gutter={16}>
        <Col span="24">
         <h3> {<IntlMessages id="Panel.Merchant.BusinessAssociations" />} <Popover content={whyContents.AssignPhoneNumber} title="Why do I need this?" trigger="click">
      <Button type="dashed" icon="question-circle-o">Help!</Button>

    </Popover>  </h3>
        </Col>

        <Col span="24">
            <BusinessAssociations />
        </Col>
      </Row>
    </Timeline.Item>
    <Timeline.Item dot={<Icon type="pie-chart" style={{ fontSize: '16px' }} />} color="red">
      <Row gutter={16}>
        <Col span="24">
         <h3> {<IntlMessages id="Panel.Merchant.ProfessionalServices" />} <Popover content={whyContents.AssignPhoneNumber} title="Why do I need this?" trigger="click">
      <Button type="dashed" icon="question-circle-o">Help!</Button>

    </Popover> </h3>
        </Col>

        <Col span="24">
            <ProfessionalServices />
        </Col>
      </Row>
    </Timeline.Item>
    
    
    <Timeline.Item dot={<Icon type="desktop" style={{ fontSize: '16px' }} />} color="red">
      <Row gutter={16}>
        <Col span="24">
         <h3> {<IntlMessages id="Panel.Merchant.PosSystems" />} <Popover content={whyContents.AssignPhoneNumber} title="Why do I need this?" trigger="click">
      <Button type="dashed" icon="question-circle-o">Help!</Button>

    </Popover>  </h3>
        </Col>

        <Col span="24">
            <PosSystems />
        </Col>
      </Row>
    </Timeline.Item>
    
    
    
    
    <Timeline.Item dot={<Icon type="credit-card" style={{ fontSize: '16px' }} />} color="red">
      <Row gutter={16}>
        <Col span="24">
         <h3> {<IntlMessages id="Panel.Merchant.CreditCardProcessor" />} <Popover content={whyContents.AssignPhoneNumber} title="Why do I need this?" trigger="click">
      <Button type="dashed" icon="question-circle-o">Help!</Button>

    </Popover>  </h3>
        </Col>

        <Col span="24">
            <CreditCardProcessor />
        </Col>
      </Row>
    </Timeline.Item>

   
    
    
    
    <Timeline.Item dot={<Icon type="trophy" style={{ fontSize: '16px' }} />} color="red">
    <Row gutter={16}>
        <Col span="24">
         <h3> {<IntlMessages id="Panel.Merchant.CompletePlugBusiness" />} </h3>
        </Col>
        <Col span="12"> 
        
        <YouTube
        videoId="MXKkygPGYi0"
        opts={opts}
      />
        
        </Col>
        <Col span="12">
          notes to merchant is here. This address isso cool to find. I love it very much. notes to merchant is here. This address isso cool to find. I love it very much. notes to merchant is here. This address isso cool to find. I love it very much. 

        </Col>
      </Row>
    </Timeline.Item>
    

  </Timeline>
                  </Col>
                  
                </Row>
              
        </Box>
      </LayoutWrapper>
    );
  }
}
