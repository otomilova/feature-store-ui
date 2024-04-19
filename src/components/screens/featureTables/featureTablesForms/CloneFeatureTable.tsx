import React, { useEffect, useMemo } from 'react'
import Nav from '../../../ui/breadcrumb/Nav'
import TransitionContainer from '../../../ui/TransitionContainer'
import { Box, Button, Center, Flex, Heading, HStack } from '@chakra-ui/react'
import { FTIcon } from '../../../ui/icons/FTIcon'
import CustomSelect from '../../../ui/select/CustomSelect'
import { useForm, useWatch } from 'react-hook-form'
import { useProjects } from '../../../layout/header/useProjects'
import SpinnerLoader from '../../../ui/SpinnerLoader'
import { useProject } from '../../../hooks/useProject'
import { INPUT_VALIDATION } from '../../../../utils/validation'
import CustomInput from '../../../ui/input/CustomInput'
import {
	IApplyFeatureTableRequest,
	IFeatureTablesResponseEntry
} from '../../../../types/types'
import { useFeatureTables } from '../hooks/useFeatureTables'
import { FEATURE_TABLE_TITLES } from '../../../../utils/constants'
import { useApplyFeatureTable } from '../hooks/useApplyFeatureTable'
import { useNavigate } from 'react-router-dom'

const CloneFeatureTable = () => {
	const navigate = useNavigate()
	const { data: projects, isLoading } = useProjects()
	const { project: currentProject } = useProject()

	const crumbs = useMemo(() => {
		return [
			{
				name: 'FEATURE TABLES',
				link: '/feature-tables'
			},
			{
				name: 'CLONE FEATURE TABLE',
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

	const projectsOptions = projects
		?.filter(pr => pr !== currentProject)
		.map(pr => {
			return {
				label: pr,
				value: pr
			}
		})

	useEffect(() => {
		if (currentProject) {
			setValue('toProject', currentProject)
		}
	}, [currentProject])

	function FeatureTablesWatched({ control }) {
		const fromProject = useWatch({
			control,
			name: 'fromProject',
			defaultValue: ''
		})
		const {
			data: featureTables,
			isLoading: isLoadingFeatureTables,
			isSuccess
		}: {
			data: IFeatureTablesResponseEntry[]
			isLoading: boolean
			isSuccess: boolean
		} = useFeatureTables(fromProject.value)

		const featureTablesOptions = featureTables?.map(ft => {
			return {
				label: ft.data.name,
				value: ft.data.name,
				data: JSON.parse(JSON.stringify(ft.data))
			}
		})
		return (
			<>
				{isLoadingFeatureTables && <SpinnerLoader />}
				{isSuccess && (
					<>
						<CustomSelect
							isRequired
							changeable={true}
							isMulti={false}
							control={control}
							options={featureTablesOptions}
							selectName={FEATURE_TABLE_TITLES.title}
							selectId={FEATURE_TABLE_TITLES.id}
						/>
					</>
				)}
			</>
		)
	}

	const checkKeyDown = e => {
		if (e.key === 'Enter') e.preventDefault()
	}

	const { mutate, isPending } = useApplyFeatureTable()
	const onSubmit = formData => {
		const request: IApplyFeatureTableRequest = {
			data: formData.featureTable.data,
			project: currentProject
		}
		console.log(request)
		mutate(request)
	}

	return (
		<TransitionContainer mt='1.5em' w='100%' h='85vh'>
			{isLoading || isPending ? (
				<SpinnerLoader />
			) : (
				<>
					<Nav crumbs={crumbs} />
					<Box
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
							<Flex direction='row' gap='12px' alignItems='center' mb='1.5em'>
								{FTIcon()}

								<Heading
									as='h2'
									fontSize={{ md: '20px', lg: '22px', xl: '24px' }}
									color='brand.600'
								>
									Clone Feature Table
								</Heading>
							</Flex>
						</Center>
						<Flex gap='30px' direction='row'>
							<form
								onSubmit={handleSubmit(onSubmit)}
								onKeyDown={e => checkKeyDown(e)}
								id='cloneFeatureTableForm'
							>
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
										<FeatureTablesWatched control={control} />
									</HStack>
								</Flex>
								<Center mt='2em'>
									<Flex gap='15px'>
										<Button
											size={{ md: 'md', lg: 'md', xl: 'lg' }}
											form='cloneFeatureTableForm'
											colorScheme='blue'
											variant='outline'
											onClick={() => {
												navigate('/feature-tables')
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
											Clone Feature Table
										</Button>
									</Flex>
								</Center>
							</form>
						</Flex>
					</Box>
				</>
			)}
		</TransitionContainer>
	)
}

export default CloneFeatureTable
