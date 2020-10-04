import React, { Component } from "react";
import ApplicantRegForm from "../applicant/component";
import EMICalculatorModal from "../emi_calculator";
import { Link } from "react-router-dom";
import Camera from "../camera/Camera"

class HomePage extends Component {
  state = {
    emiAmount: 0,
    fileCharge: 0,
    stampCharge: 0,
    persentPayment: 0,
    startCamera: false,
  };

  handleCamera = () => {
   this.setState({startCamera: !this.state.startCamera})
  }

  emiCalculator = (user) => {
    
    const { invoiceAmount, noOfInstallment } = user;
    const { currentUser: { userId } } = this.props
    
    console.log("Pankaj", userId)
    
    if (invoiceAmount <= 10000) {
      const emiAmount =
        (invoiceAmount - (invoiceAmount / 100) * 38.25) / noOfInstallment;
      const persentPayment = (invoiceAmount / 100) * 38.25;
      this.setState({
        fileCharge: parseInt(718),
        stampCharge: parseInt(205),
        emiAmount: emiAmount,
        persentPayment: persentPayment,
      });
    }
    if (invoiceAmount >= 10001 && invoiceAmount <= 15000) {
      const emiAmount =
        (invoiceAmount - (invoiceAmount / 100) * 38.25) / noOfInstallment;
      const persentPayment = (invoiceAmount / 100) * 38.25;
      this.setState({
        fileCharge: parseInt(940),
        stampCharge: parseInt(262),
        emiAmount: emiAmount,
        persentPayment: persentPayment,
      });
    }
    if (invoiceAmount >= 15001 && invoiceAmount <= 20000) {
      const emiAmount =
        (invoiceAmount - (invoiceAmount / 100) * 38.25) / noOfInstallment;
      const persentPayment = (invoiceAmount / 100) * 38.25;
      this.setState({
        fileCharge: parseInt(1194),
        stampCharge: parseInt(322),
        emiAmount: emiAmount,
        persentPayment: persentPayment,
      });
    }
  };

  render() {
    return (
      <>
        <div className="row">
          <div className="col">
            <div className="row">
              <div className="col-md-5">
                <div className="row mt-5 mr-4">
                  { this.state.startCamera && <Camera imageData={this.state.imageData}/>}
                </div>
                <div className="row text-center mt-5">
                  <div className="col-4">
                    <Link to="/dashboard">
                      <div className="btn btn-primary">Dashboard</div>
                    </Link>
                  </div>
                  <div className="col-4">
                    <Link to="/apply_for_loan">
                      <div className="btn btn-success">Apply</div>
                    </Link>
                  </div>
                  <div className="col-4">
                    <div className="btn btn-success" onClick={() => this.handleCamera()}>Camera</div>
                  </div>
                </div>
              </div>
              <div className="col-md-7">
                <ApplicantRegForm emiCalculator={this.emiCalculator} />
              </div>
            </div>
            {this.state.emiAmount > 0 && (
              <div className="row">
                <div className="col-12 text-center">
                  {console.log(this.state.emiAmount)}
                  <EMICalculatorModal
                    emiAmount={this.state.emiAmount}
                    fileCharge={this.state.fileCharge}
                    stampCharge={this.state.stampCharge}
                    persentPayment={this.state.persentPayment}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </>
    );
  }
}

export default HomePage;
