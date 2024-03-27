import { useQuery } from '@tanstack/react-query'
import { getProjects } from '../../../services/project.service.ts'

export const useProjects = () => {
	return useQuery({
		queryKey: ['get projects'],
		queryFn: () => getProjects(),
		select: ({ data }) => data.projects
	})
}
