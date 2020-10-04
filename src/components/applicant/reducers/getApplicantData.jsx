import * as constants from "../constants";


const savePersonalData = (state, action) => {
    console.log(action.payload)
    return {
        ...state,
        personalData: action.payload
    }
}
const saveAddressData = (state, action) => {
    console.log(action.payload)
    return {
        ...state,
        address: action.payload
    }
}
const saveFinanceProductDetails = (state, action) => {
    console.log(action.payload)
    return {
        ...state,
        financeProductDetails: action.payload
    }
}
const saveChequeDetails = (state, action) => {
    console.log(action.payload)
    return {
        ...state,
        chequeDetails: action.payload
    }
}
const saveGuarantorDetails = (state, action) => {
    console.log(action.payload)
    return {
        ...state,
        guarantorDetails: action.payload
    }
}
export const getApplicantDataHandlers = {
    [constants.SAVE_PERSONAL_DATA]: savePersonalData,
    [constants.SAVE_ADDRESS_DATA]: saveAddressData,
    [constants.SAVE_FINANCE_PRODUCT_DETAILS]: saveFinanceProductDetails,
    [constants.SAVE_CHEQUE_DETAILS]: saveChequeDetails,
    [constants.SAVE_GUARANTOR_DETAILS]: saveGuarantorDetails
};
