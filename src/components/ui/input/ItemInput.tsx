import * as React from 'react'
import {
	Button,
	Flex,
	FormControl,
	FormErrorMessage,
	FormLabel,
	Heading,
	Tag,
	TagLabel,
	useDisclosure
} from '@chakra-ui/react'
import { FiPlus } from 'react-icons/fi'

import { Controller } from 'react-hook-form'
import ModalComponent from '../../screens/featureTables/itemModal/ModalComponent'
import PopoverComponent from '../popover/PopoverComponent'

const ItemInput = ({
	control,
	items,
	setItems,
	inputName,
	inputId,
	id,
	action,
	...props
}) => {
	const { isOpen, onOpen, onClose } = useDisclosure()

	function removeTag(index) {
		setItems(items?.filter((el, i) => i !== index))
	}

	return (
		<Controller
			id={inputId}
			control={control}
			name={inputId}
			render={() => (
				<FormControl mb='1.2em'>
					<FormLabel htmlFor={inputId}>
						<Heading
							fontSize={{ md: '14px', lg: '14px', xl: '16px' }}
							mb='0.3em'
							color='brand.600'
						>
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
						{items?.map((item, index) => (
							<React.Fragment key={`${item.name}-${index}`}>
								<PopoverComponent
									item={item}
									setItems={setItems}
									action={action}
									index={index}
									removeTag={removeTag}
									inputName={inputName}
									id={inputId}
									items={items}
								>
									<Tag size={{ md: 'md', lg: 'md', xl: 'lg' }} {...props}>
										<TagLabel>{item.name}</TagLabel>
									</Tag>
								</PopoverComponent>
							</React.Fragment>
						))}
						<Button
							height='25px'
							bgColor='white'
							textColor='gray'
							variant='outline'
							size={{ md: 'xs', lg: 'sm', xl: 'sm' }}
							leftIcon={<FiPlus />}
							onClick={onOpen}
						>
							Add{' '}
							{inputName.at(-1) === 's' ? inputName.slice(0, -1) : inputName}
						</Button>
						<ModalComponent
							action='create'
							isOpen={isOpen}
							onClose={onClose}
							inputName={inputName}
							id={id}
							items={items ? items : []}
							setItems={setItems}
						/>
					</Flex>

					<FormErrorMessage></FormErrorMessage>
				</FormControl>
			)}
		/>
	)
}

export default ItemInput
