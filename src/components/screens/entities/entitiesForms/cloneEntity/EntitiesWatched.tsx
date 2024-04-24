import { useWatch } from 'react-hook-form'
import { IEntityResponseEntry } from '../../../../../types/types'

import SpinnerLoader from '../../../../ui/SpinnerLoader'
import { Badge, Text, VStack } from '@chakra-ui/react'
import CustomSelect from '../../../../ui/select/CustomSelect'
import { ENTITIES } from '../../../../../utils/constants'
import { useEffect } from 'react'
import { useEntities } from '../../hooks/useEntities'

export function EntitiesWatched({ control, setValue }) {
	const fromProject = useWatch({
		control,
		name: 'fromProject',
		defaultValue: ''
	})
	const {
		data: entities,
		isLoading: isLoadingEntities
	}: {
		data: IEntityResponseEntry[]
		isLoading: boolean
	} = useEntities(fromProject.value)

	const entitiesOptions = entities?.map(entity => {
		return {
			label: entity.data.name,
			value: entity.data.name,
			data: JSON.parse(JSON.stringify(entity.data))
		}
	})

	useEffect(() => {
		setValue(ENTITIES.id, '')
	}, [entities])

	return (
		<>
			{isLoadingEntities && <SpinnerLoader />}
			<VStack w='100%'>
				<CustomSelect
					isRequired
					changeable={true}
					isMulti={false}
					control={control}
					options={entitiesOptions}
					selectName={ENTITIES.title}
					selectId={ENTITIES.id}
				/>

				<Text mt='2em' fontSize='14px' color='brand.600' as='i'>
					<Badge colorScheme='twitter'>!</Badge> Entity will be copied with all
					of its contents.
				</Text>
				<Text fontSize='14px' color='brand.600' as='i'>
					If it already exists in the target project, it will be updated.
				</Text>
			</VStack>
		</>
	)
}
