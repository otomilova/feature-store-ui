import { Icon } from '@chakra-ui/icons'
import React from 'react'
import { FiLayers } from 'react-icons/fi'

export function FTIcon(size = '0.9em', color = 'brand.600') {
	return <Icon as={FiLayers} boxSize={size} color={color} />
}
