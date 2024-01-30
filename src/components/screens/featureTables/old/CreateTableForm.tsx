import { useForm } from 'react-hook-form'
import * as React from 'react'
import {
	Button,
	Center,
	Flex,
	FormControl,
	FormErrorMessage,
	FormLabel,
	Heading,
	Input,
	Textarea
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import FeaturesInput from './FeaturesInput'
import LabelsInput from './LabelsInput'

const CreateTableForm = () => {
	const {
		register,
		setValue,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm({
		mode: 'onChange'
	})

	const onSubmit = () => {
		alert('table created')
		navigate('/feature-tables')
	}
	const navigate = useNavigate()
	const checkKeyDown = e => {
		if (e.key === 'Enter') e.preventDefault()
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} onKeyDown={e => checkKeyDown(e)}>
			<Flex gap='30px' direction='row'>
				<Flex direction='column'>
					<FormControl isInvalid={errors?.name} mb='20px' mt='15px'>
						<FormLabel htmlFor='name'>
							<Heading fontSize='14px'>Name</Heading>
						</FormLabel>
						<Input
							w='400px'
							border='1px solid gray'
							bgColor='white'
							id='name'
							placeholder='Table Name'
							{...register('name', {
								required: 'This is required',
								minLength: { value: 4, message: 'Minimum length should be 4' }
							})}
						/>
						<FormErrorMessage>
							{errors?.name && errors?.name?.message}
						</FormErrorMessage>
					</FormControl>
				</Flex>
				<Flex direction='column'>
					<FormControl isInvalid={errors?.entity} mb='20px' mt='15px'>
						<FormLabel htmlFor='entity'>
							<Heading fontSize='14px'>Entity</Heading>
						</FormLabel>
						<Input
							w='400px'
							border='1px solid gray'
							bgColor='white'
							id='entity'
							placeholder='Entity'
							{...register('entity', {
								required: 'This is required',
								minLength: { value: 4, message: 'Minimum length should be 4' }
							})}
						/>
						<FormErrorMessage>
							{errors?.entity && errors?.entity?.message}
						</FormErrorMessage>
					</FormControl>
				</Flex>
			</Flex>
			<FormControl isInvalid={errors?.description} mb='20px' mt='15px'>
				<FormLabel htmlFor='description'>
					<Heading fontSize='14px'>Description</Heading>
				</FormLabel>
				<Textarea
					bgColor='white'
					placeholder='Text to be filled in'
					{...register('description', {
						required: 'This is required',
						minLength: { value: 4, message: 'Minimum length should be 4' }
					})}
				></Textarea>
				<FormErrorMessage>
					{errors?.description && errors?.description?.message}
				</FormErrorMessage>
			</FormControl>

			<FeaturesInput register={register} />
			<LabelsInput register={register} />

			<Center>
				<Flex gap='15px'>
					<Button
						colorScheme='blue'
						variant='outline'
						mt='60px'
						onClick={() => {
							navigate('/feature-tables')
						}}
					>
						Cancel
					</Button>
					<Button type='submit' colorScheme='blue' mt='60px' onClick={() => {}}>
						Create Feature Table
					</Button>
				</Flex>
			</Center>
		</form>
	)
}

export default CreateTableForm
