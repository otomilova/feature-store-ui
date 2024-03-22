import * as React from 'react'
import { Button, Center, Flex } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import CustomInput from '../../../ui/input/CustomInput'
import CustomTextarea from '../../../ui/textarea/CustomTextarea'
import { INPUT_VALIDATION_1 } from '../../../../utils/validation'

const CreateTaskForm = ({ id, onClose, setTasks, tasks }) => {
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
		console.table(data)
		//data.type = ValueTypes[extractValueFromSelectObj(data.type)]
		data.name = data.alias
		setTasks([...tasks, data])
		//console.table(tasks)

		reset()
		onClose()
	}

	const navigate = useNavigate()

	const checkKeyDown = e => {
		if (e.key === 'Enter') e.preventDefault()
	}

	return (
		<form
			key={4}
			onSubmit={handleSubmit(onSubmit)}
			onKeyDown={e => checkKeyDown(e)}
			id={id}
		>
			<Flex direction='column'>
				<CustomTextarea
					textareaName='Query'
					textareaId='query'
					errors={errors}
					register={register}
					placeholder={'Type SQL query'}
					validation={INPUT_VALIDATION_1}
				/>
				<CustomInput
					control={control}
					inputName='Alias'
					inputId='alias'
					errors={errors}
					register={register}
					validation={INPUT_VALIDATION_1}
				/>
			</Flex>

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
						Create Task
					</Button>
				</Flex>
			</Center>
		</form>
	)
}

export default CreateTaskForm
