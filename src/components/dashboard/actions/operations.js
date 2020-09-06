import axios from "axios";

import * as actions from "./actionCreators";

const api = "http://www.localhost:5000/api/";

export const getapplicants = () => (dispatch) => {
  return axios
    .get(`${api}/get_applicants`)
    .then(({ data }) => {
      dispatch(actions.setApplicantsData(data));
      return { success: true, data };
    })
    .catch((error) => {
      console.log("get applicants error", error);
      dispatch(actions.setApplicantsError(error));
    });
};