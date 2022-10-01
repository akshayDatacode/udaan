import React, { Component } from "react";
import { connect } from "react-redux";
import jwtDecode from "jwt-decode";

import AppRoutes from "./app_routes/AllRoutes";
import AuthRoutes from "./app_routes/AuthRoutes"
import IndexHeaderComponent from "../header_components/IndexHeaderComponent";

import { setLoginUser } from "../user/actions";

import '../../assets/scss/style.scss'

class App extends Component {

  componentDidMount() {
    try {
      const jwt = localStorage.getItem("access_token");
      if (jwt) {
        let jwtTokenUser = {
          ...jwtDecode(jwt),
          token: jwt
        }
        if (jwtTokenUser) {
          this.props.setLoginUser(jwtTokenUser)
        } else {
          this.props.history('/login')
        }
      }
    } catch (ex) { }
  }

  render() {
    const { currentUser } = this.props;

    return (
      <>
        {currentUser !== null && <IndexHeaderComponent />}
        {
          currentUser === null ?
            <AuthRoutes />
            :
            <div className="mt-5">
              <AppRoutes />
            </div>
        }
      </>
    )
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

const mapDispatchToProps = {
  setLoginUser,
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
