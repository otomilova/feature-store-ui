import React from 'react'
import {
	Box,
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	Button,
	Center,
	Divider,
	Flex,
	Heading,
	Tag,
	Text
} from '@chakra-ui/react'
import { Link, useNavigate } from 'react-router-dom'
import { FiLayers } from 'react-icons/fi'

const labels = ['driver', 'driver-performance']
const features = ['driver', 'driver-performance']

function FeatureTableOverview() {
	const navigate = useNavigate()
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
						FEATURE TABLES
					</BreadcrumbLink>
				</BreadcrumbItem>

				<BreadcrumbItem isCurrentPage>
					<BreadcrumbLink href='#' color='brand.600'>
						FEATURE TABLE OVERVIEW
					</BreadcrumbLink>
				</BreadcrumbItem>
			</Breadcrumb>
			<Box
				bgColor='#F5F5F5'
				m='55px'
				h='80%'
				borderRadius='20px'
				boxShadow='md'
				p='25'
			>
				<Center pt='10px'>
					<Flex direction='row' gap='12px' alignItems='center'>
						<FiLayers size={12} color='344054' />
						<Heading as='h2' size='l' color='brand.600'>
							Feature Table Overview
						</Heading>
					</Flex>
				</Center>
				<Heading size='sm' mb='20px' mt='15px' color='brand.600'>
					driver_hourly_stats_fresh
				</Heading>
				<Divider />
				<Heading size='16px' mt='15px' color='brand.600'>
					Entity
				</Heading>
				<Text mb='20px' color='brand.600'>
					Driver
				</Text>
				<Heading size='16px' color='brand.600'>
					Description
				</Heading>
				<Text mb='20px' color='brand.600'>
					Text to be filled in
				</Text>
				<Divider />

				<Heading size='16px' mt='15px' mb='5px' color='brand.600'>
					Features
				</Heading>
				<Flex gap='10px' mb='20px'>
					<Tag colorScheme='purple' size='md'>
						driver-performance
					</Tag>
					<Tag colorScheme='purple' size='md'>
						driver
					</Tag>
				</Flex>
				<Divider />

				<Heading size='16px' mt='15px' mb='5px' color='brand.600'>
					Labels
				</Heading>
				<Flex gap='10px' mb='20px'>
					<Tag colorScheme='blue' size='md'>
						driver-performance
					</Tag>
					<Tag colorScheme='blue' size='md'>
						driver
					</Tag>
				</Flex>
				<Divider />
				<Center>
					<Button
						colorScheme='button'
						mt='60px'
						onClick={() => {
							let id = 1
							navigate(`/feature-table/${id}/edit`)
						}}
					>
						Edit Feature Table
					</Button>
				</Center>
			</Box>
		</Box>
	)
}

export default FeatureTableOverview
