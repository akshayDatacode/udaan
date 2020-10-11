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
    userId: '',
    userType: '',
    error: [],
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const {
      state: {
        password,
        email,
        userName,
        userId,
        userType,
        error
      },
      props: { signupUser },

    } = this;

    const user = {
      email,
      password,
      userName,
      userId,
      userType
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
    if (!userName.length) {
      error[error.length] = "Username"
      this.setState({ error })
      setTimeout(function () {
        this.setState({ error: [] })
      }.bind(this), 2500)
    }

    if (error.length == 0) {
      signupUser(user)
      this.setState({
        email: '',
        password: '',
        userName: '',
        error: [],
        userId: '',
      })
    }
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
        userId,
        error,
      },

      props: { userError }
    } = this;

    return (
      <>
        <div className="row">
          <div className="col-md-3">
          </div>
          <div className="col-md-6">
            <div className="card mt-5">
              <h1 className="text-center">Sign Up</h1>
              <center>
                <form className="justify-content-center w-50">
                  <div className="form-row justify-content-center">
                    <div className="form-group text-center">
                      <label>UserId</label>
                      <input
                        type="userId"
                        className="form-control"
                        id="userId"
                        value={userId}
                        name="userId"
                        placeholder="PF1001"
                        onChange={this.handleChange}
                      />
                      {userError && <span className="text-danger small">{userError}</span>}
                    </div>
                  </div>
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
                  <div class="form-check" onClick={() => this.setState({ userType: "admin"})}>
                    <input class="form-check-input" type="radio" name="userType" id="admin" value="admin" />
                    <label class="form-check-label">
                      Admin
                    </label>
                  </div>
                  <div class="form-check" onClick={() => this.setState({ userType: "agent"})}>
                    <input class="form-check-input" type="radio" name="userType" id="agent" value="agent" />
                    <label class="form-check-label">
                      Agent
                    </label>
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
          <div className="col-md-3">
          </div>
        </div>
      </>
    );
  }
}

const mapDispatchToProps = {
  signupUser,
}

const mapStateToProps = ({ user }) => ({
  userError: user.error,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup)