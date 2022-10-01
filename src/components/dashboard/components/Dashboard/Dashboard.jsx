import React, { Component } from "react";
import { Link } from "react-router-dom";
class Dashboard extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="row mx-0">
          <div className="col-12 p-0">
            <div className="p-4 border-bottom shadow">
              <h1>Dashboard</h1>
            </div>
            <div className="d-flex justify-content-center align-items-center mt-5">
              <div>
                <Link to="/applicants_list">
                  <div className="btn btn-success mx-3">Applicants List</div>
                </Link>
                <Link to="/loan_applicants_list">
                  <div className="btn btn-warning mx-3">Loan Application List</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Dashboard;
