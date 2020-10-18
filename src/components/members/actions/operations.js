import axios from "axios";
import * as actions from "./actionCreators";
const api = `https://udaan-server-api.azurewebsites.net/api/member/`;

export const addMember = (member) =>
  axios
    .post(`${api}add_member`, member)
    .then((data) => {
      console.log("Add Member status", member);
      if (data.status === 200) {
        console.log("Add Member status", data.status);
      }
    })
    .catch((error) => {
      console.log(member);
      console.log("Add Member error", error);
    });

export const fetchMembers = () => (dispatch) => {
  return axios
    .get(`${api}fetch_members`)
    .then(({ data }) => {
      dispatch(actions.setMembersData(data));
      console.log(data);
      return { success: true, data: data };
    })
    .catch((error) => {
      console.log("Fetch members error", error);
      dispatch(actions.setMembersError(error));
    });
};

export const getMemberProfile = (memberId) => {
  return axios
    .post(`${api}get_member`, { memberId })
    .then(({ data }) => {
      return { success: true, data };
    })
    .catch((error) => {
      console.log("get user profile error", error);
    });
};
