import { useQuery } from '@tanstack/react-query'
import getFeatureTables from '../../../services/featureTables.service.js'

export const useFeatureTables = () => {
	return useQuery({
		queryKey: ['get feature tables'],
		queryFn: () => getFeatureTables(),
		select: ({ data }) => data.featureTables
	})
}
