import axios from "axios"
import * as actions from './actionCreators'
const api = `http://www.localhost:5000/api/`;

export const loginUser = (user) => dispatch => {
	return axios.post(`${api}user/login`, user)
		.then((res) => {
			if (res.status === 200) {
				dispatch(actions.setLoginUser(res.data))
				return { success: true }
			} else {
				return { success: false }
			}
		})
		.catch((error) => {
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

