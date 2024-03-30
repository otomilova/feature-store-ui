import { $axios } from './api.js'
import { ICreateProjectRequest } from '../types/types.js'

//const USERS = '/users'

export const getProjects = async () => {
	try {
		return $axios.get(`/projects`)
	} catch (err) {
		console.error(err.toJSON())
	}
}

export const createProject = (request: ICreateProjectRequest) => {
	try {
		return $axios.post<void>(`/projects/create`, request)
	} catch (err) {
		console.error(err.toJSON())
	}
}
