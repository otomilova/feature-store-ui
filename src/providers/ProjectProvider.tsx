import { createContext, useState } from 'react'

export type ContextType = {
	project: string
	setProject: (project: string) => void
}
export const ProjectContext = createContext<ContextType>({
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
