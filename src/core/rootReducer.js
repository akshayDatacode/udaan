import { combineReducers } from "redux";
import dashboardReducer from "../components/dashboard/reducers";
import userReducer from "../components/user/reducers"
import applicantReducer from "../components/applicant/reducers"
import memberReducer from "../components/members/reducers";

export default combineReducers({
  dashboard: dashboardReducer,
  user: userReducer, 
  applicant: applicantReducer,
  member: memberReducer,
});
