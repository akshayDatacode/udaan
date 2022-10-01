import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux"
import { logoutUser } from "../user/actions"

class Home extends Component {
  state = {};
  render() {
    return (
      <>

        <div className="row mt-5">
          <div className="col text-center">
            <img
              className="img-fluid"
              height='20px'
              width='230px'
              src='http://res.cloudinary.com/datacode/image/upload/v1664618153/ejeoewy0nssk5zhh8eze.png'
              alt="First slide"
            />
            <h3>WellCome to</h3>
            <h1>Udaan Co-Operative Society</h1>
          </div>

        </div>
        <div className="row m-5">
          <div className="col-2"></div>
          <div className="col-md-8 text-center">
            <Link to="/dashboard">
              <button className="btn btn-primary btn-lg mr-4">Dashboard</button>
            </Link>
          </div>
          <div className="col-2"></div>
        </div>
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
)(Home)