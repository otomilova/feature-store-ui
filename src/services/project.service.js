import { $axios } from './api.js'
import MockAdapter from 'axios-mock-adapter'

//const USERS = '/users'

const mock = new MockAdapter($axios)
mock.onGet(`/projects`).reply(200, {
	projects: ['taxi', 'taxi_stage', 'taxi_dev']
})

const getProjects = async () => {
	try {
		return $axios.get(`/projects`)
	} catch (err) {
		console.error(err.toJSON())
	}
}

export default getProjects
