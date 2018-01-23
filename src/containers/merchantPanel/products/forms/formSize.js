import React, { Component } from 'react';
import IntlMessages from '../../../../components/utility/intlMessages';
import Availability from './formParts/availability';
import { 
  Row, 
  Col,
  Select,
  Input,
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
          <Row gutter={8}>
        
         {/* start name */}
         <Col span="16">
        <Popover content={ 
              <div>
                {<IntlMessages id="form.part.size.name.popover.content" />} 
              </div>
            } title={<IntlMessages id="form.part.size.name.popover.title" />}  trigger="click">
            <Icon type="question-circle-o" />  <IntlMessages id="form.part.size.name" />  </Popover>
          <Input style={{ width: '100%', marginBottom: 15, marginTop: 5 }} />
          
          </Col>
         {/* end name */}
          {/* start price */}
         <Col span="8">
        <Popover content={ 
              <div>
                {<IntlMessages id="form.part.price.name.popover.content" />} 
              </div>
            } title={<IntlMessages id="form.part.price.name.popover.title" />}  trigger="click">
            <Icon type="question-circle-o" />  <IntlMessages id="form.part.price.name" />  </Popover>
          <Input addonBefore="$" style={{ width: '100%', marginBottom: 15, marginTop: 5 }} />
          
          </Col>
         {/* end price */}
         </Row>
         
        { /* start size */ }
        <Row gutter={8}>
        <Col span="6">
         <Popover content={ 
              <div>
                <p>Content</p>
                <p>Content</p>
              </div>
            } title="Title" trigger="click">
            <Icon type="question-circle-o" /> Length  </Popover>
          <Input style={{ width: '100%', marginBottom: 15, marginTop: 5 }} />
         </Col>
         <Col span="6">
         <Popover content={ 
              <div>
                <p>Content</p>
                <p>Content</p>
              </div>
            } title="Title" trigger="click">
            <Icon type="question-circle-o" /> Width  </Popover>
         <Input style={{ width: '100%', marginBottom: 15, marginTop: 5 }} />
         </Col>

         { /* end     lifespan range */ }
         { /* start   age range */ }
        <Col span="6">
         <Popover content={ 
              <div>
                <p>Content</p>
                <p>Content</p>
              </div>
            } title="Title" trigger="click">
            <Icon type="question-circle-o" /> Height  </Popover>
          <Input style={{ width: '100%', marginBottom: 15, marginTop: 5 }} />
         </Col>
         <Col span="6">
         <Popover content={ 
              <div>
                <p>Content</p>
                <p>Content</p>
              </div>
            } title="Title" trigger="click">
            <Icon type="question-circle-o" /> Measurements  </Popover>
         <Select
            mode= "multiple"
            style={{ width: '100%', marginBottom: 15, marginTop: 5 }}
          >
            <OptGroup label="Measure">
              <Option value="1010">Inches </Option>
              <Option value="1000">Foot</Option>
            </OptGroup>
          </Select>
         </Col>
         
         </Row>
         
         { /* end     end size */ }
         { /* start weight */ }
        <Row gutter={8}>
        <Col span="12">
         <Popover content={ 
              <div>
                <p>Content</p>
                <p>Content</p>
              </div>
            } title="Title" trigger="click">
            <Icon type="question-circle-o" /> Weight  </Popover>
          <Input style={{ width: '100%', marginBottom: 15, marginTop: 5 }} />
         </Col>
         <Col span="12">
         <Popover content={ 
              <div>
                <p>Content</p>
                <p>Content</p>
              </div>
            } title="Title" trigger="click">
            <Icon type="question-circle-o" /> Measurements  </Popover>
         <Select
            mode= ""
            style={{ width: '100%', marginBottom: 15, marginTop: 5 }}
          >
            <OptGroup label="Measure">
              <Option value="1010">Pound </Option>
              <Option value="1000">Gram</Option>
            </OptGroup>
          </Select>
         </Col>
         
         </Row>
         <Availability />
         { /* end     weight */ }
         <Button type="primary"  style={{ width: '100%', marginBottom: 15, marginTop: 5, borderRadius: 0 }}>Add Lifespan</Button>
        </Col>
      </Row>
    );
  }
}
