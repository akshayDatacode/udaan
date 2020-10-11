import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom"
import { connect } from "react-redux";
import { saveGuarantorDetails } from "../../actions"
import Modals from './Modal'
import { validateForm5 } from './helper'

class LoanApplyForm5 extends Component {
    state = {
        gaurantorName: this.props.guarantorDetails.gaurantorName,
        gaurantorPhoneNo: this.props.guarantorDetails.gaurantorPhoneNo,
        gaurantorAddress: this.props.guarantorDetails.gaurantorAddress,
        openModal: false,
        error: {},
        isValid: false
    }
    handleChange = (event) => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value,
        });
    }
    handleNext = (e) => {
        e.preventDefault()
        const {
            state: {
                gaurantorName,
                gaurantorPhoneNo,
                gaurantorAddress,
            },
            props: { saveGuarantorDetails }
        } = this
        const data = {
            gaurantorName: gaurantorName,
            gaurantorPhoneNo: gaurantorPhoneNo,
            gaurantorAddress: gaurantorAddress,
        }
        const errors = validateForm5(data)
        if (Object.keys(errors).length) {
            this.setState({ error: errors })
        } else {
            saveGuarantorDetails(data)
            this.setState({ openModal: true, isValid: true })
        }

    }
    handleClose = () => {
        this.setState({ openModal: false })
    }
    render() {
        const {
            gaurantorName,
            gaurantorPhoneNo,
            gaurantorAddress,
            isValid,
            error
        } = this.state
        return (
            <div className="p-5">
                <Modals open={this.state.openModal} handleClose={this.handleClose} />
                <h2 className="ml-5 mb-5 mt-5">Gaurantor Details</h2>
                <div class="form-group col-md-6">
                    <label>Guarantor Name</label>
                    <input type="text" class="form-control" name="gaurantorName" value={gaurantorName} onChange={this.handleChange} placeholder="Name" />
                    {error.gaurantorName && <span class="text-danger">{error.gaurantorName}</span>}
                </div>
                <div class="form-group col-md-6">
                    <label>Guarantor Contact</label>
                    <input type="text" class="form-control" name="gaurantorPhoneNo" value={gaurantorPhoneNo} onChange={this.handleChange} placeholder="phone no." />
                    {error.gaurantorPhoneNo && <span class="text-danger">{error.gaurantorPhoneNo}</span>}
                </div>
                <div class="form-group col-md-6">
                    <label>Guarantor Address</label>
                    <input type="text" class="form-control" name="gaurantorAddress" value={gaurantorAddress} onChange={this.handleChange} placeholder="Address" />
                    {error.gaurantorAddress && <span class="text-danger">{error.gaurantorAddress}</span>}
                </div>
                <div className="pt-3 col-md-6">
                    <Link to="/cheque_details">
                        <button type="submit" class="btn btn-primary float-left">Prev</button>
                    </Link>
                    <button type="submit" class="btn btn-primary float-right" onClick={this.handleNext}>Submit</button>
                </div>
            </div>

        )
    }
}


const mapStateToProps = ({ applicant }) => ({
    guarantorDetails: applicant.guarantorDetails,
})

const mapDispatchToProps = {
    saveGuarantorDetails,
}

export default connect(mapStateToProps, mapDispatchToProps)(LoanApplyForm5)