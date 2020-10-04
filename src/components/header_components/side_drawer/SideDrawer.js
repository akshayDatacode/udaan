import React, { Component } from "react";
import "../../../assets/css/SideDrawer.css";

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
              <a href="#why-choose-us">
                <h5>
                  The Wow Edge
                </h5>
              </a>
            </li>
            <li>
              <a href="#testimonial">
                <h5> Stars Speak
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
            {/* <li>
                  <a href="#footer" onClick={this.logout}>
                    Log Out
                  </a>
                </li> */}
          </ul>
        </nav>
      </>
    );
  }
}

export default SideDrawer;
