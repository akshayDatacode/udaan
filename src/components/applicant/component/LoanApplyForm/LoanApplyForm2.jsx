import React, { Component } from "react";
import { Link } from "react-router-dom"
import { connect } from "react-redux";
import {saveAddressData} from "../../actions"

class LoanApplyForm2 extends Component {
    state = {
        houseNo: this.props.address.houseNo,
        street: this.props.address.street,
        landmark: this.props.address.landmark,
        pinCode: this.props.address.pinCode,
        city: this.props.address.city,
        state: this.props.address.state,
    }
    handleChange = (event) => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value,
        });
    }
    handleNext = () => {
        const {
            state: {
                houseNo,
                street,
                landmark,
                pinCode,
                city,
                state,
            },
            props: {
                saveAddressData
            }
        } = this
        const data = {
            houseNo: houseNo,
            street: street,
            landmark: landmark,
            pinCode: pinCode,
            city: city,
            state: state,
        }
        saveAddressData(data)
    }
    render() {
        const {
            houseNo,
            street,
            landmark,
            pinCode,
            city,
            state,
        } = this.state
        return (
            <form className="p-5">
                <h2 className="ml-5 mb-5 mt-5">Address Details</h2>
                <div className="form-row">
                    <div class="form-group col-md-2">
                        <label>House no.</label>
                        <input type="text" class="form-control" name="houseNo" value={houseNo} onChange={this.handleChange} placeholder="House No" />
                    </div>
                    <div class="form-group col-md-4">
                        <label>Street</label>
                        <input type="text" class="form-control" name="street" value={street} onChange={this.handleChange} placeholder="Street" />
                    </div>
                </div>
                <div className="form-row">
                    <div class="form-group col-md-4">
                        <label>Landmark</label>
                        <input type="text" class="form-control" name="landmark" value={landmark} onChange={this.handleChange} placeholder="Landmark" />
                    </div>
                    <div class="form-group col-md-2">
                        <label>PinCode</label>
                        <input type="text" class="form-control" name="pinCode" value={pinCode} onChange={this.handleChange} placeholder="PinCode" />
                    </div>
                </div>
                <div className="form-row">
                    <div class="form-group col-md-3">
                        <label>City</label>
                        <input type="text" class="form-control" name="city" value={city} onChange={this.handleChange} placeholder="City" />
                    </div>
                    <div class="form-group col-md-3">
                        <label>State</label>
                        <input type="text" class="form-control" name="state" value={state} onChange={this.handleChange} placeholder="State" />
                    </div>
                </div>
                <div className="pt-3 col-md-6">
                    <Link to="/personal_details">
                        <button type="submit" class="btn btn-primary float-left">Previous</button>
                    </Link>
                    <Link to="/finance_product_details">
                        <button type="submit" class="btn btn-primary float-right" onClick={this.handleNext}>Next</button>
                    </Link>
                </div>
            </form>

        )
    }
}

const mapStateToProps = ({ applicant }) => ({
    address: applicant.address,
})

const mapDispatchToProps = {
    saveAddressData,
}

export default connect(mapStateToProps, mapDispatchToProps)(LoanApplyForm2)