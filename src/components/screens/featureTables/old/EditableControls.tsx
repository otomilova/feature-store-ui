import { ButtonGroup, IconButton, useEditableControls } from '@chakra-ui/react'
import { CheckIcon, CloseIcon } from '@chakra-ui/icons'

function EditableControls() {
	const {
		isEditing,
		getSubmitButtonProps,
		getCancelButtonProps,
		getEditButtonProps
	} = useEditableControls()

	return isEditing ? (
		<ButtonGroup
			justifyContent='end'
			size='sm'
			w='full'
			// spacing={2}
			mt={2}
			ml='0'
			pl='0'
		>
			<IconButton icon={<CheckIcon />} {...getSubmitButtonProps()} />
			<IconButton
				icon={<CloseIcon boxSize={3} />}
				{...getCancelButtonProps()}
			/>
		</ButtonGroup>
	) : null
}

export default EditableControls
