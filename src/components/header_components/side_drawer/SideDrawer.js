import React, { Component } from "react";
import "../../../assets/css/SideDrawer.css";
import { connect } from "react-redux"
import { logoutUser } from "../../user/actions"

class SideDrawer extends Component {
  state = {};
  render() {
    let drawerClasses = "side-drawer";
    if (this.props.show) {
      drawerClasses = "side-drawer open";
    }
    return (
      <>
        <nav className={drawerClasses}>
          <ul>
            <li>
              <a href="#Home">
                <h5>
                  Home
                </h5>
              </a>
            </li>
            <li>
              <a href="#About-us">
                <h5>
               About sUs
                </h5>
              </a>
            </li>
            <li>
              <a href="#footer">
                <h5>
                  Contact Us
                </h5>
              </a>
            </li>
            <li>
              <a onClick={() => this.props.logoutUser()}>
                Log Out
              </a>
            </li>
          </ul>
        </nav>
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
)(SideDrawer)
