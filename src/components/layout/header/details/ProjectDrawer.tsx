import {
	Box,
	Button,
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	FormLabel,
	Input,
	Stack,
	Textarea
} from '@chakra-ui/react'

interface ProjectDrawerProps {
	isOpen: boolean
	onClose: () => void
}

const ProjectDrawer: React.FC<ProjectDrawerProps> = ({ isOpen, onClose }) => {
	const firstField = React.useRef()
	return (
		<Drawer
			isOpen={isOpen}
			placement='left'
			initialFocusRef={firstField}
			onClose={onClose}
		>
			<DrawerOverlay />
			<DrawerContent>
				<DrawerCloseButton />
				<DrawerHeader borderBottomWidth='1px'>Create new project</DrawerHeader>

				<DrawerBody>
					<Stack spacing='24px'>
						<Box>
							<FormLabel htmlFor='username'>Name</FormLabel>
							<Input
								ref={firstField}
								id='username'
								placeholder='Please enter project name'
							/>
						</Box>

						<Box>
							<FormLabel htmlFor='desc'>Description</FormLabel>
							<Textarea id='desc' />
						</Box>
					</Stack>
				</DrawerBody>

				<DrawerFooter borderTopWidth='1px'>
					<Button variant='outline' mr={3} onClick={onClose}>
						Cancel
					</Button>
					<Button colorScheme='blue'>Submit</Button>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	)
}

export default ProjectDrawer
