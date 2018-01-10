import React, { Component } from 'react';
import IntlMessages from '../../../../../components/utility/intlMessages';
import { 
  Row, 
  Col,
  Select,
  Input,
  Popover,
  Icon,
} from 'antd';

const { Option, OptGroup } = Select;

const readyInSelectAfter = (
  <Select defaultValue="minutes" style={{ width: 80 }}>
    <Option value="minutes">Minutes</Option>
    <Option value="hours">Hours</Option>
    <Option value="days">Days</Option>
    <Option value="weeks">Weeks</Option>
    <Option value="months">Months</Option>
    <Option value="years">Years</Option>
  </Select>
);

export default class  extends Component {
  render() {
    return (
      <Row gutter={24}>
        <Col span="24">
        
         
        { /******************************** 
         
              Ranges
              
          ******************************8*/ }
         { /* start   date and time range */ }
         <Popover content={ 
              <div>
                <p>Content</p>
                <p>Content</p>
              </div>
            } title="Title" trigger="click">
            <Icon type="question-circle-o" />  Date and Time Range  </Popover> <a href="#">add new</a>
          <Select
            mode= "multiple"
            style={{ width: '100%', marginBottom: 15, marginTop: 5 }}
          >
            <OptGroup label="Morning">
              <Option value="1">Sun Morning Jan 8 - Jan 30 from 11am-12pm</Option>
              <Option value="2">Summer Sales 25$ 40 DSE</Option>
            </OptGroup>
            <OptGroup label="Days">
              <Option value="3">Day One Customers 25% 28 DSE</Option>
              <Option value="4">First Timers 25$ 40 DSE</Option>
            </OptGroup>
          </Select>
         { /* end     date and time range */ }
         { /* start   age range */ }
         <Popover content={ 
              <div>
                <p>Content</p>
                <p>Content</p>
              </div>
            } title="Title" trigger="click">
            <Icon type="question-circle-o" />  Age Range  </Popover> <a href="#">add new</a>
          <Select
            mode= "multiple"
            style={{ width: '100%', marginBottom: 15, marginTop: 5 }}
          >
            <OptGroup label="Adults">
              <Option value="1">Adult 18 and older</Option>
              <Option value="2">Drink Age 21 and older </Option>
            </OptGroup>
            <OptGroup label="Kids">
              <Option value="3">Infants 0 - 12 months</Option>
              <Option value="4">Babies 13 to 28 months</Option>
            </OptGroup>
          </Select>
          
         { /* end     age range */ }
         { /* start   class range */ }
         <Popover content={ 
              <div>
                <p>Content</p>
                <p>Content</p>
              </div>
            } title="Title" trigger="click">
            <Icon type="question-circle-o" /> Class Range </Popover> <a href="#">add new</a>
          <Select
            mode= "multiple"
            style={{ width: '100%', marginBottom: 15, marginTop: 5 }}
          >
            <OptGroup label="Small Classes">
              <Option value="1">1</Option>
              <Option value="2">4 - 6</Option>
            </OptGroup>
            <OptGroup label="Big Classes">
              <Option value="3">7 - 12</Option>
              <Option value="4">13 - 15</Option>
            </OptGroup>
          </Select>
         { /* end     class range */ }
         
          { /* start   lifespan */ }
         <Popover content={ 
              <div>
                <p>Content</p>
                <p>Content</p>
              </div>
            } title="Title" trigger="click">
            <Icon type="question-circle-o" /> Lifespan </Popover> <a href="#">add new</a>
          <Select
            mode= "multiple"
            style={{ width: '100%', marginBottom: 15, marginTop: 5 }}
          >
            <OptGroup label="Small Classes">
              <Option value="1">1</Option>
              <Option value="2">4 - 6</Option>
            </OptGroup>
            <OptGroup label="Big Classes">
              <Option value="3">7 - 12</Option>
              <Option value="4">13 - 15</Option>
            </OptGroup>
          </Select>
         { /* end     lifespan */ }
         
         {/* start readiness */}
         
         <Popover content={ 
              <div>
                <p>Content</p>
                <p>Content</p>
              </div>
            } title="Title" trigger="click">
            <Icon type="question-circle-o" />  Ready in ...  </Popover>
          <Input addonAfter={readyInSelectAfter} style={{ width: '100%', marginBottom: 15, marginTop: 5 }} defaultValue="15" />
          
          
         {/* end readiness */}
        </Col>
      </Row>
    );
  }
}
