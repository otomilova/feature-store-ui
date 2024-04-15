import {
	Flex,
	Heading,
	Popover,
	PopoverTrigger,
	Tag,
	Text
} from '@chakra-ui/react'
import PopoverPortal from './PopoverPortal'

const PopoverComponent = ({ children, item }) => {
	return (
		<Popover>
			<PopoverTrigger>{children}</PopoverTrigger>
			<PopoverPortal item={item}>
				{item.type && (
					<>
						<Heading
							fontSize={{ md: '14px', lg: '14px', xl: '16px' }}
							color='brand.600'
							mb='0.1em'
						>
							Type
						</Heading>
						<Text
							fontSize={{ md: '16px', lg: '16px', xl: '18px' }}
							mb='0.2em'
							color='brand.600'
						>
							{item.type}
						</Text>
					</>
				)}
				{item.description && (
					<>
						<Heading
							fontSize={{ md: '14px', lg: '14px', xl: '16px' }}
							color='brand.600'
							mb='0.1em'
						>
							Description
						</Heading>
						<Text
							fontSize={{ md: '16px', lg: '16px', xl: '18px' }}
							mb='0.2em'
							color='brand.600'
						>
							{item.description}
						</Text>
					</>
				)}

				{item.options && (
					<>
						<Heading
							fontSize={{ md: '14px', lg: '14px', xl: '16px' }}
							color='brand.600'
							mb='0.1em'
						>
							Options
						</Heading>
						<Flex direction='column' m={0} mb='0.3em'>
							{item.options.map((option: { key: string; value: string }) => {
								return (
									<Flex direction='row' key={option.value} gap='0.5em' m={0}>
										<Text
											m={0}
											fontSize={{
												md: '16px',
												lg: '16px',
												xl: '18px'
											}}
											color='brand.600'
										>
											{option.key}
										</Text>
										:
										<Text
											overflow='auto'
											m={0}
											fontSize={{
												md: '16px',
												lg: '16px',
												xl: '18px'
											}}
											color='brand.600'
										>
											{option.value}
										</Text>
									</Flex>
								)
							})}
						</Flex>
					</>
				)}

				{item.alias && (
					<>
						<Heading
							fontSize={{ md: '14px', lg: '14px', xl: '16px' }}
							color='brand.600'
							mb='0.1em'
						>
							Alias
						</Heading>
						<Text
							fontSize={{ md: '16px', lg: '16px', xl: '18px' }}
							mb='0.2em'
							color='brand.600'
						>
							{item.alias}
						</Text>
					</>
				)}
				{item.partitionBy && (
					<>
						<Heading
							fontSize={{ md: '14px', lg: '14px', xl: '16px' }}
							color='brand.600'
							mb='0.1em'
						>
							Partition By
						</Heading>
						<Text
							fontSize={{ md: '16px', lg: '16px', xl: '18px' }}
							mb='0.2em'
							color='brand.600'
						>
							{item.partitionBy}
						</Text>
					</>
				)}

				{item.columns && (
					<>
						<Heading
							fontSize={{ md: '14px', lg: '14px', xl: '16px' }}
							color='brand.600'
							mb='0.1em'
						>
							Columns
						</Heading>
						<Text
							fontSize={{ md: '16px', lg: '16px', xl: '18px' }}
							mb='0.2em'
							color='brand.600'
						>
							{item.columns}
						</Text>
					</>
				)}

				{item.query && (
					<>
						<Heading
							fontSize={{ md: '14px', lg: '14px', xl: '16px' }}
							color='brand.600'
							mb='0.1em'
						>
							Query
						</Heading>
						<Text
							fontSize={{ md: '16px', lg: '16px', xl: '18px' }}
							mb='0.2em'
							color='brand.600'
						>
							{item.query}
						</Text>
					</>
				)}

				{item.mode && (
					<>
						<Heading
							fontSize={{ md: '14px', lg: '14px', xl: '16px' }}
							color='brand.600'
							mb='0.1em'
						>
							Mode
						</Heading>
						<Text
							fontSize={{ md: '16px', lg: '16px', xl: '18px' }}
							mb='0.2em'
							color='brand.600'
						>
							{item.mode}
						</Text>
					</>
				)}

				{item.input && (
					<>
						<Heading
							fontSize={{ md: '14px', lg: '14px', xl: '16px' }}
							color='brand.600'
							mb='0.1em'
						>
							Input
						</Heading>
						<Text
							fontSize={{ md: '16px', lg: '16px', xl: '18px' }}
							mb='0.2em'
							color='brand.600'
						>
							{item.input}
						</Text>
					</>
				)}

				{item.filter && (
					<>
						<Heading
							fontSize={{ md: '14px', lg: '14px', xl: '16px' }}
							color='brand.600'
							mb='0.1em'
						>
							Filter
						</Heading>
						<Text
							fontSize={{ md: '16px', lg: '16px', xl: '18px' }}
							mb='0.2em'
							color='brand.600'
						>
							{item.filter}
						</Text>
					</>
				)}

				{item.format && (
					<>
						<Heading
							fontSize={{ md: '14px', lg: '14px', xl: '16px' }}
							color='brand.600'
							mb='0.1em'
						>
							Format
						</Heading>
						<Text
							fontSize={{ md: '16px', lg: '16px', xl: '18px' }}
							mb='0.2em'
							color='brand.600'
						>
							{item.format}
						</Text>
					</>
				)}
				{item.labels && (
					<>
						<Heading
							fontSize={{ md: '14px', lg: '14px', xl: '16px' }}
							color='brand.600'
							mb='0.4em'
						>
							Labels
						</Heading>
						<Flex gap='0.5em'>
							{item.labels.map((label: { label: string; value: string }) => {
								return (
									<Tag colorScheme='twitter' size='md' key={label.value}>
										{label.value}
									</Tag>
								)
							})}
						</Flex>
					</>
				)}
			</PopoverPortal>
		</Popover>
	)
}

export default PopoverComponent
