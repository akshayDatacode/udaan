import React, { Component } from "react"
import { Table } from 'react-bootstrap'

class EMICalculatorModal extends Component {
  state = {};
  render() {
    return (
      <>
       <div className="detail_content plan_box p-2">
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
              <th style={{backgroundColor:"green", color:"white"}}>DownPayment</th>
              <td style={{backgroundColor:"green", color:"white"}}><input value={this.props.persentPayment}/></td>
            </tr>
            <tr>
              <th style={{backgroundColor:"blue", color:"white"}}>Total Payment</th>
              <td style={{backgroundColor:"blue", color:"white"}}><input value={ this.props.persentPayment + this.props.stampCharge + this.props.fileCharge } /></td>
            </tr>  
          </tbody>
        </Table>
        </div>
      </>
    );
  }
}

export default EMICalculatorModal;
