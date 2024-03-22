import { useQuery } from '@tanstack/react-query'
import { getFeatureTables } from '../../../../services/featureTables.service.ts'

export const useFeatureTables = (project: string) => {
	return useQuery({
		queryKey: ['get feature tables'],
		queryFn: () => getFeatureTables(project),
		select: ({ data }) => data.featureTables
	})
}
