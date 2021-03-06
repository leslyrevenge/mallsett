import React, { Component } from 'react';
import Tabs, { TabPane } from '../../components/uielements/tabs';
import PageHeader from '../../components/utility/pageHeader';
import Box from '../../components/utility/box';
import LayoutWrapper from '../../components/utility/layoutWrapper';
import IntlMessages from '../../components/utility/intlMessages';
import { Row, Col, Card } from 'antd';
import { Icon } from 'antd';

import UserGamification from './Gamification/userGamification';

import CreateAddress from './Forms/CreateAddress';
import Createuser from './Forms/CreateUser';
import UpdateUser from './Forms/UpdateUser';
import UserLogin from './Forms/UserLogin';
import { connect } from "react-redux"
import ReadAddress from './Lists/ReadAddress';
import ItemUser from './Lists/ItemUser';

const { Meta } = "Card"

function mapStateToProps(state) {
  return {
    auth: state.auth
  }
}
// const TabPane = Tabs.TabPane;

function callback(key) { }

class UserPanelTab extends Component {
  constructor(props) {
    super(props);
  }

  logout() {
    localStorage.clear();
    window.location.assign("/")
  }
  render() {
    const logoutBtn = this.props.auth.isAuthenticated?<span onClick={this.logout.bind(this)} className="red pointer textAlignLeft"> <Icon type="logout" /> logout </span>:null;
    console.log(this.props)
    return (
      <LayoutWrapper>
        <PageHeader>
          {<IntlMessages id="forms.Tabs.UserPanel.Header" />}
        </PageHeader>
        <Box >
          {this.props.auth.isAuthenticated ?
            <div className="card-container">
              <Tabs
                defaultActiveKey="1"
                tabPosition="right"
                tabBarExtraContent={logoutBtn}
              >
                <UserGamification />
                <TabPane className="margin-medium-bottom" tab={<span><Icon type="check-circle-o" />Dashboard</span>}  key="1">
                  <Row gutter={8}>
                    <Col span="14">
                      Dashboard Detail
                  </Col>
                    <Col span="10">
                      News
                  </Col>
                  </Row>
                </TabPane>
                <TabPane tab={<span><Icon type="environment-o" />Delivery Locations</span>} key="2" >
                  <Row gutter={8}>
                    <Col span="24" >
                      Add Delivery Address - make sure your orders are delivered to the right place!
                  </Col>
                  </Row>
                  <Row gutter={8}>
                    <Col span="12" >
                      <CreateAddress />

                    </Col>
                    <Col span="12">

                      <ReadAddress />
                    </Col>
                  </Row>

                </TabPane>
                <TabPane tab={<span><Icon type="user-add" />Include Dependents</span>} key="3" >
                  <Row>
                    <Col span="14">
                      Add Dependents
                  </Col>
                    <Col span="10">
                      Dependents List
                  </Col>
                  </Row>
                </TabPane>
                <TabPane tab={<span><Icon type="upload" />Organize Files</span>} key="4" >
                  <Row>
                    <Col span="14">
                      Add Files
                  </Col>
                    <Col span="10">
                      Files List
                  </Col>
                  </Row>
                </TabPane>
                <TabPane tab={<span><Icon type="car" />Track Orders</span>} key="5" >
                  <Row>
                    <Col span="14">
                      Order History
                  </Col>
                    <Col span="10">
                      Order List
                  </Col>
                  </Row>
                </TabPane>
                <TabPane tab={<span><Icon type="safety" />Profile Settings</span>} key="6">
                  <Row gutter={8}>
                    <Col span="24" >
                      Signup - order anything, not just food
                  </Col>
                  </Row>
                  <Row gutter={8}>
                    <Col span="24">
                      {this.props.auth.isAuthenticated === true? null:<Createuser />}
                      {this.props.auth.isAuthenticated === true? <UpdateUser />:null}
                      {this.props.auth.isAuthenticated === true? null :
                        <Card title="Login">
                          <UserLogin />
                        </Card>
                      }
                    </Col>
                    <Col span="10">
                      <ItemUser />
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tab={<span><Icon type="idcard" />Resume Portfolio</span>} key="7" >
                  <Row>
                    <Col span="10">
                      Add Items
                  </Col>
                    <Col span="14">
                      Portfolio View
                  </Col>
                  </Row>
                </TabPane>
                <TabPane tab={<span><Icon type="coffee" />Local Jobs</span>} key="8" >
                  <Row>
                    <Col span="14">
                      Job Detail
                  </Col>
                    <Col span="10">
                      Search Job
                  </Col>
                  </Row>
                </TabPane>
                <TabPane tab={<span><Icon type="calendar" />Schedule</span>} key="9" >
                  <Row>
                    <Col span="14">
                      Calendar
                  </Col>
                    <Col span="10">
                      Special Notes
                  </Col>
                  </Row>
                </TabPane>
                <TabPane tab={<span><Icon type="message" />My Messages</span>} key="10" >
                  <Row>
                    <Col span="24">
                      Message Here
                  </Col>

                  </Row>
                </TabPane>
                <TabPane tab={<span><Icon type="trademark" />Terms and Conditions</span>} key="11">
                  <Row>
                    <Col span="14">
                      Terms and Conditions
                  </Col>
                    <Col span="10">
                      Term List
                  </Col>
                  </Row>
                </TabPane>
                <TabPane tab={<span><Icon type="export" />Privacy Policies</span>} key="12">
                  <Row>
                    <Col span="14">
                      Privacy Policy
                  </Col>
                    <Col span="10">
                      Privacy Policy List
                  </Col>
                  </Row>
                </TabPane>
                <TabPane tab={<span><Icon type="customer-service" />FAQ</span>} key="13">
                  <Row>
                    <Col span="14">
                      FAQ
                  </Col>
                    <Col span="10">
                      FAQ List
                  </Col>
                  </Row>
                </TabPane>
              </Tabs>
            </div> :
            <div className="card-container">
              <Tabs
                defaultActiveKey="1"
                tabPosition="right"
                tabBarExtraContent={logoutBtn}
              >
                <UserGamification />
                <TabPane className="margin-medium-bottom" tab={<span><Icon type="check-circle-o" />Dashboard</span>} disabled key="6">
                  <Row gutter={8}>
                    <Col span="14">
                      Dashboard Detail
                  </Col>
                    <Col span="10">
                      News
                  </Col>
                  </Row>
                </TabPane>
                <TabPane tab={<span><Icon type="environment-o" />Delivery Locations</span>} key="2" disabled>
                  <Row gutter={8}>
                    <Col span="24" >
                      Add Delivery Address - make sure your orders are delivered to the right place!
                  </Col>
                  </Row>
                  <Row gutter={8}>
                    <Col span="12" >
                      <CreateAddress />

                    </Col>
                    <Col span="12">

                      <ReadAddress />
                    </Col>
                  </Row>

                </TabPane>
                <TabPane tab={<span><Icon type="user-add" />Include Dependents</span>} key="3" disabled>
                  <Row>
                    <Col span="14">
                      Add Dependents
                  </Col>
                    <Col span="10">
                      Dependents List
                  </Col>
                  </Row>
                </TabPane>
                <TabPane tab={<span><Icon type="upload" />Organize Files</span>} key="4" disabled>
                  <Row>
                    <Col span="14">
                      Add Files
                  </Col>
                    <Col span="10">
                      Files List
                  </Col>
                  </Row>
                </TabPane>
                <TabPane tab={<span><Icon type="car" />Track Orders</span>} key="5" disabled>
                  <Row>
                    <Col span="14">
                      Order History
                  </Col>
                    <Col span="10">
                      Order List
                  </Col>
                  </Row>
                </TabPane>
                <TabPane tab={<span><Icon type="safety" />Profile Settings</span>} key="1">
                  <Row gutter={8}>
                    <Col span="24" >
                      Signup - order anything, not just food
                  </Col>
                  </Row>
                  <Row gutter={8}>
                    <Col span="24">
                      {/* {this.props.auth.isAuthenticated?null:<CreateUser />} */}
                      <Createuser />
                      {this.props.auth.isAuthenticated ? null :
                        <Card title="Login" style={{ marginTop: "10px" }}>
                          <UserLogin />
                        </Card>
                      }
                    </Col>
                  
                  </Row>
                </TabPane>
                <TabPane tab={<span><Icon type="idcard" />Resume Portfolio</span>} key="7" disabled>
                  <Row>
                    <Col span="10">
                      Add Items
                  </Col>
                    <Col span="14">
                      Portfolio View
                  </Col>
                  </Row>
                </TabPane>
                <TabPane tab={<span><Icon type="coffee" />Local Jobs</span>} key="8" disabled>
                  <Row>
                    <Col span="14">
                      Job Detail
                  </Col>
                    <Col span="10">
                      Search Job
                  </Col>
                  </Row>
                </TabPane>
                <TabPane tab={<span><Icon type="calendar" />Schedule</span>} key="9" disabled>
                  <Row>
                    <Col span="14">
                      Calendar
                  </Col>
                    <Col span="10">
                      Special Notes
                  </Col>
                  </Row>
                </TabPane>
                <TabPane tab={<span><Icon type="message" />My Messages</span>} key="10" disabled>
                  <Row>
                    <Col span="24">
                      Message Here
                  </Col>

                  </Row>
                </TabPane>
                <TabPane tab={<span><Icon type="trademark" />Terms and Conditions</span>} key="11">
                  <Row>
                    <Col span="14">
                      Terms and Conditions
                  </Col>
                    <Col span="10">
                      Term List
                  </Col>
                  </Row>
                </TabPane>
                <TabPane tab={<span><Icon type="export" />Privacy Policies</span>} key="12">
                  <Row>
                    <Col span="14">
                      Privacy Policy
                  </Col>
                    <Col span="10">
                      Privacy Policy List
                  </Col>
                  </Row>
                </TabPane>
                <TabPane tab={<span><Icon type="customer-service" />FAQ</span>} key="13">
                  <Row>
                    <Col span="14">
                      FAQ
                  </Col>
                    <Col span="10">
                      FAQ List
                  </Col>
                  </Row>
                </TabPane>
              </Tabs>
            </div>
          }
        </Box>
      </LayoutWrapper>
    );
  }
}

export default connect(mapStateToProps)(UserPanelTab)