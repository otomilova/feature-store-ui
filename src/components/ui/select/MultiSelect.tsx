import React from 'react'
import { Box, FormControl, FormLabel, Heading } from '@chakra-ui/react'
import { CreatableSelect } from 'chakra-react-select'
import { Controller } from 'react-hook-form'

const MultiSelect = ({ control, options, selectName, color, defaultValue }) => {
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
			//rules={{ required: `Please select ${selectName}` }}
			render={({
				field: { onChange, onBlur, value, name, ref },
				fieldState: { error }
			}) => (
				<FormControl>
					<FormLabel>
						<Heading fontSize='14px' color='brand.600'>
							{selectName}
						</Heading>
					</FormLabel>
					<Box bg='white' borderRadius='0.375rem'>
						<CreatableSelect
							defaultValue={defaultValue}
							colorScheme={color}
							isMulti
							name={selectName}
							options={options}
							placeholder={`Select some ${selectName}`}
							closeMenuOnSelect={false}
							ref={ref}
							onChange={onChange}
							onBlur={onBlur}
						/>
					</Box>
				</FormControl>
			)}
		/>
	)
}

export default MultiSelect
