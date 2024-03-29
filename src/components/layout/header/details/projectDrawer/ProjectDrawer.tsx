import React from 'react'
import {
	Box,
	Button,
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	Heading,
	Stack
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { INPUT_VALIDATION } from '../../../../../utils/validation'
import CustomInput from '../../../../ui/input/CustomInput'
import { useCreateProject } from './useCreateProject'
import { useProject } from '../../../../hooks/useProject'

interface ProjectDrawerProps {
	isOpen: boolean
	onClose: () => void
}

const ProjectDrawer: React.FC<ProjectDrawerProps> = ({ isOpen, onClose }) => {
	const firstField = React.useRef()
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm({
		mode: 'onChange'
	})

	const { setProject } = useProject()

	const { mutateAsync, isPending } = useCreateProject()

	const onSubmit = formData => {
		mutateAsync(formData).then(() => {
			setProject(formData.name)
			onClose()
			reset()
		})
	}

	return (
		<Drawer
			size='md'
			isOpen={isOpen}
			placement='left'
			initialFocusRef={firstField}
			onClose={onClose}
		>
			<form
				onSubmit={handleSubmit(onSubmit)}
				id='projectForm'
				key='projectForm'
			>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton />
					<DrawerHeader borderBottomWidth='1px'>
						<Heading
							as='h2'
							size={{ md: 'md', lg: 'md', xl: 'lg' }}
							color='brand.600'
						>
							Create new project
						</Heading>
					</DrawerHeader>

					<DrawerBody>
						<Stack spacing='24px'>
							<Box>
								<CustomInput
									isRequired
									inputName='Name'
									inputId='name'
									errors={errors}
									register={register}
									validation={INPUT_VALIDATION}
									placeholder='Please enter project name'
								/>
							</Box>

							{/*<Box>*/}
							{/*	<CustomTextarea*/}
							{/*		textareaName={DESCRIPTION.title}*/}
							{/*		textareaId={DESCRIPTION.id}*/}
							{/*		errors={errors}*/}
							{/*		register={register}*/}
							{/*	/>*/}
							{/*</Box>*/}
						</Stack>
					</DrawerBody>

					<DrawerFooter borderTopWidth='1px'>
						<Button
							size={{ md: 'md', lg: 'md', xl: 'lg' }}
							variant='outline'
							mr={3}
							onClick={onClose}
							colorScheme='blue'
						>
							Cancel
						</Button>
						<Button
							isLoading={isPending}
							type='submit'
							colorScheme='button'
							size={{ md: 'md', lg: 'md', xl: 'lg' }}
						>
							Submit
						</Button>
					</DrawerFooter>
				</DrawerContent>
			</form>
		</Drawer>
	)
}

export default ProjectDrawer
