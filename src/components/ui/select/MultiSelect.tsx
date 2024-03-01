import React from 'react'
import { Box, FormControl, FormLabel, Heading } from '@chakra-ui/react'
import { CreatableSelect } from 'chakra-react-select'
import { Controller } from 'react-hook-form'

const MultiSelect = ({
	control,
	selectName,
	selectId,
	color,
	defaultValue,
	setTags,
	tags
}) => {
	return (
		<Controller
			control={control}
			name={selectId}
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
							defaultValue={tags}
							colorScheme={color}
							isMulti
							name={selectId}
							//options={labels}
							placeholder={`Select some ${selectName}`}
							closeMenuOnSelect={false}
							ref={ref}
							onChange={choice => setTags(choice)}
							onBlur={onBlur}
						/>
					</Box>
				</FormControl>
			)}
		/>
	)
}

export default MultiSelect
