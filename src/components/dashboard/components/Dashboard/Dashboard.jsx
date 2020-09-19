import React, { Component } from "react";
import { Link } from "react-router-dom";
class Dashboard extends Component {
  state = {};
  render() {
    return (
      <>
        <h1>Dashboard</h1>
        <Link to="/applicants_list">
          <div className="btn btn-success">Applicants List</div>
        </Link>
        <Link to="/loan_applicants_list">
          <div className="btn btn-warning">Loan Application List</div>
        </Link>
      </>
    );
  }
}

export default Dashboard;
