import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom"
import { connect } from "react-redux";
import { saveChequeDetails } from "../../actions"
import {validateForm4} from './helper'

class LoanApplyForm4 extends Component {
    state = {
        chequeNo1: this.props.chequeDetails.chequeNo1,
        chequeNo1Img: this.props.chequeDetails.chequeNo1Img,
        chequeNo2: this.props.chequeDetails.chequeNo2,
        chequeNo2Img: this.props.chequeDetails.chequeNo2Img,
        bankName: this.props.chequeDetails.bankName,
        accountNo: this.props.chequeDetails.accountNo,
        IFCSCode: this.props.chequeDetails.IFCSCode,
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
                chequeNo1,
                chequeNo1Img,
                chequeNo2,
                chequeNo2Img,
                bankName,
                accountNo,
                IFCSCode,
            },
            props: { saveChequeDetails }
        } = this
        const data = {
            chequeNo1: chequeNo1,
            //chequeNo1Img: chequeNo1Img,
            chequeNo2: chequeNo2,
            //chequeNo2Img: chequeNo2Img,
            bankName: bankName,
            accountNo: accountNo,
            IFCSCode: IFCSCode,
        }
        const errors = validateForm4(data)
        if (Object.keys(errors).length) {
            this.setState({ error: errors })
        } else {
            saveChequeDetails(data)
            this.setState({ isValid: true })
        }
        
    }
    render() {
        const {
            chequeNo1,
            chequeNo1Img,
            chequeNo2,
            chequeNo2Img,
            bankName,
            accountNo,
            IFCSCode,
            error,
            isValid
        } = this.state
        const {  match: { params: { memberId } } } = this.props
        return (
            isValid ?
                <Redirect to={`/guarantor_details/${memberId}`} />
                :
                <div className="p-5">
                    <h2 className="ml-5 mb-5 mt-5">Cheque Details</h2>
                    <div className="form-row">
                        <div class="form-group col-md-4">
                            <label>Cheque no 1.</label>
                            <input type="text" class="form-control" name="chequeNo1" value={chequeNo1} onChange={this.handleChange} placeholder="Cheque No 1" />
                            {error.chequeNo1 && <span class="text-danger">{error.chequeNo1}</span>}
                        </div>
                        {/* <div class="form-group col-md-2">
                            <label>Cheque Image</label>
                            <input type="text" class="form-control" name="chequeNo1Img" value={chequeNo1Img} onChange={this.handleChange} placeholder="img" />
                            {error.chequeNo1Img && <span class="text-danger">{error.chequeNo1Img}</span>}
                        </div> */}
                    </div>
                    <div className="form-row">
                        <div class="form-group col-md-4">
                            <label>Cheque no 2.</label>
                            <input type="text" class="form-control" name="chequeNo2" value={chequeNo2} onChange={this.handleChange} placeholder="Cheque No 2" />
                            {error.chequeNo2 && <span class="text-danger">{error.chequeNo2}</span>}
                        </div>
                    {/*    <div class="form-group col-md-2">
                         <label>Cheque Image</label>
                         <input type="text" class="form-control" name="chequeNo2Img" value={chequeNo2Img} onChange={this.handleChange} placeholder="img" />
                         {error.chequeNo2Img && <span class="text-danger">{error.chequeNo2Img}</span>}
                     </div> */}
                     </div>
                    <div class="form-group col-md-6">
                        <label>Bank Name</label>
                        <input type="text" class="form-control" name="bankName" value={bankName} onChange={this.handleChange} placeholder="Bank Name" />
                        {error.bankName && <span class="text-danger">{error.bankName}</span>}
                    </div>
                    <div className="form-row">
                        <div class="form-group col-md-3">
                            <label>Account No.</label>
                            <input type="text" class="form-control" name="accountNo" value={accountNo} onChange={this.handleChange} placeholder="Account No." />
                            {error.accountNo && <span class="text-danger">{error.accountNo}</span>}
                        </div>
                        <div class="form-group col-md-3">
                            <label>IFSC</label>
                            <input type="text" class="form-control" name="IFCSCode" value={IFCSCode} onChange={this.handleChange} placeholder="IFSC" />
                            {error.IFCSCode && <span class="text-danger">{error.IFCSCode}</span>}
                        </div>
                    </div>
                    <div className="pt-3 col-md-6">
                        <Link to={`/finance_product_details/${memberId}`}>
                            <button type="submit" class="btn btn-primary float-left">Prev</button>
                        </Link>
                        <button type="submit" class="btn btn-primary float-right" onClick={this.handleNext}>Next</button>
                    </div>
                </div>

        )
    }
}

const mapStateToProps = ({ applicant }) => ({
    chequeDetails: applicant.chequeDetails,
})

const mapDispatchToProps = {
    saveChequeDetails,
}

export default connect(mapStateToProps, mapDispatchToProps)(LoanApplyForm4)