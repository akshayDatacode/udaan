import * as constants from "../constants";

const getLoginUser = (state, action) => {
  localStorage.setItem("userDetails", JSON.stringify(action.payload));
  localStorage.setItem("access_token", action.payload.token);
  return {
    ...state,
    error: null,
    currentUser: action.payload,
  }
}

const getLogoutUser = (state) => {
  localStorage.clear()
  return {
    ...state,
    currentUser: null,
  }
};

const getLoginUserFailure = (state, action) => ({
  ...state,
  error: action.payload,
});

const getSignupUser = (state, action) => {
  localStorage.setItem("userDetails", JSON.stringify(action.payload));
  localStorage.setItem("access_token", action.payload.token);
  return {
    ...state,
    error: null,
    currentUser: action.payload,
  }
}

const getSignupUserFailure = (state, action) => ({
  ...state,
  error: action.payload,
});

const getUserAuthLoading = (state) => ({
  ...state,
  userAuthLoading: !state.userAuthLoading
})

export const getUserDataHandlers = {
  [constants.GET_LOGIN_USER]: getLoginUser,
  [constants.GET_LOGIN_USER_ERROR]: getLoginUserFailure,
  [constants.GET_SIGNUP_USER]: getSignupUser,
  [constants.GET_SIGNUP_USER_ERROR]: getSignupUserFailure,
  [constants.GET_LOGOUT_USER]: getLogoutUser,
  [constants.GET_USER_AUTH_LOADING]: getUserAuthLoading,
};
