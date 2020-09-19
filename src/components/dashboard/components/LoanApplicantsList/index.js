import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { getLoanApplicants } from "../../actions";
import LoanApplicantsList from "./LoanApplicantsList";

const mapStateToProps = ({ dashboard }) => ({
  loanApplicants: dashboard.loanApplicants,
});

const mapDispatchToProps = {
  getLoanApplicants,
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(LoanApplicantsList)
);
