import React from 'react'
import {
	FormControl,
	FormErrorMessage,
	FormLabel,
	Heading,
	Input
} from '@chakra-ui/react'

const CustomInput = ({
	inputName,
	inputId,
	changeable = true,
	errors,
	register,
	validation
}) => {
	return (
		<FormControl isInvalid={!!errors && errors[inputId]} mb='20px'>
			<FormLabel htmlFor={inputId}>
				<Heading fontSize='14px' color='brand.600'>
					{inputName}
				</Heading>
			</FormLabel>
			<Input
				isDisabled={!changeable}
				minW='230px'
				//minW='290px'
				border='1px solid'
				borderColor='inherit'
				bgColor='white'
				id={inputId}
				placeholder={inputName}
				{...register(inputId, changeable ? validation : {})}
			/>
			<FormErrorMessage>
				{!!errors && errors[inputId] && errors[inputId].message}
			</FormErrorMessage>
		</FormControl>
	)
}

export default CustomInput
