import { useQuery } from '@tanstack/react-query'
import { getFeatureTableByName } from '../../../services/featureTables.service.js'

export const useFeatureTableByName = name => {
	return useQuery({
		queryKey: ['get feature table by name'],
		queryFn: () => getFeatureTableByName(name),
		select: ({ data }) => data
	})
}
