import { Box, Center, Heading } from '@chakra-ui/react'
import * as React from 'react'
import { useContext } from 'react'
import { ProjectContext } from '../../../providers/ProjectProvider'
import { Navigate } from 'react-router-dom'

const Home: React.FC = () => {
	const { project, setProject } = useContext(ProjectContext)
	return (
		<Box>
			{project === 'Choose project' ? (
				<Center mt={5}>
					<Heading as='h4' color='brand.600' size='lg'>
						No data to display. Please choose project
					</Heading>
				</Center>
			) : (
				<Navigate to='/feature-tables' />
			)}
		</Box>
	)
}

export default Home
