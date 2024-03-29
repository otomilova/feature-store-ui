import { Icon } from '@chakra-ui/icons'
import { FiLayers } from 'react-icons/fi'

export function FTIcon(color = 'brand.600') {
	return (
		<Icon
			as={FiLayers}
			w={{ md: '4', lg: '5', xl: '5' }}
			h={{ md: '4', lg: '5', xl: '5' }}
			color={color}
		/>
	)
}
