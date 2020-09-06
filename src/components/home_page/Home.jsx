import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="row">
          <div className="col text-center mt-5">
            <h1>Udaan Co-Operative Society</h1>
          </div>
        </div>
        <div className="row m-5">
          <div className="col-2"></div>
          <div className="col-md-8 text-center">
            <Link to="/dashboard">
              <button className="btn btn-primary btn-lg mr-4">Dashboard</button>
            </Link>
            <Link to="/home_page">
              <button className="btn btn-primary btn-lg">Calculate EMI</button>
            </Link>
          </div>
          <div className="col-2"></div>
        </div>
      </>
    );
  }
}

export default Home;
