import MembersList from "./MembersList"
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { fetchMembers } from "../../actions";

const mapStateToProps = ({ member }) => ({
  members: member.members,
});

const mapDispatchToProps = {
  fetchMembers,
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(MembersList)
);
