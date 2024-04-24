import { Button, Center, Flex } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import OptionsInput from '../../../ui/input/OptionsInput'
import { INPUT_VALIDATION_1 } from '../../../../utils/validation'
import CustomInput from '../../../ui/input/CustomInput'
import CustomTextarea from '../../../ui/textarea/CustomTextarea'
import { IFeatureTableFormData } from '../../../../types/types'
import { useEffect } from 'react'
import {
	COLUMNS,
	FILTER,
	FORMAT,
	INPUT,
	MODE,
	PARTITION_BY
} from '../../../../utils/constants'

interface CreateSinkFormProps {
	id: string
	onClose: () => void
	setSinks: (sinks: Array<Pick<IFeatureTableFormData, 'sinks'>>) => void
	sinks: Array<Pick<IFeatureTableFormData, 'sinks'>>
	action: 'create' | 'edit'
	item: object
}

const CreateSinkForm = ({
	id,
	onClose,
	setSinks,
	sinks,
	action,
	item
}: CreateSinkFormProps) => {
	const {
		control,
		register,
		handleSubmit,
		formState: { errors },
		reset,
		setValue
	} = useForm({
		mode: 'onChange',
		defaultValues: {
			options: [{ key: '', value: '' }],
			input: '',
			partitionBy: '',
			columns: '',
			mode: '',
			format: '',
			filter: ''
		}
	})

	const onSubmit = data => {
		data.name = data.format
		data.options = data.options.filter(
			option => option.key !== '' && option.value !== ''
		)
		setSinks([...sinks.filter(sink => sink !== item), data])
		reset()
		onClose()
	}

	const checkKeyDown = e => {
		if (e.key === 'Enter') e.preventDefault()
	}

	useEffect(() => {
		if (item) {
			setValue(INPUT.id, item.input)
			setValue(PARTITION_BY.id, item.partitionBy)
			setValue(MODE.id, item.mode)
			setValue(COLUMNS.id, item.columns)
			setValue(FILTER.id, item.filter)
			setValue(FORMAT.id, item.format)
		}
	}, [])

	return (
		<form
			key={2}
			onSubmit={handleSubmit(onSubmit)}
			onKeyDown={e => checkKeyDown(e)}
			id={id}
		>
			<Flex gap='10px' direction='row' alignItems='end'>
				<OptionsInput
					item={item}
					control={control}
					inputName='Options'
					errors={errors}
					register={register}
				/>
			</Flex>
			<CustomInput
				isRequired
				control={control}
				inputName='Input'
				inputId='input'
				errors={errors}
				register={register}
				validation={INPUT_VALIDATION_1}
			/>
			<CustomInput
				control={control}
				inputName='Partition By'
				inputId='partitionBy'
				errors={errors}
				register={register}
			/>
			<CustomTextarea
				textareaName='Columns'
				textareaId='columns'
				errors={errors}
				register={register}
				placeholder={'Comma separated columns to select from sink'}
			/>
			<CustomInput
				control={control}
				inputName='Mode'
				inputId='mode'
				errors={errors}
				register={register}
			/>
			<CustomInput
				control={control}
				inputName='Filter'
				inputId='filter'
				errors={errors}
				register={register}
			/>
			<CustomInput
				isRequired
				control={control}
				inputName='Format'
				inputId='format'
				errors={errors}
				register={register}
				validation={INPUT_VALIDATION_1}
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
						{action === 'create' ? `Create Sink` : `Edit Sink`}
					</Button>
				</Flex>
			</Center>
		</form>
	)
}

export default CreateSinkForm
