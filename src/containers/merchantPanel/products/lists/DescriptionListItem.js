import React, { Component } from 'react';
import GroupWrapper from './list.style';
import { 
  Row, 
  Collapse,
  Col,
  Modal,
  Icon
} from 'antd';
export default class  extends Component {
  state = { 
    visible: false,
    cancelText: "Delete",
    okText: "Update",
    width: "900"
  }
  showModal = () => {
    this.setState({
      visible: true,
    });
  }
  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }
  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }
  render() {
    return (
      <GroupWrapper>
        <div className="dateTimeHolder">
        <div  onClick={this.showModal}>
          <h6>Description Name <span><Icon type="team" /><Icon type="rocket" /><Icon type="global" /></span></h6>
          <p>description here, up to about 140 charactrs. show only characters, no other fields</p>
        </div>  
          <p><Icon type="delete" /> delete <Icon type="edit" /> edit </p>
        </div>
        
        <Modal
          title="Form Name"
          cancelText={this.state.cancelText}
          okText={this.state.okText}
          visible={this.state.visible}
          width={this.state.width}
          onCancel={this.handleCancel}
        >
          <p>form detail goes here</p>
        </Modal>
      </GroupWrapper>
    );
  }
}

