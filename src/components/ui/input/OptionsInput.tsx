import { Center, Flex, Heading, IconButton, Input } from '@chakra-ui/react'
import { useFieldArray } from 'react-hook-form'
import { AddIcon, DeleteIcon } from '@chakra-ui/icons'

const OptionsInput = ({ register, control }) => {
	const { fields, append, remove } = useFieldArray({
		control,
		name: 'options'
	})
	return (
		<Flex align='start' m='0' mb='1em' direction='column' w='100%'>
			<Heading
				fontSize={{ md: '14px', lg: '14px', xl: '16px' }}
				mb='0.6em'
				color='brand.600'
			>
				Options
			</Heading>
			{fields.map((field, index) => (
				<Flex
					w='100%'
					key={field.id}
					direction='row'
					m='0'
					gap='10px'
					mb='0.5em'
					alignItems='stretch'
				>
					<Input
						w='190px'
						border='1px solid'
						borderColor='inherit'
						bgColor='white'
						placeholder='Type key'
						{...register(`options.${index}.key`)}
					/>
					<Center>:</Center>
					<Input
						border='1px solid'
						borderColor='inherit'
						bgColor='white'
						placeholder='Type value'
						{...register(`options.${index}.value`)}
					/>
					{fields.length > 1 && (
						<IconButton
							onClick={() => remove(index)}
							icon={<DeleteIcon />}
							aria-label='Remove'
						/>
					)}
					{index === fields.length - 1 ? (
						<IconButton
							onClick={() => append({ key: '', value: '' })}
							aria-label='Add Item'
							icon={<AddIcon />}
						/>
					) : (
						<IconButton
							visibility='hidden'
							aria-label='Add Item'
							icon={<AddIcon />}
						/>
					)}
				</Flex>
			))}
		</Flex>
	)
}

export default OptionsInput
