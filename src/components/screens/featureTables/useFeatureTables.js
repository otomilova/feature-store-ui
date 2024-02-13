import { useQuery } from '@tanstack/react-query'
import { getFeatureTables } from '../../../services/featureTables.service.js'

export const useFeatureTables = project => {
	return useQuery({
		queryKey: ['get feature tables'],
		queryFn: () => getFeatureTables(project),
		select: ({ data }) => data.featureTables
	})
}
