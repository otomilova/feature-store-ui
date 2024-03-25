import { createContext, useState } from 'react'

// export const ThemeContext = createContext('light')
type ContextType = {
	project: string
	setProject: (project: string) => void
}
export const ProjectContext = createContext({
	project: 'Choose project',
	setProject: (project: string) => {}
})

const ProjectProvider: React.FC = ({ children }) => {
	const [project, setProject] =
		useState<ContextType['project']>('Choose project')

	return (
		<ProjectContext.Provider value={{ project, setProject }}>
			{children}
		</ProjectContext.Provider>
	)
}

export default ProjectProvider
