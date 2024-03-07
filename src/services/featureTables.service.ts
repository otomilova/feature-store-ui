import { $axios } from './api.js'
import { IApplyFeatureTableRequest, IFeatureTablesResponseEntry } from '../types/types.d.ts' //const USERS = '/users'

//const USERS = '/users'

export const getFeatureTables = async (project: string) => {
	try {
		//return $axios.get(`/feature-tables`)
		return $axios.get<IFeatureTablesResponseEntry[]>(
			`/feature-tables/?project=${project}`
		)
	} catch (err) {
		console.error(err.toJSON())
	}
}

export const getFeatureTableByName = async (name: string) => {
	try {
		return $axios.get<IFeatureTablesResponseEntry>(`/feature-tables/${name}`)
	} catch (err) {
		console.error(err.toJSON())
	}
}

export const applyFeatureTable = (request: IApplyFeatureTableRequest) => {
	try {
		return $axios.post(`/feature-tables/apply`, request)
	} catch (err) {
		console.error(err.toJSON())
	}
}
