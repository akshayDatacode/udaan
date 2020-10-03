import { combineReducers } from "redux";
import dashboardReducer from "../components/dashboard/reducers";
import userReducer from "../components/user/reducers"

export default combineReducers({
  dashboard: dashboardReducer,
  user: userReducer, 
});
