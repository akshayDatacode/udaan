import React, { Component } from "react";
import AppRoutes from "./app_routes/AllRoutes";
import Login from "../user/component/Login";
import { connect } from "react-redux";
import { setLoginUser } from "../user/actions";

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
      <div className="container">
        {currentUser === null ? <Login /> : <AppRoutes />}
      </div>
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
