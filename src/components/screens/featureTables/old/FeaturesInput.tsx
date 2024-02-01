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
import { useNavigate } from 'react-router-dom'
import CreateFeatureFormModal from '../../features/CreateFeatureFormModal'
import { Controller } from 'react-hook-form'

const FeaturesInput = ({ register, control, tags, setTags }) => {
	const { isOpen, onOpen, onClose } = useDisclosure()
	const finalRef = React.useRef(null)
	const initialRef = React.useRef(null)
	const navigate = useNavigate()
	// const [tags, setTags] = useState([
	// 	{
	// 		'Feature Name': 'driver',
	// 		Type: {
	// 			label: 'INT',
	// 			value: 'INT'
	// 		},
	// 		Description: 'driver-desc',
	// 		'Feature Table': {
	// 			label: 'driver_hourly_stats',
	// 			value: 'driver_hourly_stats'
	// 		},
	// 		Labels: [
	// 			{
	// 				value: 'driver_performance',
	// 				label: 'driver_performance'
	// 			}
	// 		]
	// 	},
	// 	{
	// 		'Feature Name': 'driver-performance',
	// 		Type: {
	// 			label: 'INT',
	// 			value: 'INT'
	// 		},
	// 		Description: 'driver-performance-desc',
	// 		'Feature Table': {
	// 			label: 'driver_hourly_stats',
	// 			value: 'driver_hourly_stats'
	// 		},
	// 		Labels: [
	// 			{
	// 				value: 'driver_performance',
	// 				label: 'driver_performance'
	// 			}
	// 		]
	// 	}
	// ])

	function removeTag(index) {
		setTags(tags.filter((el, i) => i !== index))
	}

	return (
		<Controller
			control={control}
			name='Features'
			//rules={{ required: `Please select ${selectName}` }}
			render={({
				field: { onChange, onBlur, value, name, ref },
				fieldState: { error }
			}) => (
				<FormControl mb='20px'>
					<FormLabel htmlFor='features'>
						<Heading fontSize='14px' color='brand.600'>
							Features
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
						//{...register('features')}
						bgColor='white'
						wrap='wrap'
					>
						{tags.map((tag, index) => (
							<Tag
								//p='5px'
								//m='0px'
								size='md'
								bgColor='#EBF1FF'
								border='1px solid #70A0FF'
								color='#1963D3'
								key={index}
							>
								<TagLabel>{tag['Feature Name']}</TagLabel>
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
						{/*<Box ref={finalRef} tabIndex={-1} aria-label='Focus moved to this box'>*/}
						{/*	Some other content that'll receive focus on close.*/}
						{/*</Box>*/}
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
										id={'modalFeature'}
										onClose={onClose}
										setTags={setTags}
										tags={tags}
									/>
								</ModalBody>

								{/*<ModalFooter>*/}
								{/*	<Button colorScheme='button' mr={3}>*/}
								{/*		Save*/}
								{/*	</Button>*/}
								{/*	<Button onClick={onClose}>Cancel</Button>*/}
								{/*</ModalFooter>*/}
							</ModalContent>
						</Modal>
					</Flex>

					<FormErrorMessage>
						{/*{errors?.features && errors?.features?.message}*/}
					</FormErrorMessage>
				</FormControl>
			)}
		/>
	)
}

export default FeaturesInput
