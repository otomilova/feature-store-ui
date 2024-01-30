import React from 'react'
import {
	FormControl,
	FormErrorMessage,
	FormLabel,
	Heading,
	Textarea
} from '@chakra-ui/react'

const CustomTextarea = ({ textareaName, changeable, errors, register, id }) => {
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
		<FormControl
			isInvalid={!!errors && errors[textareaName]}
			mb='20px'
			mt='15px'
		>
			<FormLabel htmlFor={textareaName}>
				<Heading fontSize='14px'>{textareaName}</Heading>
			</FormLabel>
			<Textarea
				bgColor='white'
				placeholder='Text to be filled in'
				{...register(textareaName, {
					//required: 'This is required',
					minLength: { value: 4, message: 'Minimum length should be 4' }
				})}
			></Textarea>
			<FormErrorMessage>
				{!!errors && errors[textareaName] && errors[textareaName].message}
			</FormErrorMessage>
		</FormControl>
	)
}

export default CustomTextarea
