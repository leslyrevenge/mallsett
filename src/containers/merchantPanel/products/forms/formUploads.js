import React, { Component } from 'react';
import IntlMessages from '../../../../components/utility/intlMessages';
import { 
  Row, 
  Col,
  Select,
  Input,
  Popover,
  Icon,
  Button,
  Upload,
  message,
  Switch
} from 'antd';

const { Option, OptGroup } = Select;
const Dragger = Upload.Dragger;
const props = {
  name: 'file',
  multiple: true,
  action: '//jsonplaceholder.typicode.com/posts/',
  onChange(info) {
    const status = info.file.status;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};


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
         <Col span={24}  style={{ width: '100%', marginBottom: 15, marginTop: 5 }} >
        <Popover content={ 
              <div>
                {<IntlMessages id="form.part.upload.name.popover.content" />} 
              </div>
            } title={<IntlMessages id="form.part.upload.name.popover.title" />}  trigger="click">
            <Icon type="question-circle-o" />  <IntlMessages id="form.part.upload.name" />  </Popover>
          <Input style={{ width: '100%', marginTop: 5 }} />
          
          </Col>
         {/* end name */}
    
         {/* start link */}
         <Col span={24}  style={{ width: '100%', marginBottom: 15, marginTop: 5 }} >
        <Popover content={ 
              <div>
                {<IntlMessages id="form.part.upload.link.popover.content" />} 
              </div>
            } title={<IntlMessages id="form.part.upload.link.popover.title" />}  trigger="click">
            <Icon type="question-circle-o" />  <IntlMessages id="form.part.upload.link" />  </Popover>
          <Input style={{ width: '100%', marginTop: 5 }} />
          
          </Col>
         {/* end link */}

        { /* start   upload */ }
        <Col span={24}  style={{ width: '100%', marginBottom: 15, marginTop: 5 }} >
         <Popover content={ 
              <div>
                {<IntlMessages id="form.part.upload.dagger.popover.title" />} 
              </div>
            } title={<IntlMessages id="form.part.upload.dagger.popover.title" />}   trigger="click">
            <Icon type="question-circle-o" />  <IntlMessages id="form.part.upload.dagger"  />  </Popover>
            
            <Dragger {...props} style={{ width: '100%', marginTop: 5 }}>
              <p className="ant-upload-drag-icon">
                <Icon type="inbox" />
              </p>
              <p className="ant-upload-text">Click or drag file to this area to upload</p>
              <p className="ant-upload-hint">Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files</p>
            </Dragger>
            </Col>
         { /* end   upload */ }
         { /* start   image group */ }
         <Col span={24}  style={{ width: '100%', marginBottom: 15, marginTop: 5 }} >
         <Popover content={ 
              <IntlMessages id="form.part.upload.category.popover.content" />
            } title={<IntlMessages id="form.part.upload.category.popover.title" />} trigger="click">
            <Icon type="question-circle-o" /> <IntlMessages id="form.part.upload.category" />  </Popover>
          <Select
            mode= "multiple"
            style={{ width: '100%', marginBottom: 15, marginTop: 5 }}
          >
            <OptGroup label="Business">
              <Option value="1">Products</Option>
              <Option value="2">Sections</Option>
            </OptGroup>
            <OptGroup label="Personal">
              <Option value="3">This</Option>
              <Option value="4">that</Option>
            </OptGroup>
            
          </Select>
          </Col>
         { /* end     image group */ }
         
         
         {/* start category */}
         <Col span={24}  style={{ width: '100%', marginBottom: 15, marginTop: 5 }} >
        <Popover content={ 
              <div>
                {<IntlMessages id="form.part.upload.description.popover.content" />} 
              </div>
            } title={<IntlMessages id="form.part.upload.description.popover.title" />}  trigger="click">
            <Icon type="question-circle-o" /> <IntlMessages id="form.part.upload.description" />  </Popover>
          <Input 
            type="textarea"
            autosize={{ minRows: 2, maxRows: 6 }}
            style={{ width: '100%',marginTop: 5 }}
          />
          
          </Col>
         {/* end category */}
         { /* start   global */ }
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
              <IntlMessages id="form.part.group.navigate.popover.content" />
            } title={<div> 
              <IntlMessages id="form.part.group.main.1" /> <IntlMessages id="form.part.group.navigate.popover.title" />
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
              <IntlMessages id="form.part.group.published.popover.content" />
            } title={<div> 
              <IntlMessages id="form.part.group.main.1" /> <IntlMessages id="form.part.group.published.popover.title" />
              </div> } trigger="click">
            <IntlMessages id="published" /> : <Icon type="question-circle-o" />   </Popover>    
            </Col>
            
         { /* end     publish sections */ }

         <Button type="primary"  style={{ width: '100%', marginBottom: 15, marginTop: 15, borderRadius: 0 }}>Add Upload</Button>
        </Col>
      </Row>
    );
  }
}
