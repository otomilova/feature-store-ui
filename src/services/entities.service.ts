import { $axios } from './api.js'
import { IEntityResponseEntry } from '../types/types.d.ts'

export const getEntities = async (project: string) => {
	try {
		return $axios.get<IEntityResponseEntry[]>(`/entities/?project=${project}`)
	} catch (err) {
		console.error(err.toJSON())
	}
}
