import React, { Component } from "react";
import { Link } from "react-router-dom"
import { connect } from "react-redux";
import { saveGuarantorDetails } from "../../actions"

class LoanApplyForm5 extends Component {
    state = {
        gaurantorName: this.props.guarantorDetails.gaurantorName,
        gaurantorPhoneNo: this.props.guarantorDetails.gaurantorPhoneNo,
        gaurantorAddress: this.props.guarantorDetails.gaurantorAddress,
    }
    handleChange = (event) => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value,
        });
    }
    handleNext = () => {
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
        saveGuarantorDetails(data)
    }
    render() {
        const {
            gaurantorName,
            gaurantorPhoneNo,
            gaurantorAddress,
        }= this.state
        return (
            <form className="p-5">
                <h2 className="ml-5 mb-5 mt-5">Gaurantor Details</h2>

                <div class="form-group col-md-6">
                    <label>Guarantor Name</label>
                    <input type="text" class="form-control" name="gaurantorName" value={gaurantorName} onChange={this.handleChange} placeholder="Name" />
                </div>
                <div class="form-group col-md-6">
                    <label>Guarantor Contact</label>
                    <input type="text" class="form-control" name="gaurantorPhoneNo" value={gaurantorPhoneNo} onChange={this.handleChange} placeholder="phone no." />
                </div>
                <div class="form-group col-md-6">
                    <label>Guarantor Address</label>
                    <input type="text" class="form-control" name="gaurantorAddress" value={gaurantorAddress} onChange={this.handleChange} placeholder="Address" />
                </div>
                <div className="pt-3 col-md-6">
                    <Link to="/cheque_details">
                        <button type="submit" class="btn btn-primary float-left">Prev</button>
                    </Link>
                    <Link to="">
                        <button type="submit" class="btn btn-primary float-right" onClick={this.handleNext}>Next</button>
                    </Link>
                </div>
            </form>

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