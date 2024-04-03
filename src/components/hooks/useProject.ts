import { useContext } from 'react'
import {
	ContextType,
	ProjectContext
} from '../../providers/ProjectProvider.tsx'

export const useProject = () => useContext<ContextType>(ProjectContext)
