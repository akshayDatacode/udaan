import React, { Component } from "react"
import { Table } from 'react-bootstrap'

class EMICalculatorModal extends Component {
  state = {};
  render() {
    const { props: {
      fileCharge, stampCharge,
      emiAmount, persentPayment, userId,
      membershipCharge
    } } = this
    
    return (
      <>
        {console.log("rrrrrrr.....",userId)}
        <div className="detail_content plan_box p-2">
          <Table striped bordered hover responsive>
            <tbody>
              <tr>
                <th style={{ backgroundColor: "blue", color: "white" }}>EMI Amount: </th>
                <td style={{ backgroundColor: "blue", color: "white" }}><input value={emiAmount} /></td>
              </tr>
              <tr>
                <th >File Charge:</th>
                <td><input value={fileCharge} /></td>
              </tr>
              {userId === "PF0010" ? <tr>
                <th>Membership Charge</th>
                <td><input value={membershipCharge} /></td>
              </tr> : <tr>
                  <th>Stamp Charge</th>
                  <td><input value={stampCharge} /></td>
                </tr>
              }
              {/* <tr>
                <th style={{ backgroundColor: "green", color: "white" }}>DownPayment</th>
                <td style={{ backgroundColor: "green", color: "white" }}><input value={persentPayment} /></td>
              </tr> */}
              {userId === "PF0010" ? <tr>
                <tr>
                  <th style={{ backgroundColor: "blue", color: "white" }}>DownPayment</th>
                  <td style={{ backgroundColor: "blue", color: "white" }}><input value={persentPayment + membershipCharge + fileCharge} /></td>
                </tr>
              </tr> : <tr>
                  <th style={{ backgroundColor: "blue", color: "white" }}>DownPayment</th>
                  <td style={{ backgroundColor: "blue", color: "white" }}><input value={persentPayment + stampCharge + fileCharge} /></td>
                </tr>
              }
            </tbody>
          </Table>
        </div>
      </>
    );
  }
}

export default EMICalculatorModal;
