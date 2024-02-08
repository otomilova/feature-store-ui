import { $axios } from './api.js'

//const USERS = '/users'

const getFeatureTables = async () => {
	try {
		console.log((await $axios.get(`/feature-tables`)).data)
		return $axios.get(`/feature-tables`)
	} catch (err) {
		console.error(err.toJSON())
	}
}

export default getFeatureTables
