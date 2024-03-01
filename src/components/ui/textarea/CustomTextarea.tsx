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
	changeable,
	errors,
	register,
	id
}) => {
	//const { control, handleSubmit, reset } = useForm({ defaultValues })
	//
	// const [isLoading, setLoading] = useBoolean(false)
	//
	// const submit = async data => {
	// 	setLoading.on()
	// 	setTimeout(() => {
	// 		setLoading.off()
	// 		alert(JSON.stringify(data, null, 2))
	// 	}, 1200)
	// }
	return (
		<FormControl isInvalid={!!errors && errors[textareaId]} mb='20px'>
			<FormLabel htmlFor={textareaId}>
				<Heading fontSize='14px' color='brand.600'>
					{textareaName}
				</Heading>
			</FormLabel>
			<Textarea
				bgColor='white'
				placeholder='Text to be filled in'
				{...register(textareaId, {
					//required: 'This is required',
					minLength: { value: 4, message: 'Minimum length should be 4' }
				})}
			></Textarea>
			<FormErrorMessage>
				{!!errors && errors[textareaId] && errors[textareaId].message}
			</FormErrorMessage>
		</FormControl>
	)
}

export default CustomTextarea
