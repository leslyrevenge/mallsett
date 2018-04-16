import React, { Component } from 'react';
import IntlMessages from '../../../../components/utility/intlMessages';
import { 
  Row, 
  Col,
  Input,
  Popover,
  Switch,
  Icon,
  TimePicker,
  Button
} from 'antd';

export default class  extends Component {
    state = {
    associateSection: true,
    publishSection: true,
    globalizeSection: true
  };
  handlePublishedChange = (publishSection) => {
    this.setState({ publishSection });
  }
  handleAssociateChange = (associateSection) => {
    this.setState({ associateSection });
  }
  handleGlbalizeChange = (globalizeSection) => {
    this.setState({ globalizeSection });
  }
  render() {
     const { associateSection, publishSection, globalizeSection } = this.state;
    return (
      <Row gutter={24}>
        <Col span="24">
        
         
        { /******************************** 
         
              Basic Sections
              
          ******************************8*/ }
         {/* start name */}
         
        <Popover content={ 
              <div>
                {<IntlMessages id="form.part.time.name.popover.content" />} 
              </div>
            } title={<IntlMessages id="form.part.time.name.popover.title "/>}  trigger="click">
            <Icon type="question-circle-o" />  <IntlMessages id="form.part.time.name" />  </Popover>
          <Input style={{ width: '100%', marginBottom: 15, marginTop: 5 }} />
          
          
         {/* end name */}
         
        <Row gutter={24}>
        <Col span="12">
        { /* start   time range */ }
         <Popover content={ 
              <div>
                {<IntlMessages id="form.part.time.name.popover.content" />} 
              </div>
            } title={<IntlMessages id="form.part.time.min.popover.title" />}  trigger="click">
            <Icon type="question-circle-o" />  <IntlMessages id="form.part.time.min" />  </Popover>
            <TimePicker minuteStep={15} secondStep={10} style={{ width: '100%', marginBottom: 15, marginTop: 5, borderRadius: 0 }}/>
          </Col>
          <Col span="12">
        { /* start   time range */ }
         <Popover content={ 
              <div>
               {<IntlMessages id="form.part.time.max.popover.content" />} 
              </div>
            } title={<IntlMessages id="form.part.time.max.popover.title" />}  trigger="click">
            <Icon type="question-circle-o" />  <IntlMessages id="form.part.time.max" />  </Popover>
            <TimePicker minuteStep={15} secondStep={10}  style={{ width: '100%', marginBottom: 15, marginTop: 5, borderRadius: 0 }}/>
          </Col>
      </Row>
      <Row gutter={8}>
         
         { /******************************** 
         
              Ending Section
              
          ******************************8*/ }
         { /* start   globalize products */ }
         <Col span="8" >
            <Switch size="small" 
              checked={globalizeSection} 
              checkedChildren={<Icon type="global" />}
              unCheckedChildren="no"
              onChange={this.handleGlbalizeChange} 
              style={{ marginBottom: 15, marginTop: 15  }}
            /> <Popover content={ 
            
                 <IntlMessages id="form.part.group.globalize.popover.content" />
            
            } title= {<div> 
              <IntlMessages id="form.part.group.main.1" /> <IntlMessages id="form.part.group.globalize.popover.title" />
              </div> }  trigger="click">
              <IntlMessages id="global" />  :  <Icon type="question-circle-o" />   </Popover>    
            </Col>
         { /* end     globalize products  */ }
         { /* start   associates sections */ }
         <Col span="8">
            <Switch size="small" 
              checked={associateSection} 
              checkedChildren={<Icon type="team" />}
              unCheckedChildren="no"
              onChange={this.handleAssociateChange} 
              style={{ marginBottom: 15,  marginTop: 15  }}
            /> <Popover content={ 
              <IntlMessages id="form.part.group.associates.popover.content" />
            } title={<div> 
              <IntlMessages id="form.part.group.associates.popover.title" />
              </div> } trigger="click">
            <IntlMessages id="associates" /> : <Icon type="question-circle-o" />   </Popover>    
            </Col>
         { /* end     associates sections  */ }
         { /* start   publish sections */ }

            <Col span="8" >
            <Switch size="small" 
              checked={publishSection}
              checkedChildren={<Icon type="rocket" />}
              unCheckedChildren="no"
              onChange={this.handlePublishedChange} 
              style={{ marginBottom: 15,  marginTop: 15  }}
            /> <Popover content={ 
              <IntlMessages id="form.part.group.published.popover.content" />
            } title={<div> 
              <IntlMessages id="form.part.group.published.popover.title" />
              </div> } trigger="click">
            <IntlMessages id="published" /> : <Icon type="question-circle-o" />   </Popover>    
            </Col>
            
         { /* end     publish sections */ }
         </Row>
      
         { /* end     time range */ }
         <Button type="primary"  style={{ width: '100%', marginBottom: 15, marginTop: 5, borderRadius: 0 }}>Add Time</Button>
        </Col>
        
      </Row>
    );
  }
}

