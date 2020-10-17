import EMICalculator from "./EMICalculator";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

export default withRouter(
  connect(mapStateToProps, null)(EMICalculator)
);

