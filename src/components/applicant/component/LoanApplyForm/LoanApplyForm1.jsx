import React, { Component } from "react";
import { Link } from "react-router-dom"
import { savePersonalData } from "../../actions"
import { connect } from "react-redux";

class LoanApplyForm1 extends Component {
    state = {
        aadharNo: this.props.personalData.aadharNo,
        applicantName: this.props.personalData.applicantName,
        agentId: this.props.personalData.agentId,
        poaType: this.props.personalData.poaType,
        poaNo: this.props.personalData.poaNo,
        poaImg: this.props.personalData.poaImg,
        phoneNo: this.props.personalData.phoneNo,
        userProfileImg: this.props.personalData.userProfileImg,
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
        savePersonalData(data)
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
        } = this.state
        return (
            <div className="p-5">
                <h2 className="ml-5 mb-5 mt-5">Applicant Details</h2>

                <div class="form-group col-md-6">
                    <label>Adhar no.</label>
                    <input type="number" class="form-control" name="aadharNo" value={aadharNo} onChange={this.handleChange} placeholder="Adhar No" />
                </div>
                <div class="form-group col-md-6">
                    <label>Applicant Name</label>
                    <input type="text" class="form-control" name="applicantName" value={applicantName} onChange={this.handleChange} placeholder="Applicant Name" />
                </div>

                <div class="form-group col-md-6">
                    <label>Agent Id</label>
                    <input type="text" class="form-control" name="agentId" value={agentId} onChange={this.handleChange} placeholder="Agent Id" />
                </div>
                <div class="form-group col-md-6">
                    <label>poa Type</label>
                    <input type="text" class="form-control" name="poaType" value={poaType} onChange={this.handleChange} placeholder="abc/cde" />
                </div>
                <div class="form-group col-md-6">
                    <label>poa No</label>
                    <input type="text" class="form-control" name="poaNo" value={poaNo} onChange={this.handleChange} />
                </div>
                <div class="form-group col-md-6">
                    <label>poa Img</label>
                    <input type="text" class="form-control" name="poaImg" value={poaImg} onChange={this.handleChange} />
                </div>
                <div class="form-group col-md-6">
                    <label for="inputZip">Phone no</label>
                    <input type="text" class="form-control" name="phoneNo" value={phoneNo} onChange={this.handleChange} placeholder="Phone no." />
                </div>
                <div class="form-group col-md-6">
                    <label for="inputZip">userProfile image</label>
                    <input type="text" class="form-control" name="userProfileImg" value={userProfileImg} onChange={this.handleChange} />
                </div>
                <Link to="/address_details">
                    <button type="submit" class="btn btn-primary float-right" onClick={this.handleNext}>Next</button>
                </Link>
            </div>

        )
    }
}
const mapStateToProps = ({ applicant }) => ({
    personalData: applicant.personalData,
})

const mapDispatchToProps = {
    savePersonalData,
}

export default connect(mapStateToProps, mapDispatchToProps)(LoanApplyForm1)
