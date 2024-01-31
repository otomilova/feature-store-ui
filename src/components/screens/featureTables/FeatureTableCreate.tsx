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

const changeable = false

function FeatureTableCreate() {
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
						FEATURE TABLES
					</BreadcrumbLink>
				</BreadcrumbItem>

				<BreadcrumbItem isCurrentPage>
					<BreadcrumbLink href='#' color='brand.600'>
						CREATE FEATURE TABLE
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
				<Center pt='0px' mb='10px'>
					<Flex direction='row' gap='12px' alignItems='center'>
						<FiLayers size={12} />
						<Heading as='h2' size='l' color='brand.600'>
							Create Feature Table
						</Heading>
					</Flex>
				</Center>
				<Center>
					<Flex gap='30px' direction='row'>
						<CreateFeatureTableForm
							changeable={changeable}
							id={'featureTableForm'}
						/>
					</Flex>
				</Center>
			</Box>
		</Box>
	)
}

export default FeatureTableCreate
