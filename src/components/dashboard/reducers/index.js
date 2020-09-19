import { createReducer } from "../../../core/reduxUtils";
import { getApplicantsHandlers } from "./getApplicants";

const initialState = {
  applicants: {},
  loanApplicants: {}
};

const handlers = {
  ...getApplicantsHandlers,
};

const dashboardReducer = createReducer(initialState, handlers);

export default dashboardReducer;
