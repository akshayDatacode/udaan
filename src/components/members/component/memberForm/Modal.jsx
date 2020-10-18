import React, { Component } from "react"
import { Modal } from 'react-bootstrap'
import { addMember } from '../../actions'
import { connect } from "react-redux";
import { Redirect } from "react-router-dom"

class Modals extends Component {
  state = {
    submit: false,
    memberId: "",
  }

  componentDidMount = () => {
    let memberId = Math.random().toString(36).substr(2, 9)
    this.setState({ memberId: memberId });
  }

  handleSubmit = async () => {
    const { aadharNo,
      memberName,
      agentId,
      poaType,
      poaNo,
      poaImg,
      phoneNo,
      userProfileImg } = this.props.member.personalData
    const { houseNo,
      street,
      landmark,
      pinCode,
      city,
      state, } = this.props.member.address

    const user = {
      aadhaarNo: aadharNo,
      memberName,
      memberId: this.state.memberId,
      agentId,
      poaType,
      poaNo,
      poaImg,
      phoneNo,
      userProfileImg,
      houseNo,
      street,
      landmark,
      pinCode,
      city,
      state,
    }
    await addMember(user)
    this.setState({ submit: true })
  }
  render() {
    return (

      this.state.submit ?
        <Redirect to="/" />
        :
        <Modal
          show={this.props.open}
          size="sm"
          onHide={this.props.handleClose}
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>Submit Form</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4 className="text-center">are u sure want to submit</h4>
          </Modal.Body>
          <Modal.Footer>
            <button type="button" class="btn btn-secondary" data-dismiss="modal" onClick={this.props.handleClose}>Close</button>

            <button type="button" class="btn btn-primary" onClick={this.handleSubmit}>Submit Details</button>

          </Modal.Footer>
        </Modal>


    )
  }
}

const mapStateToProps = ({ member }) => ({
  member: member
})

const mapDispatchToProps = {
  addMember
}

export default connect(mapStateToProps, mapDispatchToProps)(Modals)