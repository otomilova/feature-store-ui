import { useQuery } from '@tanstack/react-query'
import { getEntities } from '../../../../services/entities.service'

export const useEntities = (project: string) => {
	return useQuery({
		queryKey: ['get entities', project],
		queryFn: () => getEntities(project),
		select: ({ data }) => data.entities,
		enabled: project !== 'Choose project'
	})
}
