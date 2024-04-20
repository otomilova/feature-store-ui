import { useMutation, useQueryClient } from '@tanstack/react-query'
import { applyFeatureTable } from '../../../../services/featureTables.service'
import { IApplyFeatureTableRequest } from '../../../../types/types'
import { useLocation, useNavigate } from 'react-router-dom'

import { useToast } from '@chakra-ui/react'
import { getBacklink } from '../../../../utils/helpers'

export const useApplyFeatureTable = () => {
	const toast = useToast()
	const navigate = useNavigate()
	const backlink = getBacklink(useLocation().pathname)
	const queryClient = useQueryClient()
	const { data, error, isPending, isSuccess, mutate } = useMutation({
		mutationFn: (request: IApplyFeatureTableRequest) =>
			applyFeatureTable(request),
		mutationKey: ['apply feature table'],
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['get feature tables'] })
			navigate(backlink)
			toast({
				position: 'top-right',
				title: 'Success!',
				status: 'success',
				duration: 4000,
				isClosable: true
			})
		},
		onError: e => {
			toast({
				position: 'top-right',
				title: 'Error!',
				description: e.response.data.error
					? e.response.data.error
					: e.response.data,
				status: 'error',
				duration: 6000,
				isClosable: true
			})
		}
	})
	return {
		data,
		isSuccess,
		mutate,
		isPending,
		error
	}
}
