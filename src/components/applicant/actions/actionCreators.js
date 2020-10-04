import { SAVE_PERSONAL_DATA, SAVE_ADDRESS_DATA, SAVE_FINANCE_PRODUCT_DETAILS, SAVE_CHEQUE_DETAILS, SAVE_GUARANTOR_DETAILS } from '../constants'

export const savePersonalData = (data) => ({
    type: SAVE_PERSONAL_DATA,
    payload: data
})
export const saveAddressData = (data) => ({
    type: SAVE_ADDRESS_DATA,
    payload: data
})
export const saveFinanceProductDetails = (data) => ({
    type: SAVE_FINANCE_PRODUCT_DETAILS,
    payload: data
})
export const saveChequeDetails = (data) => ({
    type: SAVE_CHEQUE_DETAILS,
    payload: data
})
export const saveGuarantorDetails = (data) => ({
    type: SAVE_GUARANTOR_DETAILS,
    payload: data
})


