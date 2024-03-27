import React from 'react'
import { Flex, Tag } from '@chakra-ui/react'

export function LabelsColumn({ value }: string[]) {
	return (
		<Flex gap='5px' wrap='wrap' mt='10px' fontFamily='Inter' mb='10px'>
			{value?.map(label => {
				return (
					<Tag
						colorScheme='blue'
						size={{ md: 'sm', lg: 'md', xl: 'lg' }}
						key={label}
					>
						{label}
					</Tag>
				)
			})}
		</Flex>
	)
}
