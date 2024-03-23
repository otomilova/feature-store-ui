import { Box } from '@chakra-ui/react'
import * as React from 'react'
import ProjectProvider from '../providers/ProjectProvider'
import Header from './layout/header/Header'
import { Outlet } from 'react-router-dom'

const App: React.FC = () => {
	const localData = window.localStorage.getItem('MY_APP_STATE')
	return (
		<ProjectProvider>
			<Box
				display='flex'
				gap={{ sm: '5em', md: '8em', lg: '10em', xl: '15em' }}
				bgColor='brand.200'
			>
				<Header localData={localData} />
				<Outlet />
			</Box>
		</ProjectProvider>
	)
}

export default App
