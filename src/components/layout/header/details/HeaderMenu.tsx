import {
	Box,
	Center,
	Flex,
	Menu,
	MenuButton,
	MenuDivider,
	MenuItem,
	MenuList,
	useDisclosure
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import ProjectDrawer from './projectDrawer/ProjectDrawer'
import { useNavigate } from 'react-router-dom'
import { useProjects } from '../useProjects'
import Loader from '../../../ui/Loader'

interface HeaderMenuProps {
	project: string
	setProject: (project: string) => void
}

const HeaderMenu = ({ project, setProject }: HeaderMenuProps) => {
	const { data: projects, isLoading } = useProjects()
	const { isOpen, onOpen, onClose } = useDisclosure()
	const navigate = useNavigate()
	return (
		<Box m={5}>
			{isLoading ? (
				<Loader rows={1} />
			) : (
				<>
					<Menu autoSelect={true}>
						<MenuButton
							px={2}
							py={2}
							width={{
								sm: '120px',
								md: '150px',
								lg: '180px',
								xl: '200px'
							}}
							transition='all 0.2s'
							borderRadius='md'
							borderWidth='1px'
							_hover={{ bg: 'gray.400' }}
							_expanded={{ bg: 'blue.400' }}
							_focus={{ boxShadow: 'outline' }}
							fontSize={{
								sm: '12px',
								md: '16px',
								lg: '16px',
								xl: '18px'
							}}
						>
							<Center>
								<Flex
									orientation='row'
									gap='8px'
									textOverflow='ellipsis'
									overflow='hidden'
									whiteSpace='nowrap'
								>
									{project}

									<Center>
										<ChevronDownIcon />
									</Center>
								</Flex>
							</Center>
						</MenuButton>
						<MenuList
							minWidth='80px'
							width={{
								sm: '140px',
								md: '180px',
								lg: '230px',
								xl: '250px'
							}}
						>
							{projects?.map(project => (
								<MenuItem
									textOverflow='ellipsis'
									overflow='hidden'
									whiteSpace='nowrap'
									fontSize={{
										sm: '12px',
										md: '16px',
										lg: '16px',
										xl: '18px'
									}}
									key={project}
									closeOnSelect={true}
									onClick={() => {
										setProject(`${project}`)
										navigate(`/feature-tables`)
									}}
								>
									{project}
								</MenuItem>
							))}

							<MenuDivider />
							<MenuItem
								fontSize={{
									sm: '12px',
									md: '16px',
									lg: '16px',
									xl: '18px'
								}}
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
