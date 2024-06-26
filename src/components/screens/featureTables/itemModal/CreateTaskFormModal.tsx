import { Button, Center, Flex } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import CustomInput from '../../../ui/input/CustomInput'
import CustomTextarea from '../../../ui/textarea/CustomTextarea'
import { INPUT_VALIDATION_1 } from '../../../../utils/validation'
import { IFeatureTableFormData } from '../../../../types/types'
import { useEffect } from 'react'
import { ALIAS, QUERY } from '../../../../utils/constants'

interface CreateTaskFormProps {
	id: string
	onClose: () => void
	setTasks: (tasks: Array<Pick<IFeatureTableFormData, 'tasks'>>) => void
	tasks: Array<Pick<IFeatureTableFormData, 'tasks'>>
	action: 'create' | 'edit'
	item: object
}

const CreateTaskForm = ({
	id,
	onClose,
	setTasks,
	tasks,
	action,
	item
}: CreateTaskFormProps) => {
	const {
		control,
		register,
		handleSubmit,
		formState: { errors },
		reset,
		setValue
	} = useForm({
		mode: 'onChange'
	})

	const onSubmit = data => {
		data.name = data.alias
		setTasks([...tasks.filter(task => task !== item), data])

		reset()
		onClose()
	}

	const checkKeyDown = e => {
		if (e.key === 'Enter') e.preventDefault()
	}

	useEffect(() => {
		if (item) {
			setValue(QUERY.id, item.query)
			setValue(ALIAS.id, item.alias)
		}
	}, [])

	return (
		<form
			key={4}
			onSubmit={handleSubmit(onSubmit)}
			onKeyDown={e => checkKeyDown(e)}
			id={id}
		>
			<Flex direction='column'>
				<CustomTextarea
					isRequired
					textareaName='Query'
					textareaId='query'
					errors={errors}
					register={register}
					placeholder={'Type SQL query'}
					validation={INPUT_VALIDATION_1}
				/>
				<CustomInput
					isRequired
					control={control}
					inputName='Alias'
					inputId='alias'
					errors={errors}
					register={register}
					validation={INPUT_VALIDATION_1}
				/>
			</Flex>

			<Center mt='1em'>
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
						{action === 'create' ? `Create Task` : `Edit Task`}
					</Button>
				</Flex>
			</Center>
		</form>
	)
}

export default CreateTaskForm
