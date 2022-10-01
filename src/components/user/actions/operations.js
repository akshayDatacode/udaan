import axios from "axios"
import { GET_USER_AUTH_LOADING } from "../constants";
import * as actions from './actionCreators'
const api = `https://udaan-server-api.azurewebsites.net/api/`;

export const loginUser = (user) => dispatch => {
	dispatch({ type: GET_USER_AUTH_LOADING })
	return axios.post(`${api}user/login`, user)
		.then((res) => {
			if (res.status === 200) {
				dispatch(actions.setLoginUser(res.data))
				dispatch({ type: GET_USER_AUTH_LOADING })
				return { success: true }
			} else {
				return { success: false }
			}
		})
		.catch((error) => {
			dispatch({ type: GET_USER_AUTH_LOADING })
			dispatch(actions.setLoginUserError(error))
			console.log('Login error', error)
		})
}

export const signupUser = (user) => dispatch => {
	return axios.post(`${api}user/signup`, user)
		.then((res) => {
			if (res.status === 200) {
				dispatch(actions.setSignupUser(res.data))
				return { success: true }
			}
		})
		.catch((error) => {
			dispatch(actions.setSignupUserError(error))
			console.log('Signup error', error)
		})
}

