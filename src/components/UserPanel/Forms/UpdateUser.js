
import React, { Component } from "react";
import axios from "axios";
import apiUrl from "../../../config"
import classnames from "classnames";
import { Link } from "react-router-dom"
import AvatarImg from "./upload"
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import { Card, Row, Col, DatePicker, Upload, message, Select, Icon, Avatar } from 'antd';
const Option = Select.Option;
const { Meta } = Card;

class Update extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fullname: "",
      email: "",
      dob: "",
      error: "",
      success: "",
      bio: "",
      interest: [],
      currentPassword: "",
      newPassword: "",
      network:"",
      cNewPassword: "",
      isLoading: false
    }

    this.setDOB = this.setDOB.bind(this)
    this.selectInterest = this.selectInterest.bind(this)
  }


 
  setDOB(date, dateString) {
    // console.log(date, dateString);
    this.setState({ dob: dateString })
  }
  selectInterest(value) {
    this.setState({ interest: value })

  }

  typing(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
    console.log(this.state)
  }
  submit(e) {
    e.preventDefault();
    this.setState({ isLoading: true, error: "" });
    setTimeout(function () {
      axios.post(`${apiUrl.apiUrl}/api/updateProfile`, this.state).then((res) => {
        console.log(res.data)
        if (res.data.success) {
          console.log(res.data)
          this.setState({ success: res.data.success, isLoading: false, password: "", email: "", name: "" })

          setTimeout(() => {
          this.setState({ success: "", isLoading: false, currentPassword: "", email: "", name: "",cNewPassword:"",newPassword:"" })
          }
          , 3000)
        }

        else if (res.data.error) this.setState({ error: res.data.error, isLoading: false })

      }, (error) => this.setState({ isLoading: false, error: { network: "An error has occured" } }));
    }.bind(this), 1000);
  }

  render() {
    console.log(this.state)
    return (


      <div className="row">
        <div className="col-sm-12">
          <div className="bounceInLeft animated">
            <div style={{ marginTop: "10px" }}>
              <Card title="Update User" description="fks">
                <form action="" method="POST" onSubmit={this.submit.bind(this)}>

                  <div className={classnames("form-group", this.state.error.name ? "has-error" : null)}>
                    <input type="text" className="form-control input-sm" name="username" onChange={this.typing.bind(this)} placeholder="Full Name" />
                  </div>
                 
                  <div className={classnames("form-group", this.state.error.email ? "has-error" : null)}>
                    <input type="email" className="form-control input-sm" name="email" onChange={this.typing.bind(this)} placeholder="Email" />
                  </div>
                  {this.state.error.email ?
                    <div className="form-group has-error">
                      <p className="text-danger">{this.state.error.email}</p>
                    </div>
                    : null}




                  <Row>
                    <Col span={12}> <DatePicker style={{ width: '100%' }} onChange={this.setDOB} placeholder="Date of Birth" />
                    </Col>
                    <Col span={12}>    <Select
                      mode="tags"
                      size="default"
                      placeholder="Please select an interest"
                      onChange={this.selectInterest}
                      style={{ width: '100%' }}
                    >
                      <Option key="a10">a10</Option>
                      <Option key="c12">c12</Option>
                    </Select></Col>
                  </Row>
                  
                  <Row>
                    <Col span={24}>
                      <div style={{ marginTop: "10px" }}>
                        <AvatarImg />
                      </div>
                    </Col>
                  </Row>

                  <div className="form-group" style={{ marginTop: "10px" }}>
                    <div className={classnames("form-group", this.state.error.currentPassword ? "has-error" : null)}>
                      <input type="password" className="form-control input-sm" name="currentPassword" onChange={this.typing.bind(this)} placeholder="Current Password" />
                    </div>
                  </div>
                  {this.state.error.currentPassword ?
                    <div className="form-group has-error">
                      <p className="text-danger">{this.state.error.currentPassword}</p>
                    </div>
                    : null}
                  <div className="form-group">
                    <div className={classnames("form-group", this.state.error.newPassword ? "has-error" : null)}>
                      <input type="password" className="form-control input-sm" name="newPassword" onChange={this.typing.bind(this)} placeholder="New Password" />
                    </div>
                  </div>
               
                  <div className="form-group">
                    <div className={classnames("form-group", this.state.error.cNewPassword ? "has-error" : null)}>
                      <input type="password" className="form-control input-sm" name="cNewPassword" onChange={this.typing.bind(this)} placeholder="Confirm Password" />
                    </div>
                  </div>
                  {this.state.error.cNewPassword ?
                    <div className="form-group has-error">
                      <p className="text-danger">{this.state.error.cNewPassword}</p>
                    </div>
                    : null}
                  <div className="form-group" >
                    <textarea
                      className="form-control input-sm"
                      type="textarea"
                      name="interest"
                      onChange={this.typing.bind(this)}
                      placeholder="Delivery address... needs access code? has aggressive dogs? Is behind another address?"
                      autosize={{ minRows: 2, maxRows: 6 }}
                    />
                  </div>

                  {this.state.error.network ?
                    <div className="form-group has-error">
                      <p className="text-danger text-center">{this.state.error.network}</p>
                    </div>
                    : null}
                  {this.state.success ?
                    <div className="form-group">
                      <p className="text-success text-center">{this.state.success}</p>
                    </div>
                    : null}

                  <button type="submit" className={classnames("btn", "btn-primary",
                     "btn-sm", this.state.isLoading ? "disabled" : null)}> {this.state.isLoading ?
                      <i className="fa fa-spinner fa-spin"></i>
                      : "Update"}</button>

                </form>
              </Card>
            </div>


          </div>
        </div>

      </div>

    )
  }

}

export default Update