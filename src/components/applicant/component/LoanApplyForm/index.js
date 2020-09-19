import LoanApplyForm from './LoanApplyForm'
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { addLoanApplicants } from "../../actions";

const mapDispatchToProps = {
	addLoanApplicants,
}

export default withRouter(connect(
	null,
	mapDispatchToProps
)(LoanApplyForm))
