import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom"
import { connect } from "react-redux";
import { saveAddressData } from "../../actions"
import {validateForm2} from './helper'

class LoanApplyForm2 extends Component {
    state = {
        houseNo: this.props.address.houseNo,
        street: this.props.address.street,
        landmark: this.props.address.landmark,
        pinCode: this.props.address.pinCode,
        city: this.props.address.city,
        state: this.props.address.state,
        error: {},
        isValid: false
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
        const errors = validateForm2(data)
        if (Object.keys(errors).length) {
            this.setState({ error: errors })
        } else {
            saveAddressData(data)
            this.setState({ isValid: true })
        }
        
    }
    render() {
        const {
            houseNo,
            street,
            landmark,
            pinCode,
            city,
            state,
            error,
            isValid
        } = this.state
        return (
            isValid ?
                <Redirect to="/finance_product_details" />
                :
                <div className="p-5">
                    <h2 className="ml-5 mb-5 mt-5">Address Details</h2>
                    <div className="form-row">
                        <div class="form-group col-md-2">
                            <label>House no.</label>
                            <input type="text" class="form-control" name="houseNo" value={houseNo} onChange={this.handleChange} placeholder="House No" />
                            {error.houseNo && <span class="text-danger">{error.houseNo}</span>}
                        </div>
                        <div class="form-group col-md-4">
                            <label>Street</label>
                            <input type="text" class="form-control" name="street" value={street} onChange={this.handleChange} placeholder="Street" />
                            {error.street && <span class="text-danger">{error.street}</span>}
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
                            {error.pinCode && <span class="text-danger">{error.pinCode}</span>}
                        </div>
                    </div>
                    <div className="form-row">
                        <div class="form-group col-md-3">
                            <label>City</label>
                            <input type="text" class="form-control" name="city" value={city} onChange={this.handleChange} placeholder="City" />
                            {error.city && <span class="text-danger">{error.city}</span>}
                        </div>
                        <div class="form-group col-md-3">
                            <label>State</label>
                            <input type="text" class="form-control" name="state" value={state} onChange={this.handleChange} placeholder="State" />
                            {error.state && <span class="text-danger">{error.state}</span>}
                        </div>
                    </div>
                    <div className="pt-3 col-md-6">
                        <Link to="/personal_details">
                            <button type="submit" class="btn btn-primary float-left">Prev</button>
                        </Link>
                        <button type="submit" class="btn btn-primary float-right" onClick={this.handleNext}>Next</button>
                    </div>
                </div>
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