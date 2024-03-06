import * as React from 'react'
import { useState } from 'react'
import { Button, Center, Flex } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import CustomInput from '../../ui/input/CustomInput'
import CustomTextarea from '../../ui/textarea/CustomTextarea'
import CustomSelect from '../../ui/select/CustomSelect'
import FeaturesInput from './FeaturesInput'
import { useProject } from '../../hooks/useProject.js'
import {
	IApplyFeatureTableRequest,
	IFeatureTableFormData,
	ValueTypes
} from '../../../types/types.d.ts'
import {
	DESCRIPTION,
	ENTITIES,
	FEATURE_TABLE_TITLES,
	FEATURES_TITLES,
	LABELS
} from '../../../utils/constants'
import { makeRequestFromFTFormData } from '../../../utils/adapters'
import { useApplyFeatureTable } from './useApplyFeatureTable'
import Loader from '../../ui/Loader'
import MultiSelect from '../../ui/select/MultiSelect'

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

const CreateFeatureTableForm = ({ id, defaultValue, action }) => {
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

	const { project } = useProject()

	const [features, setFeatures] = useState([
		{
			featureName: 'driver',
			type: ValueTypes.INT32,
			description: 'driver-desc',
			labels: [
				{
					value: 'driver_performance',
					label: 'driver_performance'
				}
			]
		}
	])

	const [labels, setLabels] = useState([
		{ value: 'conv_performance', label: 'conv_performance' },
		{ value: 'driver_performance', label: 'driver_performance' }
	])

	const { mutate, error, isLoading, data, isSuccess } = useApplyFeatureTable()
	const onSubmit = (formData: IFeatureTableFormData) => {
		formData.features = features
		formData.labels = labels
		const request: IApplyFeatureTableRequest = makeRequestFromFTFormData(
			formData,
			project
		)
		console.log(request)
		mutate(request)
	}

	const checkKeyDown = e => {
		if (e.key === 'Enter') e.preventDefault()
	}

	return (
		<>
			//TODO: fix Loader
			{isLoading && <Loader />}
			<form
				onSubmit={handleSubmit(onSubmit)}
				onKeyDown={e => checkKeyDown(e)}
				id={id}
				key={1}
			>
				<Flex direction='column' width='700px'>
					<CustomInput
						changeable={isEditable}
						inputName={FEATURE_TABLE_TITLES.title}
						inputId={FEATURE_TABLE_TITLES.id}
						errors={errors}
						register={register}
					/>

					<CustomSelect
						isMulti={true}
						control={control}
						options={entities}
						selectName={ENTITIES.title}
						selectId={ENTITIES.id}
						color='purple'
					/>
					<CustomTextarea
						textareaName={DESCRIPTION.title}
						textareaId={DESCRIPTION.id}
						errors={errors}
						register={register}
					/>

					<FeaturesInput
						register={register}
						control={control}
						features={features}
						setFeatures={setFeatures}
						inputName={FEATURES_TITLES.title}
						inputId={FEATURES_TITLES.id}
					/>

					<MultiSelect
						control={control}
						tags={labels}
						setTags={setLabels}
						selectName={LABELS.title}
						selectId={LABELS.id}
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
						<Button type='submit' colorScheme='button' onClick={() => {
						}}>
							{isEditable ? 'Apply Changes' : 'Create Feature Table'}
							{/*//delete changeable, use action*/}
						</Button>
					</Flex>
				</Center>
			</form>
		</>
	)
}

export default CreateFeatureTableForm
