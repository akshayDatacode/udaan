import React, { Component } from "react";
import ApplicantsList from "../ApplicantsList";
class Dashboard extends Component {
  state = {};
  render() {
    return (
      <>
        <h1>Dashboard</h1>
        <ApplicantsList />
      </>
    );
  }
}

export default Dashboard;
