import { Icon } from '@chakra-ui/icons'
import React from 'react'
import { FiHexagon } from 'react-icons/fi'

export function EntitiesIcon(size = '0.9em', color = 'brand.600') {
	return <Icon as={FiHexagon} boxSize={size} color={color} />
}
