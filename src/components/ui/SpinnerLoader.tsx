import React from 'react'
import { Box, Spinner } from '@chakra-ui/react'

const SpinnerLoader = () => {
	return (
		<Box
			position='absolute'
			top='40%'
			left='52%'
			transform='translate(-50%, -50%)'
		>
			<Spinner
				thickness='4px'
				speed='0.65s'
				emptyColor='gray.200'
				color='brand.500'
				w='80px'
				h='80px'
			/>
		</Box>
	)
}

export default SpinnerLoader
