import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { fetchLoanApplicants } from "../../actions";
import LoanApplicantsList from "./LoanApplicantsList";

const mapStateToProps = ({ dashboard }) => ({
  loanApplicants: dashboard.loanApplicants,
});

const mapDispatchToProps = {
  fetchLoanApplicants,
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(LoanApplicantsList)
);
