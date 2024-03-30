import React from 'react'
import {
	FormControl,
	FormErrorMessage,
	FormLabel,
	Heading,
	HStack,
	Text
} from '@chakra-ui/react'
import { Select } from 'chakra-react-select'
import { Controller } from 'react-hook-form'

const CustomSelect = ({
	isRequired = false,
	control,
	options,
	selectName,
	selectId,
	changeable = true,
	isMulti
}) => {
	return (
		<Controller
			control={control}
			name={selectId}
			rules={{ required: `Please select ${selectId}` }}
			render={({
				field: { onChange, onBlur, value, name, ref },
				fieldState: { error }
			}) => (
				<FormControl mb='1.2em' isInvalid={!!error} id={selectId}>
					<FormLabel minW='200px' htmlFor={selectId}>
						<HStack>
							<Heading
								fontSize={{ md: '14px', lg: '14px', xl: '16px' }}
								mb='0.3em'
								color='brand.600'
							>
								{selectName}
								{isRequired && (
									<Text textColor='red' as='sup' ml='0.2em' fontSize='12px'>
										*
									</Text>
								)}
							</Heading>
						</HStack>
					</FormLabel>

					<Select
						size={{ md: 'md', lg: 'md', xl: 'lg' }}
						isMulti={isMulti}
						isDisabled={!changeable}
						chakraStyles={{
							dropdownIndicator: provided => ({
								...provided,
								bg: 'transparent',
								px: 2,
								cursor: 'inherit',
								color: 'gray'
							}),
							control: provided => ({
								...provided,
								bg: 'white'
							}),
							indicatorSeparator: provided => ({
								...provided,
								display: 'none'
							})
						}}
						name={name}
						ref={ref}
						onChange={onChange}
						onBlur={onBlur}
						value={value}
						options={options}
						placeholder={selectName}
						closeMenuOnSelect={true}
					/>

					<FormErrorMessage>{error && error.message}</FormErrorMessage>
				</FormControl>
			)}
		/>
	)
}

export default CustomSelect
