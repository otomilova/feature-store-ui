import React from 'react'
import { Box, FormControl, FormLabel, Heading } from '@chakra-ui/react'
import { CreatableSelect } from 'chakra-react-select'
import { Controller } from 'react-hook-form'

const MultiSelect = ({
	control,
	selectName,
	selectId,
	color,
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
						<Heading
							fontSize={{ md: '14px', lg: '14px', xl: '16px' }}
							mb='0.3em'
							color='brand.600'
						>
							{selectName}
						</Heading>
					</FormLabel>
					<Box bg='white' borderRadius='0.375rem'>
						<CreatableSelect
							size={{ md: 'md', lg: 'lg', xl: 'lg' }}
							defaultValue={tags}
							colorScheme={color}
							isMulti
							name={selectId}
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
