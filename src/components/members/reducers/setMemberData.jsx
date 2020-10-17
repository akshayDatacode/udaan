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

export const setMemberDataHandler = {
    [constants.SAVE_PERSONAL_DATA]: savePersonalData,
    [constants.SAVE_ADDRESS_DATA]: saveAddressData,
};
