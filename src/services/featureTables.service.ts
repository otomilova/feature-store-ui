import { $axios } from './api.js'
import {
	IApplyFeatureTableRequest,
	IFeatureTablesResponseEntry
} from '../types/types.d.ts'

export const getFeatureTables = async (project: string) => {
	try {
		return $axios.get<IFeatureTablesResponseEntry[]>(
			`/feature-tables/?project=${project}`
		)
	} catch (err) {
		console.error(err.toJSON())
	}
}

export const getFeatureTableByName = async (name: string, project: string) => {
	try {
		return $axios.get<IFeatureTablesResponseEntry>(
			`/feature-tables/${name}/?project=${project}`
		)
	} catch (err) {
		console.error(err.toJSON())
	}
}

export const applyFeatureTable = (request: IApplyFeatureTableRequest) => {
	try {
		return $axios.post<void>(`/feature-tables/apply`, request)
	} catch (err) {
		console.error(err.toJSON())
	}
}
