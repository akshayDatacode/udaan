import React, { Component } from 'react'
import { connect } from "react-redux"
import CustomLoader from '../../../services/CustomLoader'
import { loginUser } from "../actions"
import { validMail } from './helper'

class Login extends Component {

  state = {
    userId: '',
    password: '',
    error: [],
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const {
      state: {
        password,
        userId,
        error
      },
      props: { loginUser },

    } = this;

    const user = {
      userId,
      password,
    }

    loginUser(user).then((res) => {
      if (res && res.success) {
        this.setState({ userId: "", password: "" })
      }
    })

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
        userId,
        password,
        error
      },
    } = this;

    return (
      <>
        <div className="mx-0 d-flex justify-content-center centered">
          {
            this.props.userAuthLoading ?
              <CustomLoader />
              :
              <div className="border rounded shadow p-4">
                <h1 className="text-center">Login</h1>
                <form className='px-3'>
                  <div className="form-group">
                    <label>userId</label>
                    <input
                      type="text"
                      className="form-control"
                      id="userId"
                      value={userId}
                      name="userId"
                      placeholder=""
                      onChange={this.handleChange}
                    />
                    {error.includes("Invalid userId") && <span className="text-danger">Invalid userId Format</span>}
                  </div>
                  <div className="form-group">
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
                  </div>
                  <div className="row mx-0">
                    <div className="col-12 text-center">
                      <div onClick={this.handleSubmit}>
                        <div className="btn btn-primary">Login</div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
          }
        </div>
      </>
    );
  }
}

const mapDispatchToProps = {
  loginUser,
}

const mapStateToProps = ({ user }) => ({
  userAuthLoading: user.userAuthLoading,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)