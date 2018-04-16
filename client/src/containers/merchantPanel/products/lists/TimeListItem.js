import React, { Component } from 'react';
import GroupWrapper from './list.style';
import { 
  Row, 
  Collapse,
  Col,
  Icon
} from 'antd';
export default class  extends Component {

  render() {
    return (
      <GroupWrapper>
        <div className="dateTimeHolder">
          <h6>Morning Classes  <span><Icon type="team" /><Icon type="rocket" /><Icon type="global" /></span></h6>
          <p>08:00:02 am to 09:00:02 pm</p>
          <p><Icon type="delete" /> delete <Icon type="edit" /> edit </p>
        </div>
      </GroupWrapper>
    );
  }
}

