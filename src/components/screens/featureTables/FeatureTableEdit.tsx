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
import CreateFeatureTableForm from './CreateFeatureTableForm'

const changeable = true

function FeatureTableEdit() {
	return (
		<Box mt='25px' w='100%'>
			<Breadcrumb fontSize='14px' spacing='8px'>
				<BreadcrumbItem>
					<BreadcrumbLink
						as={Link}
						to='/feature-tables'
						color='brand.500'
						textDecor='underline'
					>
						FEATURES
					</BreadcrumbLink>
				</BreadcrumbItem>

				<BreadcrumbItem isCurrentPage>
					<BreadcrumbLink href='#' color='brand.600'>
						EDIT FEATURE TABLE
					</BreadcrumbLink>
				</BreadcrumbItem>
			</Breadcrumb>
			<Box
				w='77%'
				bgColor='brand.300'
				m='55px'
				mt='30px'
				h='85%'
				borderRadius='20px'
				boxShadow='md'
				p='25'
			>
				<Center pt='10px'>
					<Flex direction='row' gap='12px' alignItems='center' mb='20px'>
						<FiLayers size={12} color='344054' />
						<Heading as='h2' size='l' color='brand.600'>
							Edit Feature Table: driver_performance
						</Heading>
					</Flex>
				</Center>
				<Flex gap='30px' direction='row'>
					<CreateFeatureTableForm
						changeable={changeable}
						defaultValue={[
							{
								value: 'driver_performance',
								label: 'driver_performance'
							}
						]}
					/>
				</Flex>
			</Box>
		</Box>
	)
}

export default FeatureTableEdit
