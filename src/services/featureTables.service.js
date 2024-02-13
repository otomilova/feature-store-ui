import { $axios } from './api.js'

//const USERS = '/users'

export const getFeatureTables = async project => {
	try {
		//return $axios.get(`/feature-tables`)
		return $axios.get(`/feature-tables/?project=${project}`)
	} catch (err) {
		console.error(err.toJSON())
	}
}

export const getFeatureTableByName = async name => {
	try {
		return $axios.get(`/feature-tables/${name}`)
	} catch (err) {
		console.error(err.toJSON())
	}
}
