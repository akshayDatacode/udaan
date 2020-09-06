import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { getapplicants } from "../../actions";
import ApplicantsList from "./ApplicantsList";

const mapStateToProps = ({ dashboard }) => ({
  applicants: dashboard.applicants,
});

const mapDispatchToProps = {
  getapplicants,
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ApplicantsList)
);
