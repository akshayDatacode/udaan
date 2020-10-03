import { getUserDataHandlers } from "./getUserData";
import { createReducer } from "../../../core/reduxUtils";


const initialState = {
  currentUser: null,
  error: null
}

const handlers = {
  ...getUserDataHandlers,
}

const userReducer = createReducer(initialState, handlers);

export default userReducer;
