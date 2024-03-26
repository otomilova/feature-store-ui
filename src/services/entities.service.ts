import { $axios } from './api.js'
import { IApplyEntityRequest, IEntityResponseEntry } from '../types/types.d.ts'

export const getEntities = async (project: string) => {
	try {
		return $axios.get<IEntityResponseEntry[]>(`/entities/?project=${project}`)
	} catch (err) {
		console.error(err.toJSON())
	}
}

export const applyEntity = (request: IApplyEntityRequest) => {
	try {
		return $axios.post<void>(`/entities/apply`, request)
	} catch (err) {
		console.error(err.toJSON())
	}
}
