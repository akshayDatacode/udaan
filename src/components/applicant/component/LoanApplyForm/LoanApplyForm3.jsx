import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom"
import { connect } from "react-redux";
import {saveFinanceProductDetails} from "../../actions"
import {validateForm3} from './helper'

class LoanApplyForm3 extends Component {
    state = {
        loanAmount: this.props.financeProductDetails.loanAmount,
        invoiceNo: this.props.financeProductDetails.invoiceNo,
        modelNo: this.props.financeProductDetails.modelNo,
        noOfInstallment: this.props.financeProductDetails.noOfInstallment,
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
        const errors = validateForm3(data)
        if (Object.keys(errors).length) {
            this.setState({ error: errors })
        } else {
            saveFinanceProductDetails(data)
            this.setState({ isValid: true })
        }
        
    }
    render() {
        const {
            loanAmount,
            invoiceNo,
            modelNo,
            noOfInstallment,
            isValid,
            error
        } = this.state
        return (
            isValid ?
                <Redirect to="/cheque_details"/>
                :
            <div className="p-5">
                <h2 className="ml-5 mb-5 mt-5">Finance Product Details</h2>
                <div className="form-row">
                    <div class="form-group col-md-2">
                        <label>Loan Amount</label>
                        <input type="text" class="form-control" name="loanAmount" value={loanAmount} onChange={this.handleChange} placeholder="Loan Amount" />
                        {error.loanAmount && <span class="text-danger">{error.loanAmount}</span>}
                      </div>
                    <div class="form-group col-md-4">
                        <label>Invoice No.</label>
                        <input type="text" class="form-control" name="invoiceNo" value={invoiceNo} onChange={this.handleChange} placeholder="Invoice No." />
                        {error.invoiceNo && <span class="text-danger">{error.invoiceNo}</span>}
                     </div>
                </div>
                <div className="form-row">
                    <div class="form-group col-md-4">
                        <label>Model no.</label>
                        <input type="text" class="form-control" name="modelNo" value={modelNo} onChange={this.handleChange} placeholder="Model no." />
                        {error.modelNo && <span class="text-danger">{error.modelNo}</span>}
                      </div>
                    <div class="form-group col-md-2">
                        <label>No. of installments</label>
                        <input type="number" class="form-control" name="noOfInstallment" value={noOfInstallment} onChange={this.handleChange} />
                        {error.noOfInstallment && <span class="text-danger">{error.noOfInstallment}</span>}
                     </div>
                </div>
                <div className="pt-3 col-md-6">
                    <Link to="/address_details">
                        <button type="submit" class="btn btn-primary float-left">Prev</button>
                    </Link>
                        <button type="submit" class="btn btn-primary float-right" onClick={this.handleNext}>Next</button>
                </div>
            </div>

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