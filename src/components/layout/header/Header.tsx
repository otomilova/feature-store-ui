import HeaderMenu from './details/HeaderMenu'
import HeaderHeading from './details/HeaderHeading'
import * as React from 'react'
import { useContext, useEffect } from 'react'
import { Box } from '@chakra-ui/react'
import NavBar from './details/NavBar'
import { ProjectContext } from '../../../providers/ProjectProvider'

const Header: React.FC = ({ localData }) => {
	const { project, setProject } = useContext(ProjectContext)

	useEffect(() => {
		if (localData) setProject(localData)
		else setProject('Choose project')
	}, [])

	useEffect(() => {
		window.localStorage.setItem('MY_APP_STATE', project)
	}, [project])

	return (
		<Box
			m='0'
			boxShadow='lg'
			bg='white'
			h='100vh'
			width={{ md: '200px', lg: '220px', xl: '280px', '2xl': '330px' }}
			//width='330px'
			//position='fixed'
			//overflow='hidden'
			//TODO: fix header (when content enlarges header doesnt fit full page)
		>
			<HeaderHeading />
			<HeaderMenu project={project} setProject={setProject} />
			{project === 'Choose project' ? null : <NavBar />}
		</Box>
	)
}

export default Header
