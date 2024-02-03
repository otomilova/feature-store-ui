import * as React from 'react'
import { useState } from 'react'
import { Button, Center, Flex } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import MultiSelect from '../../ui/select/MultiSelect'
import CustomInput from '../../ui/input/CustomInput'
import CustomTextarea from '../../ui/textarea/CustomTextarea'
import CustomSelect from '../../ui/select/CustomSelect'
import FeaturesInput from './FeaturesInput'

const table = 'Feature Table'
const feature = 'Features'
const entitie = 'Entities'
const type = 'Type'
const labels = 'Labels'
const name = 'Feature Name'
const description = 'Description'

const labelOptions = [
	{ value: 'conv_performance', label: 'conv_performance' },
	{ value: 'driver_performance', label: 'driver_performance' }
]

const features = [
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

const entities = [
	{
		label: 'driver',
		value: 'driver'
	},
	{
		label: 'pilot',
		value: 'pilot'
	}
]

const CreateFeatureTableForm = ({ changeable, id, defaultValue, action }) => {
	const isEditable = action === 'edit'
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

	const navigate = useNavigate()

	const [tags, setTags] = useState([
		{
			'Feature Name': 'driver',
			Type: {
				label: 'INT',
				value: 'INT'
			},
			Description: 'driver-desc',
			'Feature Table': {
				label: 'driver_hourly_stats',
				value: 'driver_hourly_stats'
			},
			Labels: [
				{
					value: 'driver_performance',
					label: 'driver_performance'
				}
			]
		},
		{
			'Feature Name': 'driver-performance',
			Type: {
				label: 'INT',
				value: 'INT'
			},
			Description: 'driver-performance-desc',
			'Feature Table': {
				label: 'driver_hourly_stats',
				value: 'driver_hourly_stats'
			},
			Labels: [
				{
					value: 'driver_performance',
					label: 'driver_performance'
				}
			]
		}
	])

	const onSubmit = data => {
		data.features = tags
		alert(JSON.stringify(data, null, 2))
		console.log(data)
		//navigate('/features')
	}

	const checkKeyDown = e => {
		if (e.key === 'Enter') e.preventDefault()
	}

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			onKeyDown={e => checkKeyDown(e)}
			id={id}
			key={1}
		>
			<Flex direction='column' width='700px'>
				<CustomInput
					changeable={isEditable}
					inputName={table}
					errors={errors}
					register={register}
				/>

				<CustomSelect
					isMulti={true}
					control={control}
					options={entities}
					selectName={entitie}
					color='purple'
				/>
				<CustomTextarea
					textareaName={description}
					errors={errors}
					register={register}
				/>

				<FeaturesInput
					register={register}
					control={control}
					tags={tags}
					setTags={setTags}
				/>

				<MultiSelect
					control={control}
					options={labelOptions}
					selectName={labels}
					defaultValue={defaultValue}
				/>
			</Flex>

			<Center mt='30px'>
				<Flex gap='15px'>
					<Button
						form={id}
						colorScheme='blue'
						variant='outline'
						onClick={() => {
							navigate('/feature-tables')
						}}
					>
						Cancel
					</Button>
					<Button type='submit' colorScheme='button' onClick={() => {}}>
						{changeable ? 'Apply Changes' : 'Create Feature Table'}
					</Button>
				</Flex>
			</Center>
		</form>
	)
}

export default CreateFeatureTableForm
