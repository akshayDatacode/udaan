import {
  SAVE_PERSONAL_DATA,
  SAVE_ADDRESS_DATA,
  FETCH_MEMBERS_DATA,
  FETCH_MEMBERS_DATA_ERROR,
} from "../constants";

export const savePersonalData = (data) => ({
  type: SAVE_PERSONAL_DATA,
  payload: data,
});
export const saveAddressData = (data) => ({
  type: SAVE_ADDRESS_DATA,
  payload: data,
});

export const setMembersData = (data) => ({
  type: FETCH_MEMBERS_DATA,
  payload: data,
});

export const setMembersError = (data) => ({
  type: FETCH_MEMBERS_DATA_ERROR,
  payload: data,
});