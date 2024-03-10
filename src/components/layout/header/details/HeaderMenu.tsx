import { Box, Center, Flex, Menu, MenuButton, MenuDivider, MenuItem, MenuList, useDisclosure } from '@chakra-ui/react'
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
							px={2}
							py={2}
							width={{ md: '100px', lg: '120px', xl: '150px', '2xl': '180px' }}
							transition='all 0.2s'
							borderRadius='md'
							borderWidth='1px'
							_hover={{ bg: 'gray.400' }}
							_expanded={{ bg: 'blue.400' }}
							_focus={{ boxShadow: 'outline' }}
							fontSize={{ md: '12px', lg: '12px', xl: '16px', '2xl': '16px' }}
						>
							<Center>
								<Flex orientation='row' gap='8px'>
									{project}
									<Center>
										<ChevronDownIcon />
									</Center>
								</Flex>
							</Center>
						</MenuButton>
						<MenuList
							minWidth='80px'
							width={{ md: '100px', lg: '140px', xl: '180px', '2xl': '230px' }}
						>
							{projects.map(project => (
								<MenuItem
									fontSize={{
										md: '12px',
										lg: '12px',
										xl: '16px',
										'2xl': '16px'
									}}
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
							<MenuItem
								fontSize={{ md: '12px', lg: '12px', xl: '16px', '2xl': '16px' }}
								onClick={onOpen}
							>
								Create new project...
							</MenuItem>
						</MenuList>
					</Menu>
					<ProjectDrawer isOpen={isOpen} onClose={onClose} />
				</>
			)}
		</Box>
	)
}

export default HeaderMenu
