import { Icon } from '@chakra-ui/icons'
import { FiHexagon } from 'react-icons/fi'

const EntitiesIcon = (size = '0.9em', color = 'brand.600') => {
	return <Icon as={FiHexagon} boxSize={size} color={color} />
}

export default EntitiesIcon
