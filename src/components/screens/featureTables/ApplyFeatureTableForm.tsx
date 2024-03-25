import * as React from 'react'
import { useEffect, useState } from 'react'
import { Button, Center, Checkbox, Flex, HStack } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import CustomInput from '../../ui/input/CustomInput'
import CustomTextarea from '../../ui/textarea/CustomTextarea'
import CustomSelect from '../../ui/select/CustomSelect'
import { useProject } from '../../hooks/useProject.js'
import {
	IApplyFeatureTableRequest,
	IFeatureTableFormData
} from '../../../types/types.d.ts'
import {
	DESCRIPTION,
	ENTITIES,
	FEATURE_TABLE_TITLES,
	FEATURE_TITLES,
	FEATURES_TITLES,
	LABELS,
	SINKS,
	SOURCES,
	TASKS
} from '../../../utils/constants'
import { makeRequestFromFTFormData } from '../../../utils/adapters'
import { useApplyFeatureTable } from './hooks/useApplyFeatureTable'
import Loader from '../../ui/Loader'
import MultiSelect from '../../ui/select/MultiSelect'
import {
	INPUT_NUMBER_VALIDATION,
	INPUT_VALIDATION
} from '../../../utils/validation'
import ItemInput from '../../ui/input/ItemInput'

const ApplyFeatureTableForm = ({
	id,
	action,
	featureTableFormData,
	isLoading,
	backlink,
	entities
}: {
	isLoading: boolean
	id: string
	action: string
	featureTableFormData: IFeatureTableFormData | undefined
	backlink: string | undefined
	entities: string[]
}) => {
	const isCreate = action === 'create'
	const {
		control,
		register,
		handleSubmit,
		formState: { errors },
		setValue
	} = useForm({
		mode: 'onChange'
	})

	const entitiesOptions = entities?.map(entity => {
		return {
			label: entity['data'].name,
			value: entity['data'].name
		}
	})

	const navigate = useNavigate()

	const { project } = useProject()

	const [features, setFeatures] = useState(
		featureTableFormData ? featureTableFormData.features : []
	)

	const [sources, setSources] = useState(
		featureTableFormData ? featureTableFormData.sources : []
	)

	const [tasks, setTasks] = useState(
		featureTableFormData ? featureTableFormData.tasks : []
	)

	const [sinks, setSinks] = useState(
		featureTableFormData ? featureTableFormData.sinks : []
	)

	const [labels, setLabels] = useState(
		featureTableFormData ? featureTableFormData.labels : []
	)

	const { mutate, isPending } = useApplyFeatureTable()

	const onSubmit = (formData: IFeatureTableFormData) => {
		formData.features = features
		formData.labels = labels
		formData.sources = sources
		formData.tasks = tasks
		formData.sinks = sinks
		const request: IApplyFeatureTableRequest = makeRequestFromFTFormData(
			formData,
			project
		)
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
			setValue('ttlMinutes', featureTableFormData.ttlMinutes)
			setValue('multiRecord', featureTableFormData.multiRecord)
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
							size={{ md: 'md', lg: 'md', xl: 'lg' }}
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
						options={entitiesOptions}
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

					<ItemInput
						register={register}
						control={control}
						items={features}
						setItems={setFeatures}
						inputName={FEATURES_TITLES.title}
						inputId={FEATURES_TITLES.id}
						id={FEATURE_TITLES.modal_id}
					/>

					<ItemInput
						register={register}
						control={control}
						items={sources}
						setItems={setSources}
						inputName={SOURCES.title}
						inputId={SOURCES.id}
						id={SOURCES.modal_id}
					/>

					<ItemInput
						register={register}
						control={control}
						items={tasks}
						setItems={setTasks}
						inputName={TASKS.title}
						inputId={TASKS.id}
						id={TASKS.modal_id}
					/>

					<ItemInput
						register={register}
						control={control}
						items={sinks}
						setItems={setSinks}
						inputName={SINKS.title}
						inputId={SINKS.id}
						id={SINKS.modal_id}
					/>

					<MultiSelect
						control={control}
						tags={labels}
						setTags={setLabels}
						selectName={LABELS.title}
						selectId={LABELS.id}
					/>
				</Flex>

				<Center mt='2em'>
					<Flex gap='15px'>
						<Button
							size={{ md: 'md', lg: 'md', xl: 'lg' }}
							form={id}
							colorScheme='blue'
							variant='outline'
							onClick={() => {
								navigate(backlink)
							}}
						>
							Cancel
						</Button>
						<Button
							isLoading={isLoading}
							size={{ md: 'md', lg: 'md', xl: 'lg' }}
							type='submit'
							colorScheme='button'
							//onClick={() => {}}
						>
							{isCreate ? 'Create Feature Table' : 'Apply Changes'}
						</Button>
					</Flex>
				</Center>
			</form>
		</>
	)
}

export default ApplyFeatureTableForm
