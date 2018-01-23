import React, { Component } from 'react';
import IntlMessages from '../../../../components/utility/intlMessages';
import { 
  Row, 
  Col,
  Select,
  Input,
  Switch,
  Popover,
  Icon,
  Button} from 'antd';
const { Option, OptGroup } = Select;

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
                {<IntlMessages id="form.part.lifespan.name.popover.content" />} 
              </div>
            } title={<IntlMessages id="form.part.lifespan.name.popover.title" />}  trigger="click">
            <Icon type="question-circle-o" />  <IntlMessages id="form.part.lifespan.name" />  </Popover>
          <Input style={{ width: '100%', marginBottom: 15, marginTop: 5 }} />
          
          
         {/* end name */}
         
        { /* start   age range */ }
        <Row gutter={24}>
        <Col span="12">
         <Popover content={ 
              <div>
                <p>Content</p>
                <p>Content</p>
              </div>
            } title="Title" trigger="click">
            <Icon type="question-circle-o" /> Amount  </Popover>
          <Input style={{ width: '100%', marginBottom: 15, marginTop: 5 }} />
         </Col>
         <Col span="12">
         <Popover content={ 
              <div>
                <p>Content</p>
                <p>Content</p>
              </div>
            } title="Title" trigger="click">
            <Icon type="question-circle-o" /> Discount Type  </Popover>
         <Select
            mode= ""
            style={{ width: '100%', marginBottom: 15, marginTop: 5 }}
          >
            <OptGroup label="Select Type">
              <Option value="1000">Percentage</Option>
              <Option value="1010">Fixed Amount</Option>
            </OptGroup>
          </Select>
         </Col>
         </Row>
         { /* end     lifespan range */ }
         { /* start   age range */ }
        <Row gutter={24}>
        <Col span="12">
         <Popover content={ 
              <div>
                <p>Content</p>
                <p>Content</p>
              </div>
            } title="Title" trigger="click">
            <Icon type="question-circle-o" /> Date Range  </Popover>
          <Select
            mode= "multiple"
            style={{ width: '100%', marginBottom: 15, marginTop: 5 }}
          >
            <OptGroup label="Dates">
              <Option value="1000">date name - 1 Jan 2018 - 10 Jan 2018</Option>
              <Option value="1100">date name - 1 Feb 2018 - 10 Feb 2018</Option>
            </OptGroup>
          </Select>
         </Col>
         <Col span="12">
         <Popover content={ 
              <div>
                <p>Content</p>
                <p>Content</p>
              </div>
            } title="Title" trigger="click">
            <Icon type="question-circle-o" /> Time Range  </Popover>
         <Select
            mode= "multiple"
            style={{ width: '100%', marginBottom: 15, marginTop: 5 }}
          >
            <OptGroup label="Time">
              <Option value="1010">time name - 5:30 am - 8:30 am </Option>
              <Option value="1000">time name - 5:30 pm - 8:30 pm </Option>
            </OptGroup>
          </Select>
         </Col>
         </Row>
         { /* end     lifespan range */ }
      <Row gutter={8}>
         
         { /******************************** 
         
              Ending Section
              
          ******************************8*/ }
         { /* start   overide products */ }
         <Col span="8" >
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
              <IntlMessages id="global" />  :  <Icon type="question-circle-o" />   </Popover>    
            </Col>
         { /* end     overide products  */ }
         { /* start   navigate sections */ }
         <Col span="8">
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
            <IntlMessages id="associates" /> : <Icon type="question-circle-o" />   </Popover>    
            </Col>
         { /* end     navigate sections  */ }
         { /* start   publish sections */ }

            <Col span="8" >
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
            <IntlMessages id="published" /> : <Icon type="question-circle-o" />   </Popover>    
            </Col>
            
         { /* end     publish sections */ }
         </Row>

         <Button type="primary"  style={{ width: '100%', marginBottom: 15, marginTop: 15, borderRadius: 0 }}>Add Lifespan</Button>
        </Col>
      </Row>
    );
  }
}
