import { GET_APPLICANTS_SUCCESS, GET_APPLICANTS_FAILURE } from "../constants";

export const setApplicantsData = (data) => ({
  type: GET_APPLICANTS_SUCCESS,
  payload: data,
});

export const setApplicantsError = (error) => ({
  type: GET_APPLICANTS_FAILURE,
  payload: error,
});
