import React, { Component } from "react";
import AppRoutes from "./app_routes/AllRoutes";
import AuthRoutes from "./app_routes/AuthRoutes"
import { connect } from "react-redux";
import { setLoginUser } from "../user/actions";
import IndexHeaderComponent from "../header_components/IndexHeaderComponent";

class App extends Component {
  state = {
    currentUser: null
  }

  componentDidMount() {

    const getDataFromLocalStorage = localStorage.getItem("userDetails");
    const parseDataFromJSON = JSON.parse(getDataFromLocalStorage);
    console.log("Local Storage Data", parseDataFromJSON);
    // this.setState({ currentUser: parseDataFromJSON });

    this.props.setLoginUser(parseDataFromJSON)
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
