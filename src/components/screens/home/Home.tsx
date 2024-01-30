import { Box } from '@chakra-ui/react'
import * as React from 'react'
import { useContext } from 'react'
import { ProjectContext } from '../../ProjectProvider'
import { Navigate } from 'react-router-dom'

const Home: React.FC = () => {
	const { project, setProject } = useContext(ProjectContext)
	return (
		<Box>
			{project === 'Choose project' ? (
				<div>No data to display. Please choose project</div>
			) : (
				<Navigate to='/feature-tables' />
			)}

			{/*<Button*/}
			{/*	onClick={() => {*/}
			{/*		setTheme(theme === 'dark' ? 'light' : 'dark')*/}
			{/*	}}*/}
			{/*>*/}
			{/*	{theme}*/}
			{/*</Button>*/}
		</Box>
	)
}

export default Home
