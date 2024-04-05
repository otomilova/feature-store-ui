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
			<PopoverContent
				_focus={{ boxShadow: 'md' }}
				w='fit-content'
				h='fit-content'
				minW='300px'
				maxW='450px'
				maxH='300px'
				overflow='auto'
			>
				<PopoverArrow />
				<PopoverHeader borderColor='brand.500'>
					<Heading
						fontSize={{ md: '16px', lg: '16px', xl: '18px' }}
						color='brand.600'
					>
						{item.name}
					</Heading>
				</PopoverHeader>
				<PopoverCloseButton />
				<PopoverBody>{children}</PopoverBody>
			</PopoverContent>
		</Portal>
	)
}

export default PopoverPortal
