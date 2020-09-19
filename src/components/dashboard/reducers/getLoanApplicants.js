import * as constants from "../constants";

const getLoanApplicantsSuccess = (state, action) => ({
  ...state,
  loanApplicants: action.payload,
});

const getLoanApplicantsFailure = (state, action) => ({
  ...state,
  errors: action.payload,
});

export const getLoanApplicantsHandlers = {
  [constants.GET_LOAN_APPLICANTS_SUCCESS]: getLoanApplicantsSuccess,
  [constants.GET_APPLICANTS_FAILURE]: getLoanApplicantsFailure,
};
