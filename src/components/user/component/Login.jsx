import React, { Component } from 'react'
import { connect } from "react-redux"
import { loginUser } from "../actions"

class Login extends Component {

  state = {
    email: '',
    password: '',
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const {
      state: {
        password,
        email,
      },
      props: { loginUser },

    } = this;

    const user = {
      email,
      password,
    };

    loginUser(user).then((res) => {
      if (res && res.success) {
        this.setState({ email: "", password: "" })
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
        email,
        password,
      },
    } = this;

    return (
      <>
        <div className="row">
          <div className="col-md-3">
          </div>
          <div className="col-md-6">
            <div className="card mt-5">
              <h1 className="text-center">Login</h1>
              <center>
                <form>
                  <div className="form-row">
                    <div className="form-group col-md-6 text-center">
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
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-6 text-center">
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
                  </div>
                  <div className="form-group row ">
                    <div className="col text-center">
                      <div onClick={this.handleSubmit}>
                        <div className="btn btn-primary">Login</div>
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
  loginUser,
}

export default connect(
  null,
  mapDispatchToProps
)(Login)