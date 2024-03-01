import * as React from 'react'
import { useState } from 'react'
import { Button, Center, Flex } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import CustomSelect from '../../ui/select/CustomSelect'
import MultiSelect from '../../ui/select/MultiSelect'
import CustomInput from '../../ui/input/CustomInput'
import CustomTextarea from '../../ui/textarea/CustomTextarea'
import { ValueTypes } from '../../../types/types.d.ts'
import {
	DESCRIPTION,
	FEATURE_TITLES,
	LABELS,
	TYPE
} from '../../../utils/constants'

const table = 'Feature Table'
const type = 'Type'
const labelsTitle = 'Labels'

const description = 'Description'

function extractValue(obj: Record<string, string>): string {
	return obj.value
}

const labelOptions = [
	{ value: 'conv_performance', label: 'conv_performance' },
	{ value: 'driver_performance', label: 'driver_performance' }
]

const featureTables = [
	{
		label: 'driver_hourly_stats_fresh',
		value: 'driver_hourly_stats_fresh'
	},
	{
		label: 'driver_hourly_stats',
		value: 'driver_hourly_stats'
	},
	{
		label: 'transformed_conv_rate',
		value: 'transformed_conv_rate'
	}
]

const keys = Object.keys(ValueTypes).map(type => {
	return { value: type, label: type }
})

const CreateFeatureForm = ({
	changeable,
	id,
	onClose,
	setFeatures,
	features
}) => {
	const {
		control,
		register,
		setValue,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm({
		mode: 'onChange'
	})

	const onSubmit = data => {
		//alert(JSON.stringify(data, null, 2))
		//console.log(JSON.stringify(data, null, 2))
		data.type = extractValue(data.type)
		setFeatures([...features, data])
		//navigate('/feature-table/create')
		reset()
		onClose()
	}

	const navigate = useNavigate()
	const [labels, setLabels] = useState([])
	const checkKeyDown = e => {
		if (e.key === 'Enter') e.preventDefault()
	}

	return (
		<form
			key={2}
			onSubmit={handleSubmit(onSubmit)}
			onKeyDown={e => checkKeyDown(e)}
			id={id}
		>
			<Flex gap='30px' direction='row' alignItems='end'>
				<Flex direction='column'>
					<CustomInput
						changeable={changeable}
						inputName={FEATURE_TITLES.title}
						inputId={FEATURE_TITLES.id}
						errors={errors}
						register={register}
					/>
				</Flex>
				<Flex direction='column'>
					<CustomSelect
						selectName={TYPE.title}
						selectId={TYPE.id}
						changeable={changeable}
						control={control}
						options={keys}
					/>
				</Flex>
			</Flex>
			<CustomTextarea
				textareaName={DESCRIPTION.title}
				textareaId={DESCRIPTION.id}
				errors={errors}
				register={register}
			/>

			<MultiSelect
				control={control}
				options={labelOptions}
				selectName={LABELS.title}
				selectId={LABELS.id}
				setTags={setLabels}
				tags={labels}
			/>

			<Center>
				<Flex gap='15px'>
					<Button
						onClick={onClose}
						colorScheme='blue'
						variant='outline'
						mt='60px'
						// onClick={() => {
						// 	navigate('/features')
						// }}
					>
						Cancel
					</Button>
					<Button
						form={id}
						type='button'
						colorScheme='button'
						mt='60px'
						onClick={() => {
							handleSubmit(onSubmit)()
						}}
					>
						{changeable ? 'Apply Changes' : 'Create Feature'}
					</Button>
				</Flex>
			</Center>
		</form>
	)
}

export default CreateFeatureForm
