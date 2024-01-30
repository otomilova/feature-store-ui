import React from 'react'
import {
	Box,
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	Center,
	Flex,
	Heading
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { FiLayers } from 'react-icons/fi'
import CreateFeatureForm from './CreateFeatureForm'

const changeable = true

function FeatureEdit() {
	return (
		<Box mt='25px' w='100%'>
			<Breadcrumb fontSize='14px' spacing='8px'>
				<BreadcrumbItem>
					<BreadcrumbLink
						as={Link}
						to='/feature-tables'
						color='#1963D3'
						textDecor='underline'
					>
						FEATURES
					</BreadcrumbLink>
				</BreadcrumbItem>

				<BreadcrumbItem isCurrentPage>
					<BreadcrumbLink href='#'>EDIT FEATURE</BreadcrumbLink>
				</BreadcrumbItem>
			</Breadcrumb>
			<Box
				w='77%'
				bgColor='#F5F5F5'
				m='55px'
				h='80%'
				borderRadius='20px'
				boxShadow='md'
				p='25'
			>
				<Center pt='10px'>
					<Flex direction='row' gap='12px' alignItems='center' mb='20px'>
						<FiLayers size={12} />
						<Heading as='h2' size='l'>
							Edit Feature: conv_rate
						</Heading>
					</Flex>
				</Center>
				<Flex gap='30px' direction='row'>
					<CreateFeatureForm changeable={changeable} />
				</Flex>
			</Box>
		</Box>
	)
}

export default FeatureEdit
