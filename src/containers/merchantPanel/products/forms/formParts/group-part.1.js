import React, { Component } from 'react';
import IntlMessages from '../../../../../components/utility/intlMessages';
import { 
  Col,
  Input,
  Select,
  Popover,
  Icon,
} from 'antd';


const { Option, OptGroup } = Select;



export default class  extends Component {
  render() {
    return (
        <Col span="24">
         { /******************************** 
         
              Starting Section
              
          *******************************/ }
          
         { /* start Name */ }
          <Popover content={ 
              <div>
                {<IntlMessages id="form.part.group.name.popover.content" />} 
              </div>
            } title={<IntlMessages id="form.part.group.name.popover.title" />}  trigger="click">
            <Icon type="question-circle-o" /> <IntlMessages id="form.part.group.name" />
           </Popover>
          <Input placeholder={<IntlMessages id="form.part.group.name.placeholder" />}  style={{ width: '100%', marginBottom: 15, marginTop: 5 }} />
          
         { /* end     name */ }
         { /* start   description */ }
         
          <Popover content={ 
              <div>
                {<IntlMessages id="form.part.group.description.popover.content" />} 
              </div>
            } title={<IntlMessages id="form.part.group.description.popover.title" />}  trigger="click">
            <Icon type="question-circle-o" /> <IntlMessages id="form.part.group.description" />  </Popover>
          
          <Input
            type="textarea"
            placeholder="description"
            autosize={{ minRows: 2, maxRows: 6 }}
            style={{ width: '100%', marginBottom: 15, marginTop: 5 }}
          />
          
         { /* end     description */ }
        
         { /* start   Image */ }
          <Popover content={ 
              <div>
                {<IntlMessages id="form.part.group.name.groupImage.content" />} 
              </div>
            } title={<IntlMessages id="form.part.group.name.groupImage.title" />}  trigger="click">
            <Icon type="question-circle-o" /> <IntlMessages id="form.part.group.groupImage" />  </Popover> <a href="#">add new</a>
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
         { /* end     Image  */ }
         
      </Col>
    );
  }
}
