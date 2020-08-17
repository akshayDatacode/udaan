import React, { Component } from "react";
class EMICalculatorModal extends Component {
  state = {};
  render() {
    return (
      <>
        <h1>Calculator</h1>
        <ul>
          <li>
            <h2>EMI Amount: {this.props.emiAmount}</h2>
          </li>
          <li>
            <h2>File Charge{this.props.fileCharge}</h2>
          </li>
          <li>
            <h2>Stamp Charge{this.props.stampCharge}</h2>
          </li>
          <li>
            <h2>
              DownPayment = {this.props.persentPayment} + StampCharges{" "}
              {this.props.stampCharge} + FileCharge{this.props.fileCharge}{" "}
            </h2>
            <h1>
              {this.props.persentPayment +
                this.props.stampCharge +
                this.props.fileCharge}
            </h1>
          </li>
        </ul>
      </>
    );
  }
}

export default EMICalculatorModal;
