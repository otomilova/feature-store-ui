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
	changeable,
	isMulti
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
		<Controller
			control={control}
			name={selectName}
			rules={{ required: `Please select ${selectName}` }}
			render={({
				field: { onChange, onBlur, value, name, ref },
				fieldState: { error }
			}) => (
				<FormControl mb='20px' isInvalid={!!error} id={selectName}>
					<FormLabel minW='200px'>
						<Heading fontSize='14px' color='brand.600'>
							{selectName}
						</Heading>
					</FormLabel>

					<Select
						isMulti={isMulti}
						isDisabled={changeable}
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
						// isMulti
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
