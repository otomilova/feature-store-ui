import { Icon } from '@chakra-ui/icons'
import { FiGrid } from 'react-icons/fi'

export function FeaturesIcon(color = 'brand.600') {
	return (
		<Icon
			as={FiGrid}
			w={{ md: '4', lg: '5', xl: '5' }}
			h={{ md: '4', lg: '5', xl: '5' }}
			color={color}
		/>
	)
}
