import HeaderMenu from './details/HeaderMenu'
import HeaderHeading from './details/HeaderHeading'
import * as React from 'react'
import { useContext, useLayoutEffect } from 'react'
import { Box } from '@chakra-ui/react'
import NavBar from './details/NavBar'
import { ProjectContext } from '../../../providers/ProjectProvider'

interface HeaderProps {
	localData?: string
}

const Header: React.FC = ({ localData }: HeaderProps) => {
	const { project, setProject } = useContext(ProjectContext)

	useLayoutEffect(() => {
		if (localData) setProject(localData)
		else setProject('Choose project')
	}, [])

	useLayoutEffect(() => {
		window.localStorage.setItem('MY_APP_STATE', project)
	}, [project])

	return (
		<Box
			m='0'
			boxShadow='lg'
			bg='white'
			h='100vh'
			width={{
				sm: '220px',
				md: '280px',
				lg: '330px',
				xl: '360px'
			}}
		>
			<HeaderHeading />
			<HeaderMenu project={project} setProject={setProject} />
			{project === 'Choose project' ? null : <NavBar />}
		</Box>
	)
}

export default Header
