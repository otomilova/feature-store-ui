import HeaderMenu from './details/HeaderMenu'
import HeaderHeading from './details/HeaderHeading'
import * as React from 'react'
import { useContext, useEffect } from 'react'
import { Box } from '@chakra-ui/react'
import NavBar from './details/NavBar'
import { ProjectContext } from '../../ProjectProvider'

const Header: React.FC = ({ data }) => {
	const { project, setProject } = useContext(ProjectContext)
	// const [project, setProject] = useState('')
	// useEffect(() => {
	// 	console.log('MY_APP_STATE', banner)
	// }, [banner])
	// const data = window.localStorage.getItem('MY_APP_STATE')

	useEffect(() => {
		if (data) setProject(data)
		else setProject('Choose project')
	}, [])
	useEffect(() => {
		window.localStorage.setItem('MY_APP_STATE', project)
	}, [project])
	// const theme1 = useContext(ThemeContext)
	// const useTheme = () => useContext(ThemeContext)
	// const { theme, setTheme } = useTheme()

	//const [projectName, setProjectName] = useState('Choose project')
	return (
		<Box m='0' boxShadow='lg' bg='white' height='100vh' width='330px'>
			<HeaderHeading />
			<HeaderMenu project={project} setProject={setProject} />
			{project === 'Choose project' ? null : <NavBar />}
			{/*<Button*/}
			{/*	onClick={() => {*/}
			{/*		setProject(project === 'true' ? 'false' : 'true')*/}
			{/*	}}*/}
			{/*>*/}
			{/*	{project}*/}
			{/*	{data}*/}
			{/*</Button>*/}
		</Box>
	)
}

export default Header
