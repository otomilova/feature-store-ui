import { useQuery } from '@tanstack/react-query'
import getProjects from '../../../services/project.service.js'

export const useProjects = () => {
	return useQuery({
		queryKey: ['get projects'],
		queryFn: () => getProjects(),
		select: ({ data }) => data.projects
	})
}
