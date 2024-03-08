import * as React from 'react'
import { useEffect, useState } from 'react'
import { Button, Center, Checkbox, Flex, HStack } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { SubmitHandler, useForm } from 'react-hook-form'
import CustomInput from '../../ui/input/CustomInput'
import CustomTextarea from '../../ui/textarea/CustomTextarea'
import CustomSelect from '../../ui/select/CustomSelect'
import FeaturesInput from './FeaturesInput'
import { useProject } from '../../hooks/useProject.js'
import {
	IApplyFeatureTableRequest,
	IFeatureTableFormData
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
import {
	INPUT_NUMBER_VALIDATION,
	INPUT_VALIDATION
} from '../../../utils/validation'

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

const ApplyFeatureTableForm = ({
	id,
	action,
	featureTableFormData
}: {
	id: string
	action: string
	featureTableFormData: IFeatureTableFormData | undefined
}) => {
	const isCreate = action === 'create'
	const {
		control,
		register,
		handleSubmit,
		formState: { errors },
		setValue
	} = useForm<IFeatureTableFormData>({
		mode: 'onChange'
	})

	const navigate = useNavigate()

	const { project } = useProject()

	const [features, setFeatures] = useState(
		featureTableFormData ? featureTableFormData.features : []
	)

	const [labels, setLabels] = useState(
		featureTableFormData ? featureTableFormData.labels : []
	)

	const { mutate, isPending } = useApplyFeatureTable()
	const onSubmit: SubmitHandler<IFeatureTableFormData> = (
		formData: IFeatureTableFormData
	) => {
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

	useEffect(() => {
		if (featureTableFormData) {
			setValue(FEATURE_TABLE_TITLES.id, featureTableFormData.featureTable)
			setValue(ENTITIES.id, featureTableFormData.entities)
			setValue(DESCRIPTION.id, featureTableFormData.description)
		}
	}, [])
	return (
		<>
			<form
				onSubmit={handleSubmit(onSubmit)}
				onKeyDown={e => checkKeyDown(e)}
				id={id}
				key={1}
			>
				<Flex direction='column' width='700px'>
					{isPending && <Loader rows={12} />}
					<HStack gap='15px'>
						<CustomInput
							changeable={isCreate}
							inputName={FEATURE_TABLE_TITLES.title}
							inputId={FEATURE_TABLE_TITLES.id}
							errors={errors}
							register={register}
							validation={INPUT_VALIDATION}
						/>
						<CustomInput
							changeable={true}
							inputName='TTL(minutes)'
							inputId='ttlMinutes'
							errors={errors}
							register={register}
							validation={INPUT_NUMBER_VALIDATION}
						/>
						<Checkbox
							isDisabled={!isCreate}
							colorScheme='button'
							{...register('multiRecord')}
						>
							MultiRecord
						</Checkbox>
					</HStack>
					<CustomSelect
						changeable={true}
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
							{isCreate ? 'Create Feature Table' : 'Apply Changes'}
						</Button>
					</Flex>
				</Center>
			</form>
		</>
	)
}

export default ApplyFeatureTableForm
