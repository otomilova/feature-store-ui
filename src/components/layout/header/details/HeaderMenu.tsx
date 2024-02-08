import { Box, Menu, MenuButton, MenuDivider, MenuItem, MenuList, useDisclosure } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import * as React from 'react'
import ProjectDrawer from './ProjectDrawer'
import { useLocation, useNavigate } from 'react-router-dom'
import { useProjects } from '../useProjects.js'
import Loader from '../../../ui/Loader' //const projects = ['Project 1', 'Project 2', 'Project 3']

//const projects = ['Project 1', 'Project 2', 'Project 3']

const HeaderMenu: React.FC = ({ project, setProject }) => {
	const { data: projects, isLoading } = useProjects()

	const { pathname } = useLocation()
	const { isOpen, onOpen, onClose } = useDisclosure()
	const navigate = useNavigate()
	return (
		<Box m={5}>
			{isLoading ? (
				<Loader />
			) : (
				<>
					<Menu autoSelect={true}>
						<MenuButton
							px={8}
							py={2}
							transition='all 0.2s'
							borderRadius='md'
							borderWidth='1px'
							_hover={{ bg: 'gray.400' }}
							_expanded={{ bg: 'blue.400' }}
							_focus={{ boxShadow: 'outline' }}
							fontSize={16}
						>
							{project} <ChevronDownIcon />
						</MenuButton>
						<MenuList>
							{projects.map(project => (
								<MenuItem
									fontSize={16}
									key={project}
									closeOnSelect={true}
									onClick={() => {
										setProject(`${project}`)
										if (pathname === '/' || pathname === 'feature-tables')
											navigate(`/feature-tables`)
										else navigate(`${pathname}`)
									}}
								>
									{project}
								</MenuItem>
							))}

							<MenuDivider />
							<MenuItem onClick={onOpen}>Create new project...</MenuItem>
						</MenuList>
					</Menu>
					<ProjectDrawer isOpen={isOpen} onClose={onClose} />
				</>
			)}
		</Box>
	)
}

export default HeaderMenu
