import React from 'react'
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
						<Heading fontSize='12px'>Type</Heading>
						<Text>{item.type}</Text>
					</>
				)}
				{item.description && (
					<>
						<Heading fontSize='12px'>Description</Heading>
						<Text>{item.description}</Text>
					</>
				)}

				{item.options && (
					<>
						<Heading fontSize='12px'>Options</Heading>
						<Flex direction='column' m={0} mb='0.3em'>
							{item.options.map(option => {
								return (
									<Flex direction='row' key={option.value} gap='0.5em' m={0}>
										<Text m={0}>{option.key}</Text>:<Text>{option.value}</Text>
									</Flex>
								)
							})}
						</Flex>
					</>
				)}

				{item.partitionBy && (
					<>
						<Heading fontSize='12px'>Partition By</Heading>
						<Text>{item.partitionBy}</Text>
					</>
				)}

				{item.columns && (
					<>
						<Heading fontSize='12px'>Columns</Heading>
						<Text>{item.columns}</Text>
					</>
				)}

				{item.query && (
					<>
						<Heading fontSize='12px'>Query</Heading>
						<Text>{item.query}</Text>
					</>
				)}

				{item.mode && (
					<>
						<Heading fontSize='12px'>Mode</Heading>
						<Text>{item.mode}</Text>
					</>
				)}

				{item.format && (
					<>
						<Heading fontSize='12px'>Format</Heading>
						<Text>{item.format}</Text>
					</>
				)}
				{item.labels && (
					<>
						<Heading fontSize='12px'>Labels</Heading>
						<Flex gap='0.5em'>
							{item.labels.map(label => {
								return (
									<Tag colorScheme='gray' size='sm' key={label.value}>
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
