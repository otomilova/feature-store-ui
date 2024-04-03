import { useState } from 'react'
import { Button, Center, Flex } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import CustomSelect from '../../../ui/select/CustomSelect'
import MultiSelect from '../../../ui/select/MultiSelect'
import CustomInput from '../../../ui/input/CustomInput'
import CustomTextarea from '../../../ui/textarea/CustomTextarea'
import { IFeatureTableFormData, ValueTypes } from '../../../../types/types.d.ts'
import {
	DESCRIPTION,
	FEATURE_TITLES,
	LABELS,
	SELECT_TYPE_OPTIONS,
	TYPE
} from '../../../../utils/constants'
import { extractValueFromSelectObj } from '../../../../utils/helpers.ts'
import { INPUT_VALIDATION } from '../../../../utils/validation'

interface CreateFeatureFormProps {
	id: string
	onClose: () => void
	setFeatures: (
		features: Array<Pick<IFeatureTableFormData, 'features'>>
	) => void
	features: Array<Pick<IFeatureTableFormData, 'features'>>
}

const CreateFeatureForm = ({
	id,
	onClose,
	setFeatures,
	features
}: CreateFeatureFormProps) => {
	const {
		control,
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm({
		mode: 'onChange'
	})

	const onSubmit = data => {
		data.type = ValueTypes[extractValueFromSelectObj(data.type)]
		data.labels = labels
		setFeatures([...features, data])
		reset()
		onClose()
	}

	const [labels, setLabels] = useState([])
	const checkKeyDown = e => {
		if (e.key === 'Enter') e.preventDefault()
	}

	return (
		<form
			key={5}
			onSubmit={handleSubmit(onSubmit)}
			onKeyDown={e => checkKeyDown(e)}
			id={id}
		>
			<Flex gap='30px' direction='row' alignItems='end'>
				<Flex direction='column' width='100%'>
					<CustomInput
						isRequired
						inputName={FEATURE_TITLES.title}
						inputId={FEATURE_TITLES.id}
						errors={errors}
						register={register}
						validation={INPUT_VALIDATION}
					/>
				</Flex>
				<Flex direction='column'>
					<CustomSelect
						isRequired
						selectName={TYPE.title}
						selectId={TYPE.id}
						control={control}
						options={SELECT_TYPE_OPTIONS}
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
				selectName={LABELS.title}
				selectId={LABELS.id}
				setTags={setLabels}
				tags={labels}
			/>

			<Center mt='2em'>
				<Flex gap='15px'>
					<Button
						size={{ md: 'md', lg: 'md', xl: 'lg' }}
						onClick={onClose}
						colorScheme='blue'
						variant='outline'
					>
						Cancel
					</Button>
					<Button
						size={{ md: 'md', lg: 'md', xl: 'lg' }}
						form={id}
						type='button'
						colorScheme='button'
						onClick={() => {
							handleSubmit(onSubmit)()
						}}
					>
						Create Feature
					</Button>
				</Flex>
			</Center>
		</form>
	)
}

export default CreateFeatureForm
