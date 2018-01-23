import React, { Component } from 'react';
import ReactQuill from 'react-quill';
import IntlMessages from '../../../../components/utility/intlMessages';
import 'react-quill/dist/quill.snow.css';
// import 'react-quill/dist/quill.bubble.css';
import 'react-quill/dist/quill.core.css';
import QuillEditor from './styles/editor.style';
import Availability from './formParts/availability';
import { 
  Row, 
  Col,
  Popover,
  Icon,
  Switch,
  Button
} from 'antd';
export default class Editor extends Component {
   state = {
    associateSection: true,
    publishSection: true,
    globalSection: false
  };
  handlePublishedChange = (publishSection) => {
    this.setState({ publishSection });
  }
  handleAssociateChange = (associateSection) => {
    this.setState({ associateSection });
  }
  handleGlobalChange = (globalSection) => {
    this.setState({ globalSection });
  }
    
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { value: '' };
    this.quillModules = {
      toolbar: {
        container: [
          [{ header: [1, 2, false] }, { font: [] }],
          ['bold', 'italic', 'underline', 'strike', 'blockquote'],
          [
            { list: 'ordered' },
            { list: 'bullet' },
            { indent: '-1' },
            { indent: '+1' },
          ],
          ['link', 'image', 'video'],
          ['clean'],
        ],
      },
    };
  }

  handleChange(value) {
    this.setState({ value });
  }

  render() {
    const { associateSection, publishSection, globalSection } = this.state;
    const options = {
      theme: 'snow',
      formats: Editor.formats,
      placeholder: 'Write Something',
      value: this.state.value,
      onChange: this.handleChange,
      modules: this.quillModules,
    };
    return (
       <Row gutter={24}>
        <Col span="24">
         <Row gutter={8}>
         <Col span="24" >
      <QuillEditor>
        <ReactQuill {...options} />
      </QuillEditor>
      </Col>
      </Row>
      <Row gutter={8}>
         { /* start   global */ }
         <Col span="8" >
            <Switch size="small" 
              checked={globalSection} 
              checkedChildren="yes"
              unCheckedChildren="no"
              onChange={this.handleGlobalChange} 
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
              checked={associateSection} 
              checkedChildren="yes"
              unCheckedChildren="no"
              onChange={this.handleAssociateChange} 
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
         </Row>
      <Button type="primary"  style={{ width: '100%', marginBottom: 15, marginTop: 15, borderRadius: 0 }}>Add Lifespan</Button>
      </Col>
      </Row>
    );
  }
}
