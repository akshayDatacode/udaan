import React, { Component } from 'react';
import { getMemberProfile } from '../../actions'
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

class MemberDetailsPage extends Component {
  state = {
    memberProfile: [],
  }

  componentDidMount = () => {
    const {
      match: { params: { memberId } }
    } = this.props
    getMemberProfile(memberId).then((res) => {
      if (res && res.success) {
        console.log(res.data.member)
        this.setState({ memberProfile: res.data.member })
      }
    })
    // getLoanApplicationByMember(memberId).then((res) => {
    //   if (res && res.success) {
    //     console.log(res.data.member)
    //   }
    // })
  }
  render() {
    const { memberProfile: { memberName, memberId } } = this.state
    return (
      <>
        <h1 className="mt-5">Member Details</h1>
        <h3>Member Name: {memberName}</h3>
        <h3>Member ID: {memberId}</h3>
        <Link to={`/finance_product_details/${memberId}`}><div className="btn btn-primary">Apply For Loan</div></Link>
      </>
    );
  }
}

const mapDispatchToProps = {
  getMemberProfile,
}

export default connect(null, mapDispatchToProps)(MemberDetailsPage)