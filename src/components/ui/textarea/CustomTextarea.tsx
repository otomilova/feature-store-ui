import React from 'react'
import {
	FormControl,
	FormErrorMessage,
	FormLabel,
	Heading,
	Textarea
} from '@chakra-ui/react'

const CustomTextarea = ({
	textareaName,
	textareaId,
	errors,
	register,
	placeholder = 'Text to be filled in',
	validation
}) => {
	return (
		<FormControl isInvalid={!!errors && errors[textareaId]} mb='1.2em'>
			<FormLabel htmlFor={textareaId}>
				<Heading
					fontSize={{ md: '14px', lg: '14px', xl: '16px' }}
					mb='0.3em'
					color='brand.600'
				>
					{textareaName}
				</Heading>
			</FormLabel>
			<Textarea
				size={{ md: 'md', lg: 'md', xl: 'lg' }}
				bgColor='white'
				placeholder={placeholder}
				{...register(textareaId, validation ? validation : { minLength: 4 })}
			></Textarea>
			<FormErrorMessage>
				{!!errors && errors[textareaId] && errors[textareaId].message}
			</FormErrorMessage>
		</FormControl>
	)
}

export default CustomTextarea
