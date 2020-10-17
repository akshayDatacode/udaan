import { setMemberDataHandler } from "./setMemberData";
import { createReducer } from "../../../core/reduxUtils";
import { fetchMembersHandler } from "./fetchMembersData"

const initialState = {
  personalData: {},
  address: {},
  members: {},
};

const handlers = {
  ...fetchMembersHandler,
  ...setMemberDataHandler,
};

const memberReducer = createReducer(initialState, handlers);

export default memberReducer;
