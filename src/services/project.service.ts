import { $axios } from './api.js'
import { IApplyProjectRequest } from '../types/types.js'

//const USERS = '/users'

export const getProjects = async () => {
	try {
		return $axios.get(`/projects`)
	} catch (err) {
		console.error(err.toJSON())
	}
}

export const applyProject = (request: IApplyProjectRequest) => {
	try {
		return $axios.post<void>(`/entities/apply`, request)
	} catch (err) {
		console.error(err.toJSON())
	}
}
