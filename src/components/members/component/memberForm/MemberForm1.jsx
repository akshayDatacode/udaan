import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom"
import { savePersonalData } from "../../actions"
import { connect } from "react-redux";
import { validateForm1 } from '../../../applicant/component/LoanApplyForm/helper'

class MemberForm1 extends Component {
  state = {
    aadharNo: this.props.personalData.aadharNo,
    applicantName: this.props.personalData.applicantName,
    agentId: this.props.currentUser.userId,
    poaType: this.props.personalData.poaType,
    poaNo: this.props.personalData.poaNo,
    poaImg: this.props.personalData.poaImg,
    phoneNo: this.props.personalData.phoneNo,
    userProfileImg: this.props.personalData.userProfileImg,
    error: {},
    isValid: false
  }

  handleChange = (event) => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleNext = () => {
    const {
      props: { savePersonalData },
      state: {
        aadharNo,
        applicantName,
        agentId,
        poaType,
        poaNo,
        poaImg,
        phoneNo,
        userProfileImg,
      }
    } = this
    const data = {
      aadharNo: aadharNo,
      applicantName: applicantName,
      agentId: agentId,
      poaType: poaType,
      poaNo: poaNo,
      poaImg: poaImg,
      phoneNo: phoneNo,
      userProfileImg: userProfileImg,
    }
    const errors = validateForm1(data)
    if (Object.keys(errors).length) {
      this.setState({ error: errors })
    } else {
      savePersonalData(data)
      this.setState({ isValid: true })
    }
  }
  render() {
    const {
      aadharNo,
      applicantName,
      agentId,
      poaType,
      poaNo,
      poaImg,
      phoneNo,
      userProfileImg,
      isValid,
      error
    } = this.state

    return (
      isValid ?
        <Redirect to="/member_form_2" />
        :
        <div className="p-5">
          <h2 className="ml-5 mb-5 mt-5">Member Personal Details</h2>

          <div className="form-group col-md-6">
            <label>Adhar no.</label>
            <input type="number" className="form-control" name="aadharNo" value={aadharNo} onChange={this.handleChange} placeholder="Adhar No" />
            {error.aadharNo && <span className="text-danger">{error.aadharNo}</span>}
          </div>
          <div className="form-group col-md-6">
            <label>Applicant Name</label>
            <input type="text" className="form-control" name="applicantName" value={applicantName} onChange={this.handleChange} placeholder="Applicant Name" />
            {error.applicantName && <span className="text-danger">{error.applicantName}</span>}
          </div>
          <div className="form-group col-md-6">
            <label>Agent Id</label>
            <input type="text" className="form-control" name="agentId" value={agentId} onChange={this.handleChange} placeholder="Agent Id" />
            {error.agentId && <span className="text-danger">{error.agentId}</span>}
          </div>
          <div className="form-group col-md-6">
            <label>poa Type</label>
            <input type="text" className="form-control" name="poaType" value={poaType} onChange={this.handleChange} placeholder="abc/cde" />
            {error.poaType && <span className="text-danger">{error.poaType}</span>}
          </div>
          <div className="form-group col-md-6">
            <label>poa No</label>
            <input type="text" className="form-control" name="poaNo" value={poaNo} onChange={this.handleChange} />
            {error.poaNo && <span className="text-danger">{error.poaNo}</span>}
          </div>
          <div className="form-group col-md-6">
            <label>poa Img</label>
            <input type="text" className="form-control" name="poaImg" value={poaImg} onChange={this.handleChange} />
            {error.poaImg && <span className="text-danger">{error.poaImg}</span>}
          </div>
          <div className="form-group col-md-6">
            <label for="inputZip">Phone no</label>
            <input type="text" className="form-control" name="phoneNo" value={phoneNo} onChange={this.handleChange} placeholder="Phone no." />
            {error.phoneNo && <span className="text-danger">{error.phoneNo}</span>}
          </div>
          <div className="form-group col-md-6">
            <label for="inputZip">userProfile image</label>
            <input type="text" className="form-control" name="userProfileImg" value={userProfileImg} onChange={this.handleChange} />
            {error.userProfileImg && <span className="text-danger">{error.userProfileImg}</span>}
          </div>
          <div className="pt-3 col-md-6">
            <button type="submit" className="btn btn-primary float-right" onClick={this.handleNext}>Next</button>
          </div>
        </div>

    )
  }
}
const mapStateToProps = ({ member, user }) => ({
  personalData: member.personalData,
  currentUser: user.currentUser,
})

const mapDispatchToProps = {
  savePersonalData,
}

export default connect(mapStateToProps, mapDispatchToProps)(MemberForm1)
