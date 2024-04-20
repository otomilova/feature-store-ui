import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useLocation, useNavigate } from 'react-router-dom'

import { useToast } from '@chakra-ui/react'
import { getBacklink } from '../../../../utils/helpers'
import { IApplyEntityRequest } from '../../../../types/types'
import { applyEntity } from '../../../../services/entities.service'

export const useApplyEntity = () => {
	const toast = useToast()
	const navigate = useNavigate()
	const backlink = getBacklink(useLocation().pathname)
	const queryClient = useQueryClient()
	const { data, error, isPending, isSuccess, mutate } = useMutation({
		mutationFn: (request: IApplyEntityRequest) => applyEntity(request),
		mutationKey: ['apply entity'],
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['get entities'] })
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
				duration: 4000,
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
