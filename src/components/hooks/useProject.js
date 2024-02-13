import { useContext } from 'react'
import { ProjectContext } from '../ProjectProvider.tsx'

export const useProject = () => useContext(ProjectContext)
