import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'antd';
import { Icon } from 'antd';

import Input, { InputGroup } from '../../../components/uielements/input';
import Select, { SelectOption } from '../../../components/uielements/select';
import Button from '../../../components/uielements/button';
import ContentHolder from '../../../components/utility/contentHolder';
import IntlMessages from '../../../components/utility/intlMessages';

import SigninWrapper from '../signin.style';
import Signin from '../../../containers/Page/signin';



const Option = SelectOption;
const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

class CreateAddress extends Component {
  componentDidMount() {
    setTimeout(() => {
      try {
        document.getElementById('InputTopbarSearch').focus();
      } catch (e) { }
    }, 200);
  }
  render() {
    return (
      // <SigninWrapper>
      <Row justify="start">
        <Col md={24} sm={24} xs={24} >
          <Signin />
        </Col>
      </Row>
      // </SigninWrapper>
    );
  }
}

export default CreateAddress;