import React, { Component } from "react";
import "../../assets/css/ToolBar.css";
import DrawerToggleButton from "./side_drawer/DrawerToggleButton";
import { connect } from "react-redux"
import { logoutUser } from "../user/actions"

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
                  <a href="#Home">
           
                    Home
                  </a>
                </li>
                <li>
                  <a href="#About-us">
                                        About Us
                  </a>
                </li>
                <li>
                  <a href="#footer">
                    
                    Contact Us
                  </a>
                </li>
                <li>
                  <a onClick={() => this.props.logoutUser()}>
                    Log Out
                  </a>
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
