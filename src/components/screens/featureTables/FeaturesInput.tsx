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
import CreateFeatureFormModal from '../features/CreateFeatureFormModal'
import { Controller } from 'react-hook-form'
import { MODAL_FEATURE } from '../../../utils/constants'

const FeaturesInput = ({
	control,
	features,
	setFeatures,
	inputName,
	inputId
}) => {
	const { isOpen, onOpen, onClose } = useDisclosure()
	const finalRef = React.useRef(null)
	const initialRef = React.useRef(null)

	function removeTag(index) {
		setFeatures(features.filter((el, i) => i !== index))
	}

	return (
		<Controller
			control={control}
			name={inputId}
			//rules={{ required: `Please select ${selectName}` }}
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
						{features.map((feature, index) => (
							<Tag
								size='md'
								bgColor='#EBF1FF'
								border='1px solid #70A0FF'
								color='#1963D3'
								key={index}
							>
								<TagLabel>{feature.featureName}</TagLabel>
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
							Add Feature
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
											Create Feature
										</Heading>
									</Center>
								</ModalHeader>
								<ModalCloseButton />
								<ModalBody pb={6}>
									<CreateFeatureFormModal
										changeable={true}
										id={MODAL_FEATURE.id}
										onClose={onClose}
										setFeatures={setFeatures}
										features={features}
									/>
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

export default FeaturesInput
