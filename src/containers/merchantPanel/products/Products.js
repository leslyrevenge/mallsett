import React, { Component } from 'react';
import { 
  Row, 
  Col, 
  Tabs, 
} from 'antd';

import ProductPage from './pages/ProductPage';
import GroupPage from './pages/GroupPage';
import Uploads from './pages/Uploads';
import DatePage from './pages/DatePage';
import TimePage from './pages/TimePage';
import ClassPage from './pages/ClassPage';
import LifespanPage from './pages/LifespanPage';
import AgePage from './pages/AgePage';
import OtherFeesPage from './pages/OtherFeesPage';
import WholesalePage from './pages/WholesalePage';
import OptionsPage from './pages/OptionsPage';
import DescriptionPage from './pages/DescriptionPage';
import SizePage from './pages/SizePage';

import LayoutContentWrapper from '../../../components//utility/layoutWrapper';
import LayoutContent from '../../../components//utility/layoutContent';
const TabPane = Tabs.TabPane;


const steps = [
  {
  title: 'Manage Products',
  noIcon: 'plus-square-o',
  content: <ProductPage />,
  description: 'Watch this short video and learn more about plugging your business with other businesses and consumers.',
  help: 'soemthing here to help',
  key: '1'
}, {
  title: 'Product Grouping',
  noIcon: 'layout',
  content:  <GroupPage />,
  description: '',
  help: 'Groceries',
  key: '2'
}, {
  title: 'Organized Uploads',
  noIcon: 'calendar',
  content: <Uploads />,
  description: '',
  help: 'soemthing here to help',
  key: '3'
}, {
  title: 'Add on Options',
  noIcon: 'clock-circle-o',
  content: <OptionsPage />,
  description: '',
  help: 'soemthing here to help',
  key: '4'
}, {
  title: 'Date Range',
  noIcon: 'calendar',
  content: <DatePage />,
  description: '',
  help: 'soemthing here to help',
  key: '5'
}, {
  title: 'Time Range',
  noIcon: 'environment-o',
  content: <TimePage />,
  description: '',
  help: 'Groceries',
  key: '6'
}, {
  title: 'Age Range',
  noIcon: 'team',
  content: <AgePage />,
  description: '',
  help: 'soemthing here to help',
  key: '7'
},  {
  title: 'Class Range',
  noIcon: 'car',
  content: <ClassPage />,
  description: '',
  help: 'soemthing here to help',
  key: '8'
}, {
  title: 'Lifespan',
  noIcon: 'environment-o',
  content: <LifespanPage />,
  description: '',
  help: 'soemthing here to help',
  key: '9'
}, {
  title: 'Wholesale',
  noIcon: 'book',
  content: <WholesalePage />,
  description: '',
  help: 'soemthing here to help',
  key: '10'
}, {
  title: 'Other Fees',
  noIcon: 'global',
  content: <OtherFeesPage />,
  description: '',
  help: 'soemthing here to help',
  key: '11'
}, {
  title: 'Description',
  noIcon: 'global',
  content: <DescriptionPage />,
  description: '',
  help: 'soemthing here to help',
  key: '12'
}, {
  title: 'Sizes',
  noIcon: 'global',
  content: <SizePage />,
  description: '',
  help: 'soemthing here to help',
  key: '13'
}
];


class BuildYourMall extends Component {
  render() {
    return (
      <LayoutContentWrapper>
        <LayoutContent>
            <Row gutter={24} style={{ marginTop: '0px'}}>
              <Col span="24">
                <Tabs defaultActiveKey='1' size='small'>
                  {steps.map(item =><TabPane key={item.key} tab={<span>{item.title}</span>} >
                  {item.content}
                  </TabPane> )}
                </Tabs>
              </Col>
             </Row>   
            </LayoutContent>
      </LayoutContentWrapper>
    );
  }
}

export default BuildYourMall;