import { Center, Heading } from '@chakra-ui/react'
import * as React from 'react'
import { Navigate } from 'react-router-dom'
import { useProject } from '../../hooks/useProject'

const Home: React.FC = () => {
	const { project } = useProject()

	return (
		<Center width='100%' height='100%'>
			{project === 'Choose project' ? (
				<Center
					position='absolute'
					top='40%'
					left='52%'
					transform='translate(-50%, -50%)'
				>
					<Heading as='h4' color='brand.600' size='lg'>
						No data to display. Please choose project
					</Heading>
				</Center>
			) : (
				<Navigate to='/feature-tables' />
			)}
		</Center>
	)
}

export default Home
