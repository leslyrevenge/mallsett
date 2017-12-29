import React, { Component } from 'react';

import { Row, Col } from 'antd';
import { Icon } from 'antd';
import YouTube from 'react-youtube';
import Input, { InputGroup } from '../../../components/uielements/input';
import Select, { SelectOption } from '../../../components/uielements/select';
import Button from '../../../components/uielements/button';
import ContentHolder from '../../../components/utility/contentHolder';
import IntlMessages from '../../../components/utility/intlMessages';

const Option = SelectOption;
 const opts = {
      width: '100%',
      height: '100%',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
        controls: 0,
        rel: 0 ,
        showinfo: 0,
        frameborder: 0,
        modestbranding: 1
      }
    };

class CreateAddress extends Component {
  render() {
    return (
        <Row gutter={0}>
              <Col span="24">
          <div className="card-image-holder">
            <img src="https://www.greenbiz.com/sites/default/files/styles/panopoly_image_full/public/images/articles/featured/walmart-950x578_0.jpg?itok=hxrZ_UDy" className="card-image" />
          </div>
          <div className="card-intro-holder">
            <div className="ellipsis uppercase strong small-title"> <Icon type="info-circle-o" /> MERCHANT Name </div>
            <div  className="ellipsis capitalize small-title">1.2 miles away</div>
            
          </div>
          <div className="card-info-holder-background">
          </div>
          <div className="">
            <div  type="primary" className="card-shop-button"  icon="shopping-cart"> <Icon type="shop" /> Add to Mall
            </div>  
          </div>
          </Col>
        </Row>
    
    
    );
  }
}

export default CreateAddress;