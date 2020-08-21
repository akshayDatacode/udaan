import React, { Component } from "react";
import UserRefForm from "../user";
import EMICalculatorModal from "../emi_calculator";

class HomePage extends Component {
  state = {
    emiAmount: 0,
    fileCharge: 0,
    stampCharge: 0,
    persentPayment: 0,
  };

  emiCalculator = (user) => {
    const { amount, noOfInstallment } = user;
    if (amount <= 10000) {
      const emiAmount = (amount - (amount / 100) * 38.25) / noOfInstallment;
      const persentPayment = (amount / 100) * 38.25;
      this.setState({
        fileCharge: parseInt(718),
        stampCharge: parseInt(205),
        emiAmount: emiAmount,
        persentPayment: persentPayment,
      });
    }
    if (amount >= 10001 && amount <= 15000) {
      const emiAmount = (amount - (amount / 100) * 38.25) / noOfInstallment;
      const persentPayment = (amount / 100) * 38.25;
      this.setState({
        fileCharge: parseInt(940),
        stampCharge: parseInt(262),
        emiAmount: emiAmount,
        persentPayment: persentPayment,
      });
    }
    if (amount >= 15001 && amount <= 20000) {
      const emiAmount = (amount - (amount / 100) * 38.25) / noOfInstallment;
      const persentPayment = (amount / 100) * 38.25;
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
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <div className="row">
              <div className="col-12"><UserRefForm emiCalculator={this.emiCalculator} /></div>
            </div>
            {this.state.emiAmount > 0 && (
              <div className="row">
                <div className="col-12 text-center">
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
          <div className="col-md-2"></div>
        </div>
      </>
    );
  }
}

export default HomePage;
