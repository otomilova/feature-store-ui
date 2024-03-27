import React from 'react'
import {
	Heading,
	PopoverArrow,
	PopoverBody,
	PopoverCloseButton,
	PopoverContent,
	PopoverHeader,
	Portal
} from '@chakra-ui/react'

const PopoverPortal = ({ item, children }) => {
	return (
		<Portal>
			<PopoverContent _focus={{ boxShadow: 'md' }}>
				<PopoverArrow />
				<PopoverHeader borderColor='brand.500'>
					<Heading size='xs'>{item.name}</Heading>
				</PopoverHeader>
				<PopoverCloseButton />
				<PopoverBody>{children}</PopoverBody>
			</PopoverContent>
		</Portal>
	)
}

export default PopoverPortal
