import { $axios } from './api.js'

//const USERS = '/users'

const getProjects = async () => {
	try {
		return $axios.get(`/projects`)
	} catch (err) {
		console.error(err.toJSON())
	}
}

export default getProjects
