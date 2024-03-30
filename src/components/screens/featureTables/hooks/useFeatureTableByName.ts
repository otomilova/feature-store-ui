import { useQuery } from '@tanstack/react-query'
import { getFeatureTableByName } from '../../../../services/featureTables.service.ts'
import { makeFTFormDataFromResponse } from '../../../../utils/adapters'

export const useFeatureTableByName = (name: string, project: string) => {
	return useQuery({
		queryKey: ['get feature table by name', name, project],
		queryFn: () => getFeatureTableByName(name, project),
		select: ({ data }) => makeFTFormDataFromResponse(data.featureTable),
		enabled: !!name && !!project && project !== 'Choose project'
	})
}
