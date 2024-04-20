import { Button, Center, Flex } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import CustomTextarea from '../../../ui/textarea/CustomTextarea'
import { INPUT_VALIDATION_1 } from '../../../../utils/validation'
import OptionsInput from '../../../ui/input/OptionsInput'
import CustomInput from '../../../ui/input/CustomInput'
import { IFeatureTableFormData } from '../../../../types/types'

interface CreateSourceFormModalProps {
	id: string
	onClose: () => void
	sources: Array<Pick<IFeatureTableFormData, 'sources'>>
	setSources: (sources: Array<Pick<IFeatureTableFormData, 'sources'>>) => void
}

const CreateSourceFormModal = ({
	id,
	onClose,
	setSources,
	sources
}: CreateSourceFormModalProps) => {
	const {
		control,
		register,
		handleSubmit,
		formState: { errors },
		reset
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
		setSources([...sources, data])
		reset()
		onClose()
	}

	const checkKeyDown = e => {
		if (e.key === 'Enter') e.preventDefault()
	}

	return (
		<form
			key={3}
			onSubmit={handleSubmit(onSubmit)}
			onKeyDown={e => checkKeyDown(e)}
			id={id}
		>
			<Flex gap='10px' direction='row' alignItems='end'>
				<OptionsInput
					control={control}
					inputName='Options'
					errors={errors}
					register={register}
				/>
			</Flex>

			<CustomInput
				isRequired
				control={control}
				inputName='Alias'
				inputId='alias'
				errors={errors}
				register={register}
				validation={INPUT_VALIDATION_1}
			/>

			<CustomTextarea
				textareaName='Columns'
				textareaId='columns'
				errors={errors}
				register={register}
				placeholder={'Comma separated columns to select from source'}
				validation={{}}
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
						Create Source
					</Button>
				</Flex>
			</Center>
		</form>
	)
}

export default CreateSourceFormModal
