import React, { Component } from 'react';
import FormLifespan from '../forms/formLifespan';
import IntlMessages from '../../../../components/utility/intlMessages';
import LifespanList from '../lists/LifespanList';
import { 
  Row, 
  Col
  
} from 'antd';



export default class  extends Component {

  render() {
    return (
      <Row gutter={24}>
        <Col span="10">
          <FormLifespan />
        </Col>
        <Col span="14">
         
              <LifespanList />
        </Col>
      </Row>
    );
  }
}
