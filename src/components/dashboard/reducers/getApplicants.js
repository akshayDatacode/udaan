import * as constants from "../constants";

const getApplicantsSuccess = (state, action) => ({
  ...state,
  applicants: action.payload,
});

const getApplicantsFailure = (state, action) => ({
  ...state,
  errors: action.payload,
});

export const getApplicantsHandlers = {
  [constants.GET_APPLICANTS_SUCCESS]: getApplicantsSuccess,
  [constants.GET_APPLICANTS_FAILURE]: getApplicantsFailure,
};
