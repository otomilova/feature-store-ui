import * as React from 'react'
import { useState } from 'react'
import {
	Flex,
	FormControl,
	FormErrorMessage,
	FormLabel,
	Heading,
	Input,
	Tag,
	TagCloseButton,
	TagLabel,
	useDisclosure
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

const LabelsInput = ({ register }) => {
	const { isOpen, onOpen, onClose } = useDisclosure()
	const finalRef = React.useRef(null)
	const initialRef = React.useRef(null)
	const navigate = useNavigate()
	const [tags, setTags] = useState([
		'driver',
		'driver-performance',
		'driver-acc'
	])

	function handleKeyDown(e) {
		// If user did not press enter key, return
		if (e.key !== 'Enter') return
		// Get the value of the input
		const value = e.target.value
		// If the value is empty, return
		if (!value.trim()) return
		// Add the value to the tags array
		setTags([...tags, value])
		// Clear the input
		e.target.value = ''
	}

	function removeTag(index) {
		setTags(tags.filter((el, i) => i !== index))
	}

	return (
		<FormControl mb='20px' mt='15px'>
			<FormLabel htmlFor='labels'>
				<Heading fontSize='14px'>Labels</Heading>
			</FormLabel>
			<Flex
				p='10px'
				borderRadius='8px'
				bgColor='white'
				gap='10px'
				id='labels'
				placeholder=''
				{...register('labels')}
				wrap='wrap'
			>
				{tags.map((tag, index) => (
					<Tag
						bgColor='white'
						border='1px solid gray'
						color='black'
						key={index}
					>
						<TagLabel>{tag}</TagLabel>
						<TagCloseButton onClick={() => removeTag(index)} />
					</Tag>
				))}
				<Input
					placeholder='To add label start typing here'
					variant='unstyled'
					onKeyDown={handleKeyDown}
					w='160px'
				/>
				{/*<Button*/}
				{/*	bgColor='white'*/}
				{/*	textColor='gray'*/}
				{/*	variant='outline'*/}
				{/*	fontSize='12px'*/}
				{/*	leftIcon={<FiPlus />}*/}
				{/*>*/}
				{/*	Add Label*/}
				{/*</Button>*/}
			</Flex>

			<FormErrorMessage>
				{/*{errors?.features && errors?.features?.message}*/}
			</FormErrorMessage>
		</FormControl>
	)
}

export default LabelsInput
//
// <Heading size='16px' mt='15px' mb='5px'>
// 	Labels
// 	</Heading>
// <Flex gap='10px' mb='20px' bgColor='white' p='10px' borderRadius='8px'>
// 	<Tag bgColor='white' border='1px solid gray' color='black'>
// 		<TagLabel>driver-performance</TagLabel>
// 		<TagCloseButton />
// 	</Tag>
// 	<Tag bgColor='white' border='1px solid gray' color='black'>
// 		<TagLabel>driver</TagLabel>
// 		<TagCloseButton />
// 	</Tag>
// 	<Button
// 		size='sm'
// 		bgColor='white'
// 		textColor='gray'
// 		fontSize='12px'
// 		leftIcon={<FiPlus />}
// 	>
// 		Add Label
// 	</Button>
// </Flex>
