import React from 'react'
import { Flex, Tag } from '@chakra-ui/react'

export function LabelsColumn({ value }) {
	return (
		<Flex gap='5px' wrap='wrap' mt='10px' fontFamily='Inter' mb='10px'>
			{/*{value?.join(' ,')}*/}
			{value?.map(label => {
				return (
					<Tag colorScheme='blue' size='sm' key={label}>
						{label}
					</Tag>
				)
			})}
		</Flex>
	)
}
