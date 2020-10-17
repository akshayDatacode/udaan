import * as constants from "../constants";

const fetchMembersSuccess = (state, action) => ({
  ...state,
  Members: action.payload,
});

const fetchMembersFailure = (state, action) => ({
  ...state,
  errors: action.payload,
});

export const fetchMembersHandler = {
  [constants.FETCH_MEMBERS_DATA]: fetchMembersSuccess,
  [constants.FETCH_MEMBERS_DATA_ERROR]: fetchMembersFailure,
}
