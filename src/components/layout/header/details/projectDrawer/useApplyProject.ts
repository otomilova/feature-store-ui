import { useMutation, useQueryClient } from '@tanstack/react-query'

import { useToast } from '@chakra-ui/react'

import { applyProject } from '../../../../../services/project.service'
import { IApplyProjectRequest } from '../../../../../types/types'

export const useApplyProject = () => {
	const toast = useToast()
	
	const queryClient = useQueryClient()
	const { data, error, isPending, isSuccess, mutate } = useMutation({
		mutationFn: (request: IApplyProjectRequest) => applyProject(request),
		mutationKey: ['apply project'],
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['get projects'] })

			toast({
				position: 'top-right',
				title: 'Success!',
				status: 'success',
				duration: 4000,
				isClosable: true
			})
		},
		onError: () => {
			toast({
				position: 'top-right',
				title: 'Error!',
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
