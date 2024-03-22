import * as React from 'react'
import { Button, Center, Flex } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import OptionsInput from '../../../ui/input/OptionsInput'
import { INPUT_VALIDATION_1 } from '../../../../utils/validation'
import CustomInput from '../../../ui/input/CustomInput'
import CustomTextarea from '../../../ui/textarea/CustomTextarea'

const CreateSinkForm = ({ id, onClose, setSinks, sinks }) => {
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
			input: '',
			partitionBy: '',
			columns: '',
			mode: '',
			format: ''
		}
	})

	const onSubmit = data => {
		//data.type = ValueTypes[extractValueFromSelectObj(data.type)]
		data.name = data.input
		setSinks([...sinks, data])
		//console.table(sinks)
		reset()
		onClose()
	}

	const navigate = useNavigate()
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
				validation={INPUT_VALIDATION_1}
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
						Create Sink
					</Button>
				</Flex>
			</Center>
		</form>
	)
}

export default CreateSinkForm
