import React from 'react'
import { Flex } from '@chakra-ui/react'

export function LabelsColumn() {
	return (
		<Flex
			mt='10px'
			fontFamily='Inter'
			w='10px'
			direction='row'
			wrap='wrap'
			gap='5px'
			onClick={() => {
				alert('Feature Table Overview')
			}}
		>
			{/*<Tag size='sm'>driver</Tag>*/}
			{/*<Tag size='sm'>driver_performance</Tag>*/}
		</Flex>
	)
}
