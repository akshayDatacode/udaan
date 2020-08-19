import React, { Component } from "react";
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class EMICalculatorModal extends Component {
  state = {};
  render() {
    return (
      <>
       <div className="detail_content plan_box ">
       <Table striped bordered hover responsive>
              <tbody>
                <tr>
         
            <th style={{backgroundColor:"blue", color:"white"}}>EMI Amount: </th>
            <td style={{backgroundColor:"blue", color:"white"}}><input value={this.props.emiAmount}/></td>
            </tr>
            <tr>
            <th >File Charge:</th>
            <td><input value={this.props.fileCharge}/></td>
            </tr>
              <tr>
            <th>Stamp Charge</th>
            <td><input value={this.props.stampCharge}/></td>
</tr>
        <tr>
            <th>
              DownPayment = {this.props.persentPayment} + StampCharges{" "}
              {this.props.stampCharge} + FileCharge{this.props.fileCharge}{" "}
            </th>
            <td>
            <input value=
              {this.props.persentPayment +
                this.props.stampCharge +
                this.props.fileCharge}/>
            </td>
        </tr>

</tbody>
</Table>
        </div>
      </>
    );
  }
}

export default EMICalculatorModal;
