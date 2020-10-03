import React, { Component } from "react";
import Camera from "../../../camera/Camera"

class LoanApplyForm extends Component {
  state = {
    aadharNo: "",
    applicantName: '',
    agentId: '',
    poaType: '',
    poaNo: '',
    poaImg: '',
    phoneNo: '',
    userProfileImg: "",
    // Address
    houseNo: '',
    street: '',
    landmark: '',
    pinCode: '',
    city: '',
    state: '',
    // Finance Product Details
    loanAmount: '',
    invoiceNo: '',
    modelNo: '',
    noOfInstallment: '',
    // Cheque Details
    chequeNo1: '',
    chequeNo1Img: '',
    chequeNo2: '',
    chequeNo2Img: '',
    bankName: '',
    accountNo: '',
    IFCSCode: '',
    // Gaurantor Details
    gaurantorName: '',
    gaurantorPhoneNo: '',
    gaurantorAddress: '',
    // Camera
    startCamera: false,
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const {
      state: {
        aadharNo,
        applicantName,
        agentId,
        poaType,
        poaNo,
        poaImg,
        phoneNo,
        userProfileImg,
        // Address
        houseNo,
        street,
        landmark,
        pinCode,
        city,
        state,
        // Finance Product Details
        loanAmount,
        invoiceNo,
        modelNo,
        noOfInstallment,
        // Cheque Details
        chequeNo1,
        chequeNo1Img,
        chequeNo2,
        chequeNo2Img,
        bankName,
        accountNo,
        IFCSCode,
        // Gaurantor Details
        gaurantorName,
        gaurantorPhoneNo,
        gaurantorAddress,
      },
      props: { addLoanApplicants },
    } = this;

    const user = {
      applicantName: applicantName,
      aadharNo: aadharNo,
      phoneNo: phoneNo,
      city: city,
      userProfileImg: userProfileImg,
      noOfInstallment: noOfInstallment,
    };
    addLoanApplicants(user);
  };

  handleChange = (event) => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleCamera = () => {
    this.setState({ startCamera: !this.state.startCamera })
  }

  handleImgData = (imgData) => {
    this.setState({ userProfileImg: imgData })
    console.log(imgData)
  }

  render() {
    const {
      state: {
        aadharNo,
        applicantName,
        agentId,
        poaType,
        poaNo,
        poaImg,
        phoneNo,
        userProfileIm,
        // Address
        houseNo,
        street,
        landmark,
        pinCode,
        city,
        state,
        // Finance Product Details
        loanAmount,
        invoiceNo,
        modelNo,
        noOfInstallment,
        // Cheque Details
        chequeNo1,
        chequeNo1Im,
        chequeNo2,
        chequeNo2Img,
        bankName,
        accountNo,
        IFCSCode,
        // Gaurantor Details
        gaurantorName,
        gaurantorPhoneNo,
        gaurantorAddress,
      },
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
                value={applicantName}
                name="applicantName"
                placeholder="Applicant Name"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group col-md-6">
              {this.state.startCamera && <Camera handleImgData={this.handleImgData} />}
              <div className="btn btn-success" onClick={() => this.handleCamera()}>Take Photo</div>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-4">
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
            <div className="form-group col-md-4">
              <label>Proof of Address No.</label>
              <input
                type="text"
                className="form-control"
                id="applicantPAN"
                value={poaNo}
                name="poaNo"
                placeholder="ABCDE1234F"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group col-md-4">
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
                value={loanAmount}
                name="loanAmount"
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

export default LoanApplyForm;
