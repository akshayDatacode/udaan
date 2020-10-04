import HomePage from "./HomePage"

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});


export default withRouter(
  connect(mapStateToProps, null)(HomePage)
);
