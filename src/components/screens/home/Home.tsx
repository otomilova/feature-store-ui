import { Center, Heading } from '@chakra-ui/react'
import * as React from 'react'
import { Navigate } from 'react-router-dom'
import { useProject } from '../../hooks/useProject'

const Home: React.FC = () => {
	const { project } = useProject()

	return (
		<Center>
			{project === 'Choose project' ? (
				<Center>
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
