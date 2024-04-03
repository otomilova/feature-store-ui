import { useQuery } from '@tanstack/react-query'
import { getFeatureTables } from '../../../../services/featureTables.service.ts'

export const useFeatures = (project: string) => {
	return useQuery({
		queryKey: ['get features', project],
		queryFn: () => getFeatureTables(project),
		select: ({ data }) =>
			data.featureTables
				?.map(featureTable => {
					featureTable.data.features.forEach(feature => {
						feature['featureTableName'] = featureTable.data.name
					})
					return featureTable.data.features
				})
				.reduce((acc, features) => {
					return [...acc, ...features]
				}, []),
		enabled: project !== 'Choose project'
	})
}
