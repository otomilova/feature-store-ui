import {
	FormControl,
	FormErrorMessage,
	FormLabel,
	Heading,
	HStack,
	Input,
	Text
} from '@chakra-ui/react'

const CustomInput = ({
	isRequired = false,
	inputName,
	inputId,
	changeable = true,
	errors,
	register,
	validation,
	placeholder = inputName,
	...rest
}) => {
	return (
		<FormControl isInvalid={!!errors && errors[inputId]} mb='1.2em'>
			<FormLabel htmlFor={inputId}>
				<HStack>
					<Heading
						fontSize={{ md: '14px', lg: '14px', xl: '16px' }}
						mb='0.3em'
						color='brand.600'
					>
						{inputName}
						{isRequired && (
							<Text textColor='red' as='sup' ml='0.2em' fontSize='12px'>
								*
							</Text>
						)}
					</Heading>
				</HStack>
			</FormLabel>
			<Input
				{...rest}
				size={{ md: 'md', lg: 'md', xl: 'lg' }}
				isDisabled={!changeable}
				minW='230px'
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
