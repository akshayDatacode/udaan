import React, { Component } from "react";
import "../../assets/css/ToolBar.css";
import DrawerToggleButton from "./side_drawer/DrawerToggleButton";
import { connect } from "react-redux"
import { logoutUser } from "../user/actions"
import { Link } from "react-router-dom";

class ToolBar extends Component {
  state = {};

  render() {
    const { currentUser: { userType } } = this.props
    return (
      <>
        <header className="toolbar fixed-top mb-5 p-2">
          <nav className="toolbar_navigation ">
            <div className="toolbar_toggle-button">
              <DrawerToggleButton clickButton={this.props.drawerClickHandler} />
            </div>
            <div className="toolbar_logo">
              <img
                className="img-fluid"
                height='20px'
                width='130px'
                src='http://res.cloudinary.com/datacode/image/upload/v1664618153/ejeoewy0nssk5zhh8eze.png'
                alt="First slide"
              />
            </div>
            {/* This is for Logo and Nev Spaccing */}
            <div className="logo-nev-spacer" />
            <div className="toolbar_navigation-items">
              <ul>
                <li>
                  <Link to="/dashboard">
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link to="/calculate_emi">
                    Calculate EMI
                  </Link>
                </li>
                <li>
                  <Link to="/members_list">
                    Member List
                  </Link>
                </li>
                <li>
                  <Link to="/member_form">
                    Add New Member
                  </Link>
                </li>
                {userType === 'admin' &&
                  <li>
                    <Link to="/signup">
                      Add New Agent
                    </Link>
                  </li>
                }
                <li>
                  <Link to="/" onClick={() => this.props.logoutUser()}>
                    Log Out
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </header>
      </>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

const mapDispatchToProps = {
  logoutUser,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ToolBar)
