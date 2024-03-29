import { Icon } from '@chakra-ui/icons'
import { FiLayers } from 'react-icons/fi'

const FTIcon = (size = '0.9em', color = 'brand.600') => {
	return <Icon as={FiLayers} boxSize={size} color={color} />
}

export default FTIcon
