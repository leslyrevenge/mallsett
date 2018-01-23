import React, { Component } from 'react';
import IntlMessages from '../../../../../components/utility/intlMessages';
import { 
  Row, 
  Col,
  Select,
  Input,
  Popover,
  Icon,
  Switch,
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

const indentSelectAfter = (
  <Select defaultValue="minutes" style={{ width: 80 }}>
    <Option value="minutes">Begining</Option>
    <Option value="hours">End</Option>
  </Select>
);

export default class  extends Component {
   state = {
    navigateSection: true,
    publishSection: true,
    overiderSection: false
  };
  handlePublishedChange = (publishSection) => {
    this.setState({ publishSection });
  }
  handleNaviagionChange = (navigateSection) => {
    this.setState({ navigateSection });
  }
  handleOverideriderChange = (overiderSection) => {
    this.setState({ overiderSection });
  }
  render() {
    const { navigateSection, publishSection, overiderSection } = this.state;
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
        </Col>
        { /******************************** 
         
              Ending Section
              
          ******************************8*/ }
         { /* start   overide products */ }
         <Col span="24"  style={{ width: '100%', marginBottom: 15, marginTop: 5 }}>
            <Switch size="small" 
              checked={overiderSection} 
              checkedChildren="yes"
              unCheckedChildren="no"
              onChange={this.handleOverideriderChange} 
              style={{ marginBottom: 15, marginTop: 15  }}
            /> <Popover content={ 
            
                 <IntlMessages id="form.part.group.overide.popover.content" />
            
            } title= {<div> 
              <IntlMessages id="form.part.group.main.1" /> <IntlMessages id="form.part.group.overide.popover.title" />
              </div> }  trigger="click">
              <IntlMessages id="form.part.group.overide" />  :  <Icon type="question-circle-o" />   </Popover>    
            </Col>
         { /* end     overide products  */ }
         { /* start   navigate sections */ }
         <Col span="24"  style={{ width: '100%', marginBottom: 15, marginTop: 5 }}>
            <Switch size="small" 
              checked={navigateSection} 
              checkedChildren="yes"
              unCheckedChildren="no"
              onChange={this.handleNaviagionChange} 
              style={{ marginBottom: 15,  marginTop: 15  }}
            /> <Popover content={ 
              <IntlMessages id="form.part.group.navigate.popover.content" />
            } title={<div> 
              <IntlMessages id="form.part.group.main.1" /> <IntlMessages id="form.part.group.navigate.popover.title" />
              </div> } trigger="click">
            <IntlMessages id="form.part.group.navigate" /> : <Icon type="question-circle-o" />   </Popover>    
            </Col>
         { /* end     navigate sections  */ }
         { /* start   publish sections */ }

            <Col span="24"  style={{ width: '100%', marginBottom: 15, marginTop: 5 }}>
            <Switch size="small" 
              checked={publishSection}
              checkedChildren="yes"
              unCheckedChildren="no"
              onChange={this.handlePublishedChange} 
              style={{ marginBottom: 15,  marginTop: 15  }}
            /> <Popover content={ 
              <IntlMessages id="form.part.group.published.popover.content" />
            } title={<div> 
              <IntlMessages id="form.part.group.main.1" /> <IntlMessages id="form.part.group.published.popover.title" />
              </div> } trigger="click">
            <IntlMessages id="form.part.group.published" /> : <Icon type="question-circle-o" />   </Popover>    
            </Col>
            
         { /* end     publish sections */ }
         
          <Col span="24">
        
         
        { /******************************** 
         
              Ranges
              
          ******************************8*/ }
          
         { /* start   Days */ }
         <Popover content={ 
              <div>
                <p>Content</p>
                <p>Content</p>
              </div>
            } title="Title" trigger="click">
            <Icon type="question-circle-o" />Select Days  </Popover> <a href="#">add new</a>
          <Select
            mode= "multiple"
            style={{ width: '100%', marginBottom: 15, marginTop: 5 }}
          >
            <OptGroup label="Weekdays">
              <Option value="monday">Monday</Option>
              <Option value="tuesday">Tuesday</Option>
              <Option value="wednesday">Wednesday</Option>
              <Option value="thursday">Thursday</Option>
              <Option value="friday">Friday</Option>
              <Option value="saturday">Saturday</Option>
              <Option value="sunday">Sunday</Option>
            </OptGroup>
          </Select>
         { /* end   days */ }
        { /* start   date range */ }
         <Popover content={ 
              <div>
                <p>Content</p>
                <p>Content</p>
              </div>
            } title="Title" trigger="click">
            <Icon type="question-circle-o" />  Date Range  </Popover> <a href="#">add new</a>
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
         { /* end     date range */ }
         { /* start   time range */ }
         <Popover content={ 
              <div>
                <p>Content</p>
                <p>Content</p>
              </div>
            } title="Title" trigger="click">
            <Icon type="question-circle-o" />  Time Range  </Popover> <a href="#">add new</a>
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
         { /* end  time range */ }
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
        <Col span="24">
         
          { /******************************** 
         
              Specification Section
              
          ******************************8*/ }
         { /* start   for products... */ }
             <Popover content={ 
              <div>
                <p>Content</p>
                <p>Content</p>
              </div>
            } title="Title" trigger="click">
            <Icon type="question-circle-o" /> Store Locations </Popover><a href="#">add new</a>
          <Select
            mode= "multiple"
            style={{ width: '100%', marginBottom: 15, marginTop: 5 }}
          >
            <OptGroup label="Product Categories">
              <Option value="21">Product 1</Option>
              <Option value="21">Product 2</Option>
              
            </OptGroup>
          </Select>
         { /* end     for products  */ }
         { /* start   for products... */ }
             <Popover content={ 
              <div>
                <p>Content</p>
                <p>Content</p>
              </div>
            } title="Title" trigger="click">
            <Icon type="question-circle-o" /> Add to the following Products  </Popover><a href="#">add new</a>
          <Select
            mode= "multiple"
            style={{ width: '100%', marginBottom: 15, marginTop: 5 }}
          >
            <OptGroup label="Product Categories">
              <Option value="21">Product 1</Option>
              <Option value="21">Product 2</Option>
              
            </OptGroup>
          </Select>
         { /* end     for products  */ }
         { /* start   customers */ }
          
          <Popover content={ 
              <div>
                <p>Content</p>
                <p>Content</p>
              </div>
            } title="Title" trigger="click">
            <Icon type="question-circle-o" /> Specific Customers  </Popover><a href="#">add new</a>
          <Select
            mode= "multiple"
            style={{ width: '100%', marginBottom: 15, marginTop: 5 }}
          >
            <OptGroup label="Customer by Group">
              <Option value="21">Top 10% Spender</Option>
              <Option value="21">Top 25% Spender</Option>
              <Option value="21">Top 50% Spender</Option>
              <Option value="21">Low 10% Spender</Option>
              <Option value="21">Low 25% Spender</Option>
              <Option value="21">Low 50% Spender</Option>
              <Option value="3">Loyal Customers</Option>
              <Option value="4">Impulsive Customers</Option>
              <Option value="5">Potential Customers</Option>
              <Option value="6">New Customers</Option>
              <Option value="7">Discount Customers</Option>
            </OptGroup>
            <OptGroup label="Customer by Individuals">
              <Option value="11">James Brown</Option>
              <Option value="12">Stevie Wonder</Option>
              <Option value="13">Maxwell</Option>
              <Option value="14">Wyclef</Option>
            </OptGroup>
          </Select>
             
         { /* end     customers  */ }.
         { /* start   marketing services */ }
          
           <Popover content={ 
              <div>
                <p>Content</p>
                <p>Content</p>
              </div>
            } title="Title" trigger="click">
            <Icon type="question-circle-o" /> Exclusive Marketing Agency  </Popover> <a href="#">add new</a>
          <Select
            mode= "multiple"
            style={{ width: '100%', marginBottom: 15, marginTop: 5 }}
          >
            <OptGroup label="Sales">
              <Option value="1">Mad Men</Option>
              <Option value="2">Mareting Centeral</Option>
            </OptGroup>
            <OptGroup label="Special Customers">
              <Option value="3">Day One Customers 25% 28 DSE</Option>
              <Option value="4">First Timers 25$ 40 DSE</Option>
            </OptGroup>
          </Select>
             
         { /* end     marketing service  */ }
         { /* start   terms */ }
             <Popover content={ 
              <div>
                <p>Content</p>
                <p>Content</p>
              </div>
            } title="Title" trigger="click">
            <Icon type="question-circle-o" /> Terms and Conditions </Popover> <a href="#">add new</a>
          <Select
            mode= "multiple"
            style={{ width: '100%', marginBottom: 15, marginTop: 5 }}
          >
            <OptGroup label="Sales">
              <Option value="1">Celie Delivery</Option>
              <Option value="2">Uber</Option>
            </OptGroup>
            <OptGroup label="Special Customers">
              <Option value="3">Day One Customers 25% 28 DSE</Option>
              <Option value="4">First Timers 25$ 40 DSE</Option>
            </OptGroup>
          </Select>
         { /* end    terms  */ }
         { /* start   for privacy policy... */ }
             <Popover content={ 
              <div>
                <p>Content</p>
                <p>Content</p>
              </div>
            } title="Title" trigger="click">
            <Icon type="question-circle-o" /> Privacy Policy </Popover><a href="#">add new</a>
          <Select
            mode= "multiple"
            style={{ width: '100%', marginBottom: 15, marginTop: 5 }}
          >
            <OptGroup label="Product Categories">
              <Option value="21">Product 1</Option>
              <Option value="21">Product 2</Option>
              
            </OptGroup>
          </Select>
         { /* end     for privacy policy  */ }
         { /* start   for description... */ }
             <Popover content={ 
              <div>
                <p>Content</p>
                <p>Content</p>
              </div>
            } title="Title" trigger="click">
            <Icon type="question-circle-o" /> Description </Popover><a href="#">add new</a>
          <Select
            mode= "multiple"
            style={{ width: '100%', marginBottom: 15, marginTop: 5 }}
          >
            <OptGroup label="Select Description">
              <Option value="21">Description one</Option>
              <Option value="21">Description two</Option>
              
            </OptGroup>
          </Select>
         { /* end     for description  */ }
         { /* start   indent - name */ }
          <Popover content={ 
              <div>
                <p>Content</p>
                <p>Content</p>
              </div>
            } title="Title" trigger="click">
            <Icon type="question-circle-o" />  Indent - Name  </Popover>
          <Input addonAfter={indentSelectAfter} style={{ width: '100%', marginBottom: 15, marginTop: 5 }} defaultValue="" />
          
         { /* end     indent - name  */ }
         { /* start   indent - description */ }
         <Popover content={ 
              <div>
                <p>Content</p>
                <p>Content</p>
              </div>
            } title="Title" trigger="click">
            <Icon type="question-circle-o" />  Indent - Description  </Popover>
          <Input addonAfter={indentSelectAfter} style={{ width: '100%', marginBottom: 15, marginTop: 5 }} defaultValue="" />
          
         { /* end     indent - description  */ } 

        </Col>
        <Col span="24">
         
         { /******************************** 
         
              Ending Section
              
          *******************************/ }
         { /* start     add on options   */ }
         <Popover content={ 
              <div>
                <p>Content</p>
                <p>Content</p>
              </div>
            } title="Title" trigger="click">
            <Icon type="question-circle-o" /> Add on Options  </Popover><a href="#">add new</a>
          <Select
            mode= "multiple"
            style={{ width: '100%', marginBottom: 15, marginTop: 5 }}
          >
            <OptGroup label="Product Categories">
              <Option value="21">Product 1</Option>
              <Option value="21">Product 2</Option>
              
            </OptGroup>
          </Select>
        { /* end     add on options   */ }
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
         
         
         { /* start   wholesale */ }

            <Popover content={ 
              <div>
                <p>Content</p>
                <p>Content</p>
              </div>
            } title="Title" trigger="click">
            <Icon type="question-circle-o" /> Wholesale Discounts  </Popover><a href="#">add new</a>
          <Select
            mode= "multiple"
            style={{ width: '100%', marginBottom: 15, marginTop: 5 }}
          >
            <OptGroup label="Customer by Group">
              <Option value="21">Top 10% Spender</Option>
              <Option value="21">Top 25% Spender</Option>
              <Option value="21">Top 50% Spender</Option>
              <Option value="21">Low 10% Spender</Option>
              <Option value="21">Low 25% Spender</Option>
              <Option value="21">Low 50% Spender</Option>
              <Option value="3">Loyal Customers</Option>
              <Option value="4">Impulsive Customers</Option>
              <Option value="5">Potential Customers</Option>
              <Option value="6">New Customers</Option>
              <Option value="7">Discount Customers</Option>
            </OptGroup>
            <OptGroup label="Customer by Individuals">
              <Option value="11">James Brown</Option>
              <Option value="12">Stevie Wonder</Option>
              <Option value="13">Maxwell</Option>
              <Option value="14">Wyclef</Option>
            </OptGroup>
          </Select>
            
         { /* end     wholesale */ }
         
          { /* start   other fees */ }
          
          <Popover content={ 
              <div>
                <p>Content</p>
                <p>Content</p>
              </div>
            } title="Title" trigger="click">
            <Icon type="question-circle-o" /> Other Fees  </Popover><a href="#">add new</a>
          <Select
            mode= "multiple"
            style={{ width: '100%', marginBottom: 15, marginTop: 5 }}
          >
            <OptGroup label="Category">
              <Option value="21">Fee 1</Option>
              <Option value="21">Fee 2</Option>
              
            </OptGroup>
          </Select>
          
          { /* end     other fees */ }
         </Col>

      </Row>
    );
  }
}
