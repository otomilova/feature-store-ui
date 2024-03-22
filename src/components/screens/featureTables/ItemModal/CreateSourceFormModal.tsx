import * as React from 'react'
import { Button, Center, Flex } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import CustomTextarea from '../../../ui/textarea/CustomTextarea'
import { INPUT_VALIDATION_1 } from '../../../../utils/validation'
import OptionsInput from '../../../ui/input/OptionsInput'
import CustomInput from '../../../ui/input/CustomInput'

const CreateSourceFormModal = ({ id, onClose, setSources, sources }) => {
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
			format: ''
		}
	})

	const onSubmit = data => {
		//console.table(data)
		// data.type = ValueTypes[extractValueFromSelectObj(data.type)]
		data.name = data.alias
		setSources([...sources, data])
		//console.table(sources)
		reset()
		onClose()
	}

	const navigate = useNavigate()
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
				validation={INPUT_VALIDATION_1}
			/>

			<CustomInput
				control={control}
				inputName='Format'
				inputId='format'
				errors={errors}
				register={register}
				validation={INPUT_VALIDATION_1}
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
						Create Source
					</Button>
				</Flex>
			</Center>
		</form>
	)
}

export default CreateSourceFormModal
