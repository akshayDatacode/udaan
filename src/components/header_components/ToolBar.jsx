import React, { Component } from "react";
import "../../assets/css/ToolBar.css";
import DrawerToggleButton from "./side_drawer/DrawerToggleButton";
import { connect } from "react-redux"
import { logoutUser } from "../user/actions"
import { Link } from "react-router-dom";

class ToolBar extends Component {
  state = {};

  render() {
    return (
      <>
        <header className="toolbar fixed-top">
          <nav className="toolbar_navigation ">
            <div className="toolbar_toggle-button">
              <DrawerToggleButton clickButton={this.props.drawerClickHandler} />
            </div>
            <div className="toolbar_logo">
              <img
                className="logo_img "
                src={require("../../assets/images/udaan_logo.png")}
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
const mapDispatchToProps = {
  logoutUser,
}

export default connect(
  null,
  mapDispatchToProps,
)(ToolBar)
