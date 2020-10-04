import React, { Component } from "react";
import Camera from "../../../camera/Camera"
import LoanApplyForm1 from "./LoanApplyForm1"

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
  }

  handleCamera = () => {
    this.setState({ startCamera: !this.state.startCamera })
  }

  handleImgData = (imgData) => {
    this.setState({ userProfileImg: imgData })
    console.log(imgData)
  }

  render() {
    return (
        <LoanApplyForm1/>
    )
  }
}

export default LoanApplyForm;
