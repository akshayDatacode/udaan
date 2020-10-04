import React, { Component } from "react";
import { Link } from "react-router-dom"
import { connect } from "react-redux";
import {saveFinanceProductDetails} from "../../actions"

class LoanApplyForm3 extends Component {
    state = {
        loanAmount: this.props.financeProductDetails.loanAmount,
        invoiceNo: this.props.financeProductDetails.invoiceNo,
        modelNo: this.props.financeProductDetails.modelNo,
        noOfInstallment: this.props.financeProductDetails.noOfInstallment,
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
            loanAmount,
            invoiceNo,
            modelNo,
            noOfInstallment,
            },
            props: { saveFinanceProductDetails }
        } = this
        const data= {
            loanAmount:loanAmount,
            invoiceNo:invoiceNo,
            modelNo:modelNo,
            noOfInstallment:noOfInstallment,
        }
        saveFinanceProductDetails(data)
    }
    render() {
        const {
            loanAmount,
            invoiceNo,
            modelNo,
            noOfInstallment,
        } = this.state
        return (
            <form className="p-5">
                <h2 className="ml-5 mb-5 mt-5">Finance Product Details</h2>
                <div className="form-row">
                    <div class="form-group col-md-2">
                        <label>Loan Amount</label>
                        <input type="text" class="form-control" name="loanAmount" value={loanAmount} onChange={this.handleChange} placeholder="Loan Amount" />
                    </div>
                    <div class="form-group col-md-4">
                        <label>Invoice No.</label>
                        <input type="text" class="form-control" name="invoiceNo" value={invoiceNo} onChange={this.handleChange} placeholder="Invoice No." />
                    </div>
                </div>
                <div className="form-row">
                    <div class="form-group col-md-4">
                        <label>Model no.</label>
                        <input type="text" class="form-control" name="modelNo" value={modelNo} onChange={this.handleChange} placeholder="Model no." />
                    </div>
                    <div class="form-group col-md-2">
                        <label>No. of installments</label>
                        <input type="number" class="form-control" name="noOfInstallment" value={noOfInstallment} onChange={this.handleChange} />
                    </div>
                </div>
                <div className="pt-3 col-md-6">
                    <Link to="/address_details">
                        <button type="submit" class="btn btn-primary float-left">Previous</button>
                    </Link>
                    <Link to="/cheque_details">
                        <button type="submit" class="btn btn-primary float-right" onClick={this.handleNext}>Next</button>
                    </Link>
                </div>
            </form>

        )
    }
}

const mapStateToProps = ({ applicant }) => ({
    financeProductDetails: applicant.financeProductDetails,
})

const mapDispatchToProps = {
    saveFinanceProductDetails,
}

export default connect(mapStateToProps, mapDispatchToProps)(LoanApplyForm3)