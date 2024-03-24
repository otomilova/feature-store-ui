import { Icon } from '@chakra-ui/icons'
import React from 'react'
import { FiGrid } from 'react-icons/fi'

export function FeaturesIcon(size = '0.9em', color = 'brand.600') {
	return <Icon as={FiGrid} boxSize={size} color={color} />
}
