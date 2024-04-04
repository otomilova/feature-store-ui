import { Heading } from '@chakra-ui/react'

const HeaderHeading = () => {
	return (
		<Heading
			as='h1'
			fontSize={{
				sm: '18px',
				md: '24px',
				lg: '28px',
				xl: '32px'
			}}
			color='gray'
			m={5}
		>
			Feature Mesh
		</Heading>
	)
}

export default HeaderHeading
