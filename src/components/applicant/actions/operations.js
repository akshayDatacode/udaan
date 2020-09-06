import axios from "axios"
import { triggerNotifier } from "../../../services/notifier"

const api = `http://www.localhost:5000/api/`;

export const saveApplicant = (user) => dispatch => (
	axios.post(`${api}add_applicant`, user)
		.then((data) => {
			console.log('saveApplicant status', user)
			if (data.status === 200) {
				console.log('saveApplicant status', data.status)
				triggerNotifier({ type: 'success', message: 'Calculated successfully !'})
			}
		})
		.catch((error) => {
			console.log(user)
			console.log('saveApplicant error', error)
		})
)
