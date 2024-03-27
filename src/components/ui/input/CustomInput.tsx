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
	validation,
	placeholder = inputName,
	...rest
}: CustomInputProps) => {
	return (
		<FormControl isInvalid={!!errors && errors[inputId]} mb='1.2em'>
			<FormLabel htmlFor={inputId}>
				<Heading
					fontSize={{ md: '14px', lg: '14px', xl: '16px' }}
					mb='0.3em'
					color='brand.600'
				>
					{inputName}
				</Heading>
			</FormLabel>
			<Input
				{...rest}
				size={{ md: 'md', lg: 'md', xl: 'lg' }}
				isDisabled={!changeable}
				minW='230px'
				//border='1px solid'
				borderColor='inherit'
				bgColor='white'
				id={inputId}
				placeholder={placeholder}
				{...register(inputId, changeable ? validation : {})}
			/>
			<FormErrorMessage>
				{!!errors && errors[inputId] && errors[inputId].message}
			</FormErrorMessage>
		</FormControl>
	)
}

export default CustomInput
