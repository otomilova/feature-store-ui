import React, { useCallback } from 'react'
import {
	Center,
	Heading,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalOverlay
} from '@chakra-ui/react'
import CreateFeatureFormModal from './CreateFeatureFormModal'
import CreateSourceFormModal from './CreateSourceFormModal'
import CreateTaskFormModal from './CreateTaskFormModal'
import CreateSinkFormModal from './CreateSinkFormModal'
import CreateStorageFormModal from './CreateStorageFormModal'

interface ModalProps {
	isOpen: boolean
	onClose: () => void
	id: string
	inputName: string
	items: string[]
	setItems: (items: string[]) => void
}

const ModalComponent: React.FC = ({
	inputName,
	isOpen,
	onClose,
	id,
	items,
	setItems
}: ModalProps) => {
	const finalRef = React.useRef(null)
	const initialRef = React.useRef(null)

	const makeModal = useCallback(
		({ inputName, items, setItems, id, onClose }) => {
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
				case 'Storage':
					return (
						<CreateStorageFormModal
							id={id}
							onClose={onClose}
							setStorage={setItems}
							storage={items}
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
		},
		[inputName, items, setItems, id, onClose]
	)

	return (
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
							Create{' '}
							{inputName.at(-1) === 's' ? inputName.slice(0, -1) : inputName}
						</Heading>
					</Center>
				</ModalHeader>
				<ModalCloseButton />
				<ModalBody pb={6}>
					{makeModal({ inputName, items, setItems, id, onClose })}
				</ModalBody>
			</ModalContent>
		</Modal>
	)
}

export default ModalComponent
