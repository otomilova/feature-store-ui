import { useMutation, useQueryClient } from '@tanstack/react-query'
import { applyFeatureTable } from '../../../services/featureTables.service'
import { IApplyFeatureTableRequest } from '../../../types/types'
import { useLocation, useNavigate } from 'react-router-dom'

import { useToast } from '@chakra-ui/react'

export const useApplyFeatureTable = () => {
	const toast = useToast()
	const navigate = useNavigate()
	const location = useLocation().pathname
	const path = location.substring(0, location.lastIndexOf('/'))
	const queryClient = useQueryClient()
	const { data, error, isLoading, isSuccess, mutate } = useMutation({
		mutationFn: (request: IApplyFeatureTableRequest) =>
			applyFeatureTable(request),
		mutationKey: ['apply feature table'],
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['get feature tables'] })
			navigate(path)
			toast({
				position: 'top-right',
				title: 'Success!',
				//description: "You've applied Feature Table.",
				status: 'success',
				duration: 4000,
				isClosable: true
			})
		}
	})
	return {
		data,
		isSuccess,
		mutate,
		isLoading,
		error
	}
}
