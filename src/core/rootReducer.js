import { combineReducers } from "redux";
import dashboardReducer from "../components/dashboard/reducers";

export default combineReducers({
  dashboard: dashboardReducer,
});
