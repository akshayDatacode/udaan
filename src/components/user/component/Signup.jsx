import React, { Component } from 'react';
import { connect } from "react-redux"
import { signupUser } from "../actions"
import { validMail } from "./helper"
import { validPassword } from "./helper"

class Signup extends Component {
  state = {
    email: '',
    password: '',
    userName: '',
    error: [],
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const {
      state: {
        password,
        email,
        userName,
        error
      },
      props: { signupUser },

    } = this;

    const user = {
      email,
      password,
      userName,
    };

    if (!validMail(email)) {
      error[error.length] = "Invalid Email"
      this.setState({ error })
      setTimeout(function () {
        this.setState({ error: [] })
      }.bind(this), 2500)

    }
    if (!validPassword(password)) {
      error[error.length] = "Invalid Password"
      this.setState({ error })
      setTimeout(function () {
        this.setState({ error: [] })
      }.bind(this), 2500)
    }
    if(!userName.length){
      error[error.length] = "Username"
      this.setState({ error })
      setTimeout(function () {
        this.setState({ error: [] })
      }.bind(this), 2500)
    }

    if (error.length == 0)
      signupUser(user)


  };

  handleChange = (event) => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    const {
      state: {
        email,
        password,
        userName,
        error,
      },
    } = this;

    return (
      <>
        <div className="row">
          <div className="col-3">
          </div>
          <div className="col-6">
            <div className="card mt-5">
              <h1 className="text-center">Sign Up</h1>
              <center>
                <form className="justify-content-center w-50">
                  <div className="form-row justify-content-center">
                    <div className="form-group text-center">
                      <label>Email</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        value={email}
                        name="email"
                        placeholder="akshaycse25@gmail.com"
                        onChange={this.handleChange}
                      />
                      {error.includes("Invalid Email") && <span className="text-danger small">Invalid Email Format</span>}
                    </div>
                  </div>
                  <div className="form-row justify-content-center">
                    <div className="form-group text-center">
                      <label>Password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        value={password}
                        name="password"
                        placeholder="xxxxxx"
                        onChange={this.handleChange}
                      />
                      {error.includes("Invalid Password") && <span className="text-danger small">Minimum 6 characters, at least one uppercase letter, one lowercase letter, one number and one special character</span>}
                    </div>
                  </div>
                  <div className="form-row justify-content-center">
                    <div className="form-group text-center">
                      <label>user Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="userName"
                        value={userName}
                        name="userName"
                        placeholder="xxxxxx"
                        onChange={this.handleChange}
                      />
                      {error.includes("Username") && <span className="text-danger small">Please Enter Username</span>}
                    </div>
                  </div>
                  <div className="form-group row ">
                    <div className="col text-center">
                      <div onClick={this.handleSubmit}>
                        <div className="btn btn-primary">Signup</div>
                      </div>
                    </div>
                  </div>
                </form>
              </center>
            </div>
          </div>
          <div className="col-3">
          </div>
        </div>
      </>
    );
  }
}

const mapDispatchToProps = {
  signupUser,
}

export default connect(
  null,
  mapDispatchToProps
)(Signup)