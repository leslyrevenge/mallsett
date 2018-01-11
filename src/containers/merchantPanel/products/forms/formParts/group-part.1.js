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
         
              Basic Sections
              
          ******************************8*/ }
         {/* start name */}
         
        <Popover content={ 
              <div>
                {<IntlMessages id="form.part.group.name.popover.content" />} 
              </div>
            } title={<IntlMessages id="form.part.group.name.popover.title" />}  trigger="click">
            <Icon type="question-circle-o" />  <IntlMessages id="form.part.group.main.1" />  <IntlMessages id="form.part.group.name" />  </Popover>
          <Input style={{ width: '100%', marginBottom: 15, marginTop: 5 }} />
          
          
         {/* end name */}
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
         { /* start   discounts */ }
         <Popover content={ 
              <div>
                <p>Content</p>
                <p>Content</p>
              </div>
            } title="Title" trigger="click">
            <Icon type="question-circle-o" /> Discount  </Popover> <a href="#">add new</a>
          <Select
            mode= "multiple"
            style={{ width: '100%', marginBottom: 15, marginTop: 5 }}
          >
            <OptGroup label="Sales">
              <Option value="1">Hermain Miller Sales 25% 28 DSE</Option>
              <Option value="2">Summer Sales 25$ 40 DSE</Option>
            </OptGroup>
            <OptGroup label="Special Customers">
              <Option value="3">Day One Customers 25% 28 DSE</Option>
              <Option value="4">First Timers 25$ 40 DSE</Option>
            </OptGroup>
          </Select>
         { /* end   discounts */ }
         
         
         { /* start   image group */ }
         <Popover content={ 
              <IntlMessages id="form.part.group.groupImage.popover.content" />
            } title={<IntlMessages id="form.part.group.groupImage.popover.title" />} trigger="click">
            <Icon type="question-circle-o" />  <IntlMessages id="form.part.group.main.1" />  <IntlMessages id="form.part.group.groupImage" />  </Popover> <a href="#">add new</a>
          <Select
            mode= "multiple"
            style={{ width: '100%', marginBottom: 15, marginTop: 5 }}
          >
            <OptGroup label="jpg and jpeg">
              <Option value="1">this photo</Option>
              <Option value="2">that photo</Option>
            </OptGroup>
            <OptGroup label="gif">
              <Option value="3">lot photo</Option>
              <Option value="4">spend photo</Option>
            </OptGroup>
            <OptGroup label="png">
              <Option value="3">lot photo</Option>
              <Option value="4">spend photo</Option>
            </OptGroup>
          </Select>
         { /* end     image group */ }
         {/* start description */}
         
        <Popover content={ 
              <div>
                {<IntlMessages id="form.part.group.description.popover.content" />} 
              </div>
            } title={<IntlMessages id="form.part.group.description.popover.title" />}  trigger="click">
            <Icon type="question-circle-o" />  <IntlMessages id="form.part.group.main.1" />  <IntlMessages id="form.part.group.description" />  </Popover>
          <Input 
            type="textarea"
            autosize={{ minRows: 2, maxRows: 6 }}
            style={{ width: '100%', marginBottom: 15, marginTop: 5 }}
          />
          
          
         {/* end description */}
        </Col>
      </Row>
    );
  }
}
