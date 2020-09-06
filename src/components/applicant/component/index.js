import ApplicantRegForm from "./ApplicantRegForm"

import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { saveApplicant } from "../actions";

const mapDispatchToProps = {
	saveApplicant,
};

export default withRouter(connect(
	null,
	mapDispatchToProps
)(ApplicantRegForm));
