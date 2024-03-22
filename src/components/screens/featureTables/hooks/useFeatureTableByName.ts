import { useQuery } from '@tanstack/react-query'
import { getFeatureTableByName } from '../../../../services/featureTables.service.ts'
import { makeFTFormDataFromResponse } from '../../../../utils/adapters'

export const useFeatureTableByName = (name: string) => {
	return useQuery({
		queryKey: ['get feature table by name', name],
		queryFn: () => getFeatureTableByName(name),
		select: ({ data }) => makeFTFormDataFromResponse(data),
		enabled: !!name
	})
}
