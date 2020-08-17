import React, { Component } from "react";

class UserRegForm extends Component {
  state = {
    name: "",
    aadharNo: "",
    panNo: "",
    phoneNo: "",
    city: "",
    amount: "",
    noOfInstallment: "",
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const {
      state: { name, amount, aadharNo, phoneNo, panNo, noOfInstallment, city },
      props: { emiCalculator },
    } = this;

    const user = {
      name: name,
      aadharNo: aadharNo,
      panNo: panNo,
      phoneNo: phoneNo,
      city: city,
      amount: amount,
      noOfInstallment: noOfInstallment,
    };

    emiCalculator(user);
  };

  handleChange = (event) => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    const {
      state: { name, amount, aadharNo, phoneNo, panNo, noOfInstallment, city },
    } = this;
    return (
      <>
        <form>
          <h2 className="text-center mb-5 mt-5">Applicant</h2>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label>Applicant Name</label>
              <input
                type="text"
                className="form-control"
                id="applicantName"
                value={name}
                name="name"
                placeholder="Applicant Name"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group col-md-6">
              <label>Aadhar No.</label>
              <input
                type="text"
                className="form-control"
                id="aadharNo"
                value={aadharNo}
                name="aadharNo"
                placeholder="3333 4564 5676"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label>PAN No.</label>
              <input
                type="text"
                className="form-control"
                id="applicantPAN"
                value={panNo}
                name="panNo"
                placeholder="ABCDE1234F"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group col-md-6">
              <label>Phone No.</label>
              <input
                type="number"
                className="form-control"
                id="phoneNO"
                value={phoneNo}
                name="phoneNo"
                placeholder="8569745896"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-4">
              <label>city</label>
              <input
                type="text"
                value={city}
                name="city"
                className="form-control"
                id="inputCity"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group col-md-4">
              <label>Amount</label>
              <input
                type="number"
                className="form-control"
                id="Amount"
                value={amount}
                name="amount"
                placeholder="xxxx"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group col-md-4">
              <label>No Of Installments</label>
              <input
                type="number"
                value={noOfInstallment}
                name="noOfInstallment"
                className="form-control"
                id="noOfInstallment"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="form-group row ">
            <div className="col text-center">
              <div onClick={this.handleSubmit}>
                <div className="btn btn-primary ">Calculate EMI</div>
              </div>
            </div>
          </div>
        </form>
      </>
    );
  }
}

export default UserRegForm;
