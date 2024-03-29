import { Icon } from '@chakra-ui/icons'
import { FiHexagon } from 'react-icons/fi'

export function EntitiesIcon(color = 'brand.600') {
	return (
		<Icon
			as={FiHexagon}
			w={{ md: '4', lg: '5', xl: '5' }}
			h={{ md: '4', lg: '5', xl: '5' }}
			color={color}
		/>
	)
}
