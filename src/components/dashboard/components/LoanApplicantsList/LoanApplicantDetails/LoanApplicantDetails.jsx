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
        <div className="row mx-0">
          <div className="col-12 p-0">
            <h1 className="p-4 border-bottom shadow">Member Details</h1>
            <div className="row mx-0">
              <div className="col-12">
                <h3>Model No.: {modelNo}</h3>
                <h3>Member Id: {loanId}</h3>
                <Link to={`/finance_product_details/${loanId}`}><div className="btn btn-primary">Apply For Loan</div></Link>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapDispatchToProps = {
  getLoanDetails,
}

export default connect(null, mapDispatchToProps)(LoanApplicantDetails)
