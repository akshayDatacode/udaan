import React, { Component } from 'react';
import { getLoanDetails } from '../../../actions'
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

class LoanApplicantDetails extends Component {
  state = {
    loanDetails: [],
  }

  componentDidMount = () => {
    const {
      match: { params: { loanId } }
    } = this.props
    console.log(loanId)
    getLoanDetails(loanId).then((res) => {
      if (res && res.success) {
        console.log(res.data)
        this.setState({ loanDetails: res.data.loanApplication })
      }
    })
    // getLoanApplicationByMember(loanId).then((res) => {
    //   if (res && res.success) {
    //     console.log(res.data.member)
    //   }
    // })
  }
  render() {
    const { loanDetails: { modelNo, loanId } } = this.state
    return (
      <>
        <h1 className="mt-5">Member Details</h1>
        <h3>MOdel No.: {modelNo}</h3>
        <h3>Member ID: {loanId}</h3>
        <Link to={`/finance_product_details/${loanId}`}><div className="btn btn-primary">Apply For Loan</div></Link>
      </>
    );
  }
}

const mapDispatchToProps = {
  getLoanDetails,
}

export default connect(null, mapDispatchToProps)(LoanApplicantDetails)
