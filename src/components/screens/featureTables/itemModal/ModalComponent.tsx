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
	action: 'create' | 'edit'
	item: object
}

const ModalComponent: React.FC = ({
	inputName,
	isOpen,
	onClose,
	id,
	items,
	setItems,
	action,
	item
}: ModalProps) => {
	const finalRef = React.useRef(null)
	const initialRef = React.useRef(null)

	const makeModal = useCallback(
		({ inputName, items, setItems, id, onClose }) => {
			switch (inputName) {
				case 'Features':
					return (
						<CreateFeatureFormModal
							action={action}
							id={id}
							onClose={onClose}
							setFeatures={setItems}
							features={items}
							item={item}
						/>
					)
				case 'Sources':
					return (
						<CreateSourceFormModal
							action={action}
							id={id}
							onClose={onClose}
							setSources={setItems}
							sources={items}
							item={item}
						/>
					)
				case 'Storage':
					return (
						<CreateStorageFormModal
							action={action}
							id={id}
							onClose={onClose}
							setStorage={setItems}
							storage={items}
							item={item}
						/>
					)
				case 'Tasks':
					return (
						<CreateTaskFormModal
							action={action}
							id={id}
							onClose={onClose}
							setTasks={setItems}
							tasks={items}
							item={item}
						/>
					)
				case 'Sinks':
					return (
						<CreateSinkFormModal
							action={action}
							id={id}
							onClose={onClose}
							setSinks={setItems}
							sinks={items}
							item={item}
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
							{action === 'create'
								? `Create ${
										inputName.at(-1) === 's'
											? inputName.slice(0, -1)
											: inputName
								  }`
								: `Edit ${
										inputName.at(-1) === 's'
											? inputName.slice(0, -1)
											: inputName
								  }`}
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
