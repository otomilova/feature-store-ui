import { Button, Center, Flex } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import CustomTextarea from '../../../ui/textarea/CustomTextarea'
import { INPUT_VALIDATION_1 } from '../../../../utils/validation'
import OptionsInput from '../../../ui/input/OptionsInput'
import CustomInput from '../../../ui/input/CustomInput'
import { IFeatureTableFormData } from '../../../../types/types'
import { useEffect } from 'react'
import {
	ALIAS,
	COLUMNS,
	FILTER,
	FORMAT,
	OPTIONS
} from '../../../../utils/constants'

interface CreateSourceFormModalProps {
	id: string
	onClose: () => void
	sources: Array<Pick<IFeatureTableFormData, 'sources'>>
	setSources: (sources: Array<Pick<IFeatureTableFormData, 'sources'>>) => void
	action: 'create' | 'edit'
	item: object
}

const CreateSourceFormModal = ({
	id,
	onClose,
	setSources,
	sources,
	action,
	item
}: CreateSourceFormModalProps) => {
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
			alias: '',
			columns: '',
			format: '',
			filter: ''
		}
	})

	const onSubmit = data => {
		data.name = data.alias
		setSources([...sources.filter(source => source !== item), data])
		reset()
		onClose()
	}

	const checkKeyDown = e => {
		if (e.key === 'Enter') e.preventDefault()
	}

	useEffect(() => {
		if (item) {
			setValue(ALIAS.id, item.alias)
			setValue(COLUMNS.id, item.columns)
			setValue(FILTER.id, item.filter)
			setValue(FORMAT.id, item.format)
		}
	}, [])

	return (
		<form
			key={3}
			onSubmit={handleSubmit(onSubmit)}
			onKeyDown={e => checkKeyDown(e)}
			id={id}
		>
			<Flex gap='10px' direction='row' alignItems='end'>
				<OptionsInput
					item={item}
					control={control}
					inputName={OPTIONS.title}
					errors={errors}
					register={register}
				/>
			</Flex>

			<CustomInput
				isRequired
				control={control}
				inputName={ALIAS.title}
				inputId={ALIAS.id}
				errors={errors}
				register={register}
				validation={INPUT_VALIDATION_1}
			/>

			<CustomTextarea
				textareaName={COLUMNS.title}
				textareaId={COLUMNS.id}
				errors={errors}
				register={register}
				placeholder={'Comma separated columns to select from source'}
				validation={{}}
			/>

			<CustomInput
				control={control}
				inputName={FILTER.title}
				inputId={FILTER.id}
				errors={errors}
				register={register}
			/>

			<CustomInput
				isRequired
				control={control}
				inputName={FORMAT.title}
				inputId={FORMAT.id}
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
						{action === 'create' ? `Create Source` : `Edit Source`}
					</Button>
				</Flex>
			</Center>
		</form>
	)
}

export default CreateSourceFormModal
