import { useContext } from 'react'
import { ProjectContext } from '../../providers/ProjectProvider.tsx'

export const useProject = () => useContext(ProjectContext)
