import { useMutation, useQueryClient } from '@tanstack/react-query'

import { useToast } from '@chakra-ui/react'

import { createProject } from '../../../../../services/project.service'
import { ICreateProjectRequest } from '../../../../../types/types.d.ts'

export const useCreateProject = () => {
	const toast = useToast()

	const queryClient = useQueryClient()
	const { data, error, isPending, isSuccess, mutateAsync } = useMutation({
		mutationFn: (request: ICreateProjectRequest) => createProject(request),
		mutationKey: ['create project'],
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
		mutateAsync,
		isPending,
		error
	}
}
