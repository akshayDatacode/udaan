import React, { Component } from "react";
import ApplicantRegForm from "../applicant/component";
import EMICalculatorModal from "./EMICalculatorModal";
import { Link } from "react-router-dom";
import Camera from "../camera/Camera"
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";


class EMICalculator extends Component {
  state = {
    emiAmount: 0,
    fileCharge: 0,
    stampCharge: 0,
    persentPayment: 0,
    startCamera: false,
    membershipCharge: 0,
  };

  handleCamera = () => {
    this.setState({ startCamera: !this.state.startCamera })
  }

  emiCalculator = (user) => {

    const { invoiceAmount, noOfInstallment } = user;
    const { currentUser: { userId } } = this.props


    if (userId === "PF0010") {
      console.log("Pankaj", userId)
      const emiAmount =
        (invoiceAmount - (invoiceAmount / 100) * 34) / noOfInstallment;
      const persentPayment = (invoiceAmount / 100) * 34;
      this.setState({
        fileCharge: parseInt(787),
        membershipCharge: parseInt(399),
        emiAmount: emiAmount,
        persentPayment: persentPayment,
      })
    } else {
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
      if (invoiceAmount >= 20001 && invoiceAmount <= 30000) {
        const emiAmount =
          (invoiceAmount - (invoiceAmount / 100) * 38.25) / noOfInstallment;
        const persentPayment = (invoiceAmount / 100) * 38.25;
        this.setState({
          fileCharge: parseInt(1762),
          stampCharge: parseInt(634),
          emiAmount: emiAmount,
          persentPayment: persentPayment,
        });
      }
    }

  };

  render() {
    const { currentUser: { userId } } = this.props
    return (
      <>
        <div className="row">
          <div className="col">
            <div className="row">
              <div className="col-md-5">
                <div className="row mt-5 mr-4">
                  {this.state.startCamera && <Camera imageData={this.state.imageData} />}
                </div>
                <div className="row text-center mt-5">
                  <div className="col-4">
                    <Link to="/personal_details">
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
                  <EMICalculatorModal
                    userId={userId}
                    emiAmount={this.state.emiAmount}
                    fileCharge={this.state.fileCharge}
                    stampCharge={this.state.stampCharge}
                    persentPayment={this.state.persentPayment}
                    membershipCharge={this.state.membershipCharge}
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

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

export default withRouter(
  connect(mapStateToProps, null)(EMICalculator)
)