import React from 'react'
import {
	FormControl,
	FormErrorMessage,
	FormLabel,
	Heading
} from '@chakra-ui/react'
import { Select } from 'chakra-react-select'
import { Controller } from 'react-hook-form'

const CustomSelect = ({
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
				<FormControl mb='20px' isInvalid={!!error} id={selectId}>
					<FormLabel minW='200px'>
						<Heading fontSize='14px' color='brand.600'>
							{selectName}
						</Heading>
					</FormLabel>

					<Select
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
