import { useWatch } from 'react-hook-form'
import { IFeatureTablesResponseEntry } from '../../../../../types/types'
import { useFeatureTables } from '../../hooks/useFeatureTables'
import SpinnerLoader from '../../../../ui/SpinnerLoader'
import { Badge, Text, VStack } from '@chakra-ui/react'
import CustomSelect from '../../../../ui/select/CustomSelect'
import { FEATURE_TABLE_TITLES } from '../../../../../utils/constants'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export function FeatureTablesWatched({ control, setValue }) {
	const fromProject = useWatch({
		control,
		name: 'fromProject',
		defaultValue: ''
	})
	const {
		data: featureTables,
		isLoading: isLoadingFeatureTables
	}: {
		data: IFeatureTablesResponseEntry[]
		isLoading: boolean
	} = useFeatureTables(fromProject.value)

	const featureTablesOptions = featureTables?.map(ft => {
		return {
			label: ft.data.name,
			value: ft.data.name,
			data: JSON.parse(JSON.stringify(ft.data))
		}
	})

	useEffect(() => {
		setValue(FEATURE_TABLE_TITLES.id, '')
	}, [featureTables])

	return (
		<>
			{isLoadingFeatureTables && <SpinnerLoader />}
			<VStack w='100%'>
				<CustomSelect
					isRequired
					changeable={true}
					isMulti={false}
					control={control}
					options={featureTablesOptions}
					selectName={FEATURE_TABLE_TITLES.title}
					selectId={FEATURE_TABLE_TITLES.id}
				/>

				<Text mt='2em' fontSize='14px' color='brand.600' as='i'>
					<Badge colorScheme='twitter'>!</Badge> Feature Table will be copied
					with all of its contents.
				</Text>
				<Text fontSize='14px' color='brand.600' as='i'>
					Make sure all neccessary{' '}
					<Badge colorScheme='twitter'>
						{' '}
						<Link to='/entities' target='_blank'>
							entities
						</Link>
					</Badge>{' '}
					have been created in the target project.
				</Text>
			</VStack>
		</>
	)
}
