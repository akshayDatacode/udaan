import axios from "axios"
import { triggerNotifier } from "../../../services/notifier"

const api = `https://udaan-server-api.azurewebsites.net/api/`;

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

export const addLoanApplicants = (user) => (
	axios.post(`${api}loan/add_loan_application`, user)
		.then((data) => {
			console.log('applyForLoan status', user)
			if (data.status === 200) {
				console.log('applyForLoan status', data.status)
				triggerNotifier({ type: 'success', message: 'Calculated successfully !'})
			}
		})
		.catch((error) => {
			console.log(user)
			console.log('applyForLoan error', error)
		})
)
