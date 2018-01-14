
import React, { Component } from "react";
import axios from "axios";
import apiUrl from "../../../config"
import classnames from "classnames";
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import AvatarImg from "./upload"
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import { Card, Row, Col, DatePicker, Upload, message, Select, Icon, Avatar } from 'antd';
const Option = Select.Option;
const { Meta } = Card;
function mapStateToProps(state) {
  return {
    auth: state.auth
  }
}
class Signup extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fullname: "",
      email: "",
      password: "",
      cpassword: "",
      dob: "",
      error: "",
      avatar:"",
      success: "",
      bio: "",
      interest: [],
      isLoading: false
    }

    this.setDOB = this.setDOB.bind(this)
    this.selectInterest = this.selectInterest.bind(this)
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) this.props.history.push("/dashboard")
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
      axios.post(`${apiUrl.apiUrl}/api/registration`, this.state).then((res) => {
        if (res.data.success) {
          this.setState({ success: res.data.success, isLoading: false, password: "", email: "", name: "",cpassword:"",dob:"",bio:"",interest:"" })

          setTimeout(() => {
            this.setState({success:""})
            this.setState({success:"", password: "", email: "", name: "", cpassword: "", dob: "", bio: "", interest: "",Avatar:"" })
          }, 3000)
        }

        else if (res.data.error) this.setState({ error: res.data.error, isLoading: false })

      }, () => this.setState({ isLoading: false, error: { network: "An error has occured,Please check your network connectivity" } }));
    }.bind(this), 1000);
  }

  render() {
    console.log(this.state)
    return (


      <div className="row">
        <div className="col-sm-12">
          <div className="bounceInLeft animated">

            <Card title="Registration" >
              <form action="" method="POST" onSubmit={this.submit.bind(this)}>

                <div className={classnames("form-group", this.state.error.name ? "has-error" : null)}>
                  <input type="text" className="form-control input-sm" name="fullname" onChange={this.typing.bind(this)} placeholder="Full Name" />
                </div>
                {this.state.error.name ?
                  <div className="form-group has-error">
                    <p className="text-danger">{this.state.error.name}</p>
                  </div>
                  : null}
               
                <div className={classnames("form-group", this.state.error.email ? "has-error" : null)}>
                  <input type="email" className="form-control input-sm" name="email" onChange={this.typing.bind(this)} placeholder="Email" />
                </div>
                {this.state.error.email ?
                  <div className="form-group has-error">
                    <p className="text-danger">{this.state.error.email}</p>
                  </div>
                  : null}

                <Row>
                  <Col span={12}>
                    <DatePicker style={{width:"100%"}}onChange={this.setDOB} placeholder="Date of Birth" />
                    {this.state.error.dob ?
                      <div className="form-group has-error">
                        <p className="text-danger">{this.state.error.dob}</p>
                      </div>
                      : null}
                  </Col>
                  <Col span={12}>
                    <Select
                      mode="tags"
                      size="default"
                      placeholder="Please select an interest"
                      onChange={this.selectInterest}
                      style={{ width: '100%' }}
                    >
                      <Option key="a10">a10</Option>
                      <Option key="c12">c12</Option>
                    </Select>
                    {this.state.error.interest ?
                      <div className="form-group has-error">
                        <p className="text-danger">{this.state.error.interest}</p>
                      </div>
                      : null}
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <div style={{ marginTop: "10px" }}>
                      <AvatarImg />
                    </div>
                  </Col>
                </Row>

                <div className="form-group" style={{ paddingTop: "10px" }}>
                  <div className={classnames("form-group", this.state.error.password ? "has-error" : null)}>
                    <input type="password" className="form-control input-sm" name="password" onChange={this.typing.bind(this)} placeholder="Password" />
                  </div>
                </div>
                {this.state.error.password ?
                  <div className="form-group has-error">
                    <p className="text-danger">{this.state.error.password}</p>
                  </div>
                  : null}
                <div className="form-group">
                  <div className={classnames("form-group", this.state.error.cpassword ? "has-error" : null)}>
                    <input type="password" className="form-control input-sm" name="cpassword" onChange={this.typing.bind(this)} placeholder="Confirm Password" />
                  </div>
                </div>
                {this.state.error.cpassword ?
                  <div className="form-group has-error">
                    <p className="text-danger">{this.state.error.cpassword}</p>
                  </div>
                  : null}
                <div className="form-group" >
                  <textarea
                    className="form-control input-sm"
                    type="textarea"
                    name="bio"
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
                  "btn", "btn-sm", this.state.isLoading ? "disabled" : null)}> {this.state.isLoading ?
                    <i className="fa fa-spinner fa-spin"></i>
                    : "Register"}</button>

              </form>
            </Card>


          </div>
        </div>

      
      </div>

    )
  }

}

export default connect(mapStateToProps)(Signup)