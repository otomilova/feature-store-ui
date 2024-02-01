import { Box } from '@chakra-ui/react'
import * as React from 'react'
import ProjectProvider from './ProjectProvider'
import Header from './layout/header/Header'
import { Outlet } from 'react-router-dom'

const App: React.FC = () => {
	// const { project, setProject } = useContext(ProjectContext)
	const data = window.localStorage.getItem('MY_APP_STATE')
	return (
		<ProjectProvider>
			<Box display='flex' gap='110px' bgColor='brand.200'>
				<Header data={data} />
				{/*{data === 'Choose project' ? (*/}
				{/*	<div>No data to display. Please choose project</div>*/}
				{/*) : (*/}
				{/*	<Navigate to='/feature-tables' />*/}
				{/*)}*/}
				<Outlet />
				{/*<Button*/}
				{/*	onClick={() => {*/}
				{/*		setTheme(theme === 'dark' ? 'light' : 'dark')*/}
				{/*	}}*/}
				{/*>*/}
				{/*	{theme}*/}
				{/*</Button>*/}
			</Box>
		</ProjectProvider>
	)
}

export default App

//
// type ContextType = {
// 	theme: string
// 	setTheme: (theme: string) => void
// }
// export const ThemeContext = createContext({
// 	theme: 'dark',
// 	setTheme: (theme: string) => {}
// })
//
// const Home: React.FC = () => {
// 	const [theme, setTheme] = useState<ContextType['theme']>('')
// 	return (
// 		<ThemeContext.Provider value={{ theme, setTheme }}>
// 			<Box display='flex' gap='30px'>
// 				<Header />
// 				<Outlet />
// 				{/*<Button*/}
// 				{/*	onClick={() => {*/}
// 				{/*		setTheme(theme === 'dark' ? 'light' : 'dark')*/}
// 				{/*	}}*/}
// 				{/*>*/}
// 				{/*	{theme}*/}
// 				{/*</Button>*/}
// 			</Box>
// 		</ThemeContext.Provider>
// 	)
// }
//
// export default Home
