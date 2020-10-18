import React, { Component } from "react";
import "../../../assets/css/SideDrawer.css";
import { connect } from "react-redux";
import { logoutUser } from "../../user/actions";
import { Link } from "react-router-dom";

class SideDrawer extends Component {
  state = {};
  render() {
    const {
      currentUser: { userType },
    } = this.props;
    let drawerClasses = "side-drawer";
    if (this.props.show) {
      drawerClasses = "side-drawer open";
    }
    return (
      <>
        <nav className={drawerClasses}>
          <ul>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/calculate_emi">Calculate EMI</Link>
            </li>
            <li>
              <Link to="/members_list">Member List</Link>
            </li>
            <li>
              <Link to="/member_form">Add New Member</Link>
            </li>
            {userType === "admin" && (
              <li>
                <Link to="/signup">Add New Agent</Link>
              </li>
            )}
            <li>
              <Link to="/" onClick={() => this.props.logoutUser()}>
                Log Out
              </Link>
            </li>
          </ul>
        </nav>
      </>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

const mapDispatchToProps = {
  logoutUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(SideDrawer);
