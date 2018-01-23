import React, { Component } from 'react';
import IntlMessages from '../../../../components/utility/intlMessages';
import { 
  Row, 
  Col,
  Select,
  Input,
  Popover,
  Icon,
  Switch,
  Button
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
        <Row gutter={8}>
        
         <Col span="24">
        { /******************************** 
         
              Basic Sections
              
          ******************************8*/ }
         {/* start name */}
         
        <Popover content={ 
              <div>
                {<IntlMessages id="form.part.product.name.popover.content" />} 
              </div>
            } title={<IntlMessages id="form.part.product.name.popover.title" />}  trigger="click">
            <Icon type="question-circle-o" />  <IntlMessages id="form.part.product.main.1" />  <IntlMessages id="form.part.product.name" />  </Popover>
          <Input style={{ width: '100%', marginBottom: 15, marginTop: 5 }} />
          
          
         {/* end name */}
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
         { /* start  size   */ }
         <Popover content={ 
              <div>
                <p>Content</p>
                <p>Content</p>
              </div>
            } title="Title" trigger="click">
            <Icon type="question-circle-o" /> Size  </Popover><a href="#">add new</a>
          <Select
            mode= "multiple"
            style={{ width: '100%', marginBottom: 15, marginTop: 5 }}
          >
            <OptGroup label="Sizes">
              <Option value="21">Size One</Option>
              <Option value="22">Size Two</Option>
              
            </OptGroup>
          </Select>
        { /* end   soze   */ }
          { /* start   product roups */ }
         <Popover content={ 
              <div>
                <p>Content</p>
                <p>Content</p>
              </div>
            } title="Title" trigger="click">
            <Icon type="question-circle-o" />Product Groups  </Popover> <a href="#">add new</a>
          <Select
            mode= "multiple"
            style={{ width: '100%', marginBottom: 15, marginTop: 5 }}
          >
            <OptGroup label="Group Name">
              <Option value="monday">Group Name</Option>
              <Option value="tuesday">Group Name</Option>
              <Option value="wednesday">Group Name</Option>
              <Option value="thursday">Group Name</Option>
              <Option value="friday">Group Name</Option>
              <Option value="saturday">Group Name</Option>
              <Option value="sunday">Group Name</Option>
            </OptGroup>
          </Select>
         { /* end   product groups */ }
         
         { /* start   image product */ }
         <Popover content={ 
              <IntlMessages id="form.part.product.productImage.popover.content" />
            } title={<IntlMessages id="form.part.product.productImage.popover.title" />} trigger="click">
            <Icon type="question-circle-o" />  <IntlMessages id="form.part.product.main.1" />  <IntlMessages id="form.part.product.productImage" />  </Popover> <a href="#">add new</a>
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
         { /* end     image product */ }

         
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
         <Row gutter={8}>
         { /* start   global */ }
         <Col span="8" >
            <Switch size="small" 
              checked={overiderSection} 
              checkedChildren="yes"
              unCheckedChildren="no"
              onChange={this.handleOverideriderChange} 
              style={{ marginBottom: 15, marginTop: 15  }}
            /> <Popover content={ 
            
                 <IntlMessages id="form.part.product.overide.popover.content" />
            
            } title= {<div> 
              <IntlMessages id="form.part.product.main.1" /> <IntlMessages id="form.part.product.overide.popover.title" />
              </div> }  trigger="click">
              <IntlMessages id="global" />  :  <Icon type="question-circle-o" />   </Popover>    
            </Col>
         { /* end     global  */ }
         { /* start   associates */ }
         <Col span="8" >
            <Switch size="small" 
              checked={navigateSection} 
              checkedChildren="yes"
              unCheckedChildren="no"
              onChange={this.handleNaviagionChange} 
              style={{ marginBottom: 15,  marginTop: 15  }}
            /> <Popover content={ 
              <IntlMessages id="form.part.product.navigate.popover.content" />
            } title={<div> 
              <IntlMessages id="form.part.product.main.1" /> <IntlMessages id="form.part.product.navigate.popover.title" />
              </div> } trigger="click">
            <IntlMessages id="associates" /> : <Icon type="question-circle-o" />   </Popover>    
            </Col>
         { /* end     nassociates  */ }
         { /* start   publish sections */ }

            <Col span="8" >
            <Switch size="small" 
              checked={publishSection}
              checkedChildren="yes"
              unCheckedChildren="no"
              onChange={this.handlePublishedChange} 
              style={{ marginBottom: 15,  marginTop: 15  }}
            /> <Popover content={ 
              <IntlMessages id="form.part.product.published.popover.content" />
            } title={<div> 
              <IntlMessages id="form.part.product.main.1" /> <IntlMessages id="form.part.product.published.popover.title" />
              </div> } trigger="click">
            <IntlMessages id="published" /> : <Icon type="question-circle-o" />   </Popover>    
            </Col>
            
         { /* end     publish sections */ }
         </Row>
         <Row gutter={8}>
         <Col span="24">
         
<Button type="primary"  style={{ width: '100%', marginBottom: 15, marginTop: 5, borderRadius: 0 }}>Submit</Button>
</Col>
</Row>
</Col>
      </Row>
    );
  }
}
