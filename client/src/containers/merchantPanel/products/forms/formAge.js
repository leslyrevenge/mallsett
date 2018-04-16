import React, { Component } from 'react';
import IntlMessages from '../../../../components/utility/intlMessages';
import Availability from './formParts/availability';
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
            <Icon type="question-circle-o" /> Age Minimum  </Popover>
          <Select
            mode= "multiple"
            style={{ width: '100%', marginBottom: 15, marginTop: 5 }}
          >
            <OptGroup label="Absent">
              <Option value="1000">Unborned</Option>
              <Option value="2000">Deceased</Option>
            </OptGroup>
            
            <OptGroup label="Infants">
            <Option value="0">0 years old</Option>
              <Option value="1">1 years old</Option>
            </OptGroup>
            <OptGroup label="Pre School">
              <Option value="2">2 years old</Option>
            
              <Option value="3">3 years old</Option>
              <Option value="4">4 years old</Option>
              <Option value="5">5 years old</Option>
            </OptGroup>
            <OptGroup label="Elementary">
              <Option value="6">6 years old</Option>
              <Option value="7">7 years old</Option>
              <Option value="8">8 years old</Option>
              <Option value="9">9 years old</Option>
              <Option value="10">10 years old</Option>
              <Option value="11">11 years old</Option>
            </OptGroup>
            <OptGroup label="Juinior High">
              <Option value="12">12 years old</Option>
              <Option value="13">13 years old</Option>
              <Option value="14">14 years old</Option>
            </OptGroup>
            <OptGroup label="Senior High">
              <Option value="15">15 years old</Option>
              <Option value="16">16 years old</Option>
              <Option value="17">17 years old</Option>
              <Option value="18">18 years old</Option>
            </OptGroup>
            <OptGroup label="College and University Age">
              <Option value="19">19 years old</Option>
              <Option value="20">20 years old</Option>
              <Option value="21">21 years old</Option>
              <Option value="22">22 years old</Option>
              <Option value="23">23 years old</Option>
              <Option value="24">24 years old</Option>
              <Option value="25">25 years old</Option>
            </OptGroup>
            <OptGroup label="Adults">
              <Option value="26">26 years old</Option>
              <Option value="27">27 years old</Option>
              <Option value="28">28 years old</Option>
              <Option value="29">29 years old</Option>
            </OptGroup>
            <OptGroup label="Thirties">
              <Option value="30">30 years old</Option>
              <Option value="31">31 years old</Option>
              <Option value="32">32 years old</Option>
              <Option value="33">33 years old</Option>
              <Option value="34">34 years old</Option>
              <Option value="35">35 years old</Option>
              <Option value="36">36 years old</Option>
              <Option value="37">37 years old</Option>
              <Option value="38">38 years old</Option>
              <Option value="39">39 years old</Option>
            </OptGroup>
            <OptGroup label="Fourties">
              <Option value="40">40 years old</Option>
              <Option value="41">41 years old</Option>
              <Option value="42">42 years old</Option>
              <Option value="43">43 years old</Option>
              <Option value="44">44 years old</Option>
              <Option value="45">45 years old</Option>
              <Option value="46">46 years old</Option>
              <Option value="47">47 years old</Option>
              <Option value="48">48 years old</Option>
              <Option value="49">49 years old</Option>
            </OptGroup>
            <OptGroup label="Reaching Retirement">
              <Option value="50">50 years old</Option>
              <Option value="51">51 years old</Option>
              <Option value="52">52 years old</Option>
              <Option value="53">53 years old</Option>
              <Option value="54">54 years old</Option>
              <Option value="55">55 years old</Option>
              <Option value="56">56 years old</Option>
              <Option value="57">57 years old</Option>
              <Option value="58">58 years old</Option>
              <Option value="59">59 years old</Option>
            </OptGroup>
            <OptGroup label="Age of Retirement">
              <Option value="60">60 years old</Option>
              <Option value="61">61 years old</Option>
              <Option value="62">62 years old</Option>
              <Option value="63">63 years old</Option>
              <Option value="64">64 years old</Option>
              <Option value="65">65 years old</Option>
              <Option value="66">66 years old</Option>
              <Option value="67">67 years old</Option>
              <Option value="68">68 years old</Option>
              <Option value="69">69 years old</Option>
              <Option value="70">70 years old</Option>
              <Option value="71">71 years old</Option>
              <Option value="72">72 years old</Option>
              <Option value="73">73 years old</Option>
              <Option value="74">74 years old</Option>
              <Option value="75">75 years old</Option>
              <Option value="76">76 years old</Option>
              <Option value="77">77 years old</Option>
              <Option value="78">78 years old</Option>
              <Option value="79">79 years old</Option>
              <Option value="80">80 years old</Option>
              <Option value="81">81 years old</Option>
              <Option value="82">82 years old</Option>
              <Option value="83">83 years old</Option>
              <Option value="84">84 years old</Option>
              <Option value="85">85 years old</Option>
              <Option value="86">86 years old</Option>
              <Option value="87">87 years old</Option>
              <Option value="88">88 years old</Option>
              <Option value="89">89 years old</Option>
              <Option value="90">90 years old</Option>
              <Option value="91">91 years old</Option>
              <Option value="92">92 years old</Option>
              <Option value="93">93 years old</Option>
              <Option value="94">94 years old</Option>
              <Option value="95">95 years old</Option>
              <Option value="96">96 years old</Option>
              <Option value="97">97 years old</Option>
              <Option value="98">98 years old</Option>
              <Option value="99">99 years old</Option>
              </OptGroup>
            <OptGroup label="Centenarian">
              <Option value="100">100 years old</Option>
              <Option value="101">101 years old</Option>
              <Option value="102">102 years old</Option>
              <Option value="103">103 years old</Option>
              <Option value="104">104 years old</Option>
              <Option value="105">105 years old</Option>
              <Option value="106">106 years old</Option>
              <Option value="107">107 years old</Option>
              <Option value="108">108 years old</Option>
              <Option value="109">109 years old</Option>
              <Option value="110">Older than 110</Option>
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
            <Icon type="question-circle-o" /> Max Age  </Popover>
          <Select
            mode= "multiple"
            style={{ width: '100%', marginBottom: 15, marginTop: 5 }}
          >
            <OptGroup label="Absent">
              <Option value="1000">Unborned</Option>
              <Option value="2000">Deceased</Option>
            </OptGroup>
            
            <OptGroup label="Infants">
            <Option value="0">0 years old</Option>
              <Option value="1">1 years old</Option>
            </OptGroup>
            <OptGroup label="Pre School">
              <Option value="2">2 years old</Option>
            
              <Option value="3">3 years old</Option>
              <Option value="4">4 years old</Option>
              <Option value="5">5 years old</Option>
            </OptGroup>
            <OptGroup label="Elementary">
              <Option value="6">6 years old</Option>
              <Option value="7">7 years old</Option>
              <Option value="8">8 years old</Option>
              <Option value="9">9 years old</Option>
              <Option value="10">10 years old</Option>
              <Option value="11">11 years old</Option>
            </OptGroup>
            <OptGroup label="Juinior High">
              <Option value="12">12 years old</Option>
              <Option value="13">13 years old</Option>
              <Option value="14">14 years old</Option>
            </OptGroup>
            <OptGroup label="Senior High">
              <Option value="15">15 years old</Option>
              <Option value="16">16 years old</Option>
              <Option value="17">17 years old</Option>
              <Option value="18">18 years old</Option>
            </OptGroup>
            <OptGroup label="College and University Age">
              <Option value="19">19 years old</Option>
              <Option value="20">20 years old</Option>
              <Option value="21">21 years old</Option>
              <Option value="22">22 years old</Option>
              <Option value="23">23 years old</Option>
              <Option value="24">24 years old</Option>
              <Option value="25">25 years old</Option>
            </OptGroup>
            <OptGroup label="Adults">
              <Option value="26">26 years old</Option>
              <Option value="27">27 years old</Option>
              <Option value="28">28 years old</Option>
              <Option value="29">29 years old</Option>
            </OptGroup>
            <OptGroup label="Thirties">
              <Option value="30">30 years old</Option>
              <Option value="31">31 years old</Option>
              <Option value="32">32 years old</Option>
              <Option value="33">33 years old</Option>
              <Option value="34">34 years old</Option>
              <Option value="35">35 years old</Option>
              <Option value="36">36 years old</Option>
              <Option value="37">37 years old</Option>
              <Option value="38">38 years old</Option>
              <Option value="39">39 years old</Option>
            </OptGroup>
            <OptGroup label="Fourties">
              <Option value="40">40 years old</Option>
              <Option value="41">41 years old</Option>
              <Option value="42">42 years old</Option>
              <Option value="43">43 years old</Option>
              <Option value="44">44 years old</Option>
              <Option value="45">45 years old</Option>
              <Option value="46">46 years old</Option>
              <Option value="47">47 years old</Option>
              <Option value="48">48 years old</Option>
              <Option value="49">49 years old</Option>
            </OptGroup>
            <OptGroup label="Reaching Retirement">
              <Option value="50">50 years old</Option>
              <Option value="51">51 years old</Option>
              <Option value="52">52 years old</Option>
              <Option value="53">53 years old</Option>
              <Option value="54">54 years old</Option>
              <Option value="55">55 years old</Option>
              <Option value="56">56 years old</Option>
              <Option value="57">57 years old</Option>
              <Option value="58">58 years old</Option>
              <Option value="59">59 years old</Option>
            </OptGroup>
            <OptGroup label="Age of Retirement">
              <Option value="60">60 years old</Option>
              <Option value="61">61 years old</Option>
              <Option value="62">62 years old</Option>
              <Option value="63">63 years old</Option>
              <Option value="64">64 years old</Option>
              <Option value="65">65 years old</Option>
              <Option value="66">66 years old</Option>
              <Option value="67">67 years old</Option>
              <Option value="68">68 years old</Option>
              <Option value="69">69 years old</Option>
              <Option value="70">70 years old</Option>
              <Option value="71">71 years old</Option>
              <Option value="72">72 years old</Option>
              <Option value="73">73 years old</Option>
              <Option value="74">74 years old</Option>
              <Option value="75">75 years old</Option>
              <Option value="76">76 years old</Option>
              <Option value="77">77 years old</Option>
              <Option value="78">78 years old</Option>
              <Option value="79">79 years old</Option>
              <Option value="80">80 years old</Option>
              <Option value="81">81 years old</Option>
              <Option value="82">82 years old</Option>
              <Option value="83">83 years old</Option>
              <Option value="84">84 years old</Option>
              <Option value="85">85 years old</Option>
              <Option value="86">86 years old</Option>
              <Option value="87">87 years old</Option>
              <Option value="88">88 years old</Option>
              <Option value="89">89 years old</Option>
              <Option value="90">90 years old</Option>
              <Option value="91">91 years old</Option>
              <Option value="92">92 years old</Option>
              <Option value="93">93 years old</Option>
              <Option value="94">94 years old</Option>
              <Option value="95">95 years old</Option>
              <Option value="96">96 years old</Option>
              <Option value="97">97 years old</Option>
              <Option value="98">98 years old</Option>
              <Option value="99">99 years old</Option>
              </OptGroup>
            <OptGroup label="Centenarian">
              <Option value="100">100 years old</Option>
              <Option value="101">101 years old</Option>
              <Option value="102">102 years old</Option>
              <Option value="103">103 years old</Option>
              <Option value="104">104 years old</Option>
              <Option value="105">105 years old</Option>
              <Option value="106">106 years old</Option>
              <Option value="107">107 years old</Option>
              <Option value="108">108 years old</Option>
              <Option value="109">109 years old</Option>
              <Option value="110">Older than 110</Option>
            </OptGroup>
          </Select>
         </Col>
         </Row>
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
      

         { /* end     lifespan range */ }
         <Button type="primary"  style={{ width: '100%', marginBottom: 15, marginTop: 5, borderRadius: 0 }}>Add Lifespan</Button>
        </Col>
      </Row>
    );
  }
}
