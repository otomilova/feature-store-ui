import React from 'react'
import {
	FormControl,
	FormErrorMessage,
	FormLabel,
	Heading,
	Input
} from '@chakra-ui/react'

const CustomInput = ({ inputName, changeable, errors, register }) => {
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
		<FormControl isInvalid={!!errors && errors[inputName]} mb='20px'>
			<FormLabel htmlFor={inputName}>
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
				id={inputName}
				placeholder={inputName}
				{...register(inputName, {
					required: 'This is required',
					minLength: { value: 4, message: 'Minimum length should be 4' }
				})}
			/>
			<FormErrorMessage>
				{!!errors && errors[inputName] && errors[inputName].message}
			</FormErrorMessage>
		</FormControl>
	)
}

export default CustomInput
