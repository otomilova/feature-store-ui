import * as React from 'react'
import {
	Button,
	Center,
	Flex,
	FormControl,
	FormErrorMessage,
	FormLabel,
	Heading,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalOverlay,
	Tag,
	TagCloseButton,
	TagLabel,
	useDisclosure
} from '@chakra-ui/react'
import { FiPlus } from 'react-icons/fi'

import { Controller } from 'react-hook-form'
import CreateFeatureFormModal from './CreateFeatureFormModal.tsx'
import CreateSourceFormModal from './CreateSourceFormModal'
import CreateTaskFormModal from './CreateTaskFormModal'
import CreateSinkFormModal from './CreateSinkFormModal'

const ItemInput = ({ control, items, setItems, inputName, inputId, id }) => {
	const { isOpen, onOpen, onClose } = useDisclosure()
	const finalRef = React.useRef(null)
	const initialRef = React.useRef(null)

	function removeTag(index) {
		setItems(items.filter((el, i) => i !== index))
	}

	//console.log(items)

	return (
		<Controller
			control={control}
			name={inputId}
			render={() => (
				<FormControl mb='20px'>
					<FormLabel htmlFor={inputId}>
						<Heading fontSize='14px' color='brand.600'>
							{inputName}
						</Heading>
					</FormLabel>
					<Flex
						maxWidth='700px'
						border='1px solid'
						borderColor='inherit'
						borderRadius='0.375rem'
						justifySelf='start'
						p='10px'
						pl='15px'
						gap='5px'
						id='features'
						placeholder=''
						bgColor='white'
						wrap='wrap'
					>
						{items.map((item, index) => (
							<Tag
								size='md'
								bgColor='#EBF1FF'
								border='1px solid #70A0FF'
								color='#1963D3'
								key={index}
							>
								<TagLabel>{item.name}</TagLabel>
								<TagCloseButton onClick={() => removeTag(index)} />
							</Tag>
						))}
						<Button
							height='25px'
							bgColor='white'
							textColor='gray'
							variant='outline'
							fontSize='14px'
							leftIcon={<FiPlus />}
							onClick={onOpen}
						>
							Add {inputName.slice(0, -1)}
						</Button>
						<Modal
							size='xl'
							isCentered={true}
							blockScrollOnMount={true}
							closeOnOverlayClick={false}
							initialFocusRef={initialRef}
							finalFocusRef={finalRef}
							isOpen={isOpen}
							onClose={onClose}
						>
							<ModalOverlay />
							<ModalContent>
								<ModalHeader>
									<Center>
										<Heading as='h2' size='l' color='brand.600'>
											Create {inputName.slice(0, -1)}
										</Heading>
									</Center>
								</ModalHeader>
								<ModalCloseButton />
								<ModalBody pb={6}>
									{makeModal({ inputName, items, setItems, id, onClose })}
								</ModalBody>
							</ModalContent>
						</Modal>
					</Flex>

					<FormErrorMessage></FormErrorMessage>
				</FormControl>
			)}
		/>
	)
}

function makeModal({ inputName, items, setItems, id, onClose }) {
	switch (inputName) {
		case 'Features':
			return (
				<CreateFeatureFormModal
					id={id}
					onClose={onClose}
					setFeatures={setItems}
					features={items}
				/>
			)
		case 'Sources':
			return (
				<CreateSourceFormModal
					id={id}
					onClose={onClose}
					setSources={setItems}
					sources={items}
				/>
			)
		case 'Tasks':
			return (
				<CreateTaskFormModal
					id={id}
					onClose={onClose}
					setTasks={setItems}
					tasks={items}
				/>
			)
		case 'Sinks':
			return (
				<CreateSinkFormModal
					id={id}
					onClose={onClose}
					setSinks={setItems}
					sinks={items}
				/>
			)
		default:
			return null
	}
}

export default ItemInput
