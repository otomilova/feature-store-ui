import { Icon } from '@chakra-ui/icons'
import { FiGrid } from 'react-icons/fi'

const FeaturesIcon = (size = '0.9em', color = 'brand.600') => {
	return <Icon as={FiGrid} boxSize={size} color={color} />
}

export default FeaturesIcon
