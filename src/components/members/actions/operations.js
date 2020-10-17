import axios from "axios"

const api = `http://www.localhost:5000/api/member/`

export const addMember = (member) => (
	axios.post(`${api}add_member`, member)
		.then((data) => {
			console.log('Add Member status', member)
			if (data.status === 200) {
				console.log('Add Member status', data.status)
			}
		})
		.catch((error) => {
			console.log(member)
			console.log('Add Member error', error)
		})
)
