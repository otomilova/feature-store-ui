import React from 'react'
import {
	FormControl,
	FormErrorMessage,
	FormLabel,
	Heading,
	Input
} from '@chakra-ui/react'

const CustomInput = ({ inputName, inputId, changeable, errors, register }) => {
	return (
		<FormControl isInvalid={!!errors && errors[inputId]} mb='20px'>
			<FormLabel htmlFor={inputId}>
				<Heading fontSize='14px' color='brand.600'>
					{inputName}
				</Heading>
			</FormLabel>
			<Input
				isDisabled={changeable}
				minW='290px'
				border='1px solid'
				borderColor='inherit'
				bgColor='white'
				id={inputId}
				placeholder={inputName}
				{...register(inputId, {
					required: 'This is required',
					minLength: { value: 4, message: 'Minimum length should be 4' }
				})}
			/>
			<FormErrorMessage>
				{!!errors && errors[inputId] && errors[inputId].message}
			</FormErrorMessage>
		</FormControl>
	)
}

export default CustomInput
