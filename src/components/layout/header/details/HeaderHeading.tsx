import React from 'react'
import { Heading } from '@chakra-ui/react'

const HeaderHeading: React.FC = () => {
	return (
		<Heading
			as='h1'
			fontSize={{ md: '18px', lg: '18px', xl: '24px', '2xl': '28px' }}
			color='gray'
			m={5}
		>
			Feature Mesh
		</Heading>
	)
}

export default HeaderHeading
