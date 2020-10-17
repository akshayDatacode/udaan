import {
  SAVE_PERSONAL_DATA,
  SAVE_ADDRESS_DATA,
} from "../constants";

export const savePersonalData = (data) => ({
  type: SAVE_PERSONAL_DATA,
  payload: data,
});
export const saveAddressData = (data) => ({
  type: SAVE_ADDRESS_DATA,
  payload: data,
});
