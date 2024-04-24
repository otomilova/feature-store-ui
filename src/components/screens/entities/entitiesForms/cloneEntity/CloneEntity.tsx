import { useProjects } from '../../../../layout/header/useProjects'
import { useProject } from '../../../../hooks/useProject'
import { useEffect, useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { IApplyEntityRequest } from '../../../../../types/types'
import SpinnerLoader from '../../../../ui/SpinnerLoader'
import Nav from '../../../../ui/breadcrumb/Nav'
import { Button, Center, Flex, Heading, HStack } from '@chakra-ui/react'
import { FTIcon } from '../../../../ui/icons/FTIcon'
import CustomSelect from '../../../../ui/select/CustomSelect'
import CustomInput from '../../../../ui/input/CustomInput'
import { INPUT_VALIDATION } from '../../../../../utils/validation'
import TransitionContainer from '../../../../ui/TransitionContainer'
import { useNavigate } from 'react-router-dom'
import { useApplyEntity } from '../../hooks/useApplyEntity'
import { EntitiesWatched } from './EntitiesWatched'

const CloneEntity = () => {
	const navigate = useNavigate()
	const { data: projects, isLoading } = useProjects()
	const { project: currentProject } = useProject()

	const crumbs = useMemo(() => {
		return [
			{
				name: 'ENTITIES',
				link: '/entities'
			},
			{
				name: 'CLONE ENTITY',
				link: '#',
				isActive: true
			}
		]
	}, [])

	const {
		control,
		register,
		handleSubmit,
		formState: { errors },
		setValue
	} = useForm({
		mode: 'onChange'
	})

	const projectsOptions = useMemo(() => {
		return projects
			?.filter(pr => pr !== currentProject)
			.map(pr => {
				return {
					label: pr,
					value: pr
				}
			})
	}, [projects, currentProject])

	useEffect(() => {
		if (currentProject) {
			setValue('toProject', currentProject)
		}
	}, [currentProject])

	const checkKeyDown = e => {
		if (e.key === 'Enter') e.preventDefault()
	}

	const { mutate, isPending } = useApplyEntity()
	const onSubmit = formData => {
		const request: IApplyEntityRequest = {
			data: formData.entities.data,
			project: currentProject
		}
		mutate(request)
	}
	return (
		<TransitionContainer mt='1.5em' w='100%' h='85vh'>
			{isLoading || isPending ? (
				<SpinnerLoader />
			) : (
				<>
					<Nav crumbs={crumbs} />
					<Flex
						direction='column'
						justify='start'
						overflow={{ md: 'auto', lg: 'auto', xl: 'hidden' }}
						w='fit-content'
						bgColor='brand.300'
						m='55px'
						mt={{ md: '2em', lg: '3em', xl: '5em' }}
						h='auto'
						borderRadius='20px'
						boxShadow='md'
						pr={{ md: '35px', lg: '35px', xl: '65px' }}
						pl={{ md: '35px', lg: '35px', xl: '65px' }}
						pb={{ md: '35px', lg: '35px', xl: '65px' }}
						pt='25px'
					>
						<Center pt='10px'>
							<Flex direction='row' gap='12px' alignItems='center' mb='2em'>
								{FTIcon()}

								<Heading
									as='h2'
									fontSize={{ md: '20px', lg: '22px', xl: '24px' }}
									color='brand.600'
								>
									Clone Entity
								</Heading>
							</Flex>
						</Center>
						<Flex gap='30px' direction='row'>
							<form
								onSubmit={handleSubmit(onSubmit)}
								onKeyDown={e => checkKeyDown(e)}
								id='cloneEntityForm'
							>
								<Flex direction='column' justifyContent='space-between'>
									<Flex direction='column' width='700px'>
										<HStack gap='15px'>
											<CustomSelect
												isRequired
												changeable={true}
												isMulti={false}
												control={control}
												options={projectsOptions}
												selectName='From Project'
												selectId='fromProject'
											/>
											<CustomInput
												isRequired
												changeable={false}
												inputName='To Project'
												inputId='toProject'
												errors={errors}
												register={register}
												validation={INPUT_VALIDATION}
											/>
										</HStack>
										<HStack gap='15px'>
											<EntitiesWatched control={control} setValue={setValue} />
										</HStack>
									</Flex>

									<Center mt='10em'>
										<Flex gap='15px'>
											<Button
												size={{ md: 'md', lg: 'md', xl: 'lg' }}
												form='cloneEntityForm'
												colorScheme='blue'
												variant='outline'
												onClick={() => {
													navigate('/entities')
												}}
											>
												Cancel
											</Button>
											<Button
												isLoading={isPending}
												size={{ md: 'md', lg: 'md', xl: 'lg' }}
												type='submit'
												colorScheme='button'
											>
												Clone Entity
											</Button>
										</Flex>
									</Center>
								</Flex>
							</form>
						</Flex>
					</Flex>
				</>
			)}
		</TransitionContainer>
	)
}

export default CloneEntity
