import { getMemberDataHandler } from "./getMemberData";
import { createReducer } from "../../../core/reduxUtils";

const initialState = {
  personalData: {},
  address: {},
};

const handlers = {
  ...getMemberDataHandler,
};

const memberReducer = createReducer(initialState, handlers);

export default memberReducer;
