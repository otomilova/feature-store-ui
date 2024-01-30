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

function FeatureTableOverview() {
	const navigate = useNavigate()
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
					<BreadcrumbLink href='#'>FEATURE TABLE OVERVIEW</BreadcrumbLink>
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
						<FiLayers size={12} />
						<Heading as='h2' size='l'>
							Feature Table Overview: driver_hourly_stats_fresh
						</Heading>
					</Flex>
				</Center>
				<Heading size='sm' mb='20px' mt='15px'>
					driver_hourly_stats_fresh
				</Heading>
				<Divider />
				<Heading size='16px' mt='15px'>
					Entity
				</Heading>
				<Text mb='20px'>Driver</Text>
				<Heading size='16px'>Description</Heading>
				<Text mb='20px'>Text to be filled in</Text>
				<Divider />
				<Heading size='16px' mb='5px' mt='15px'>
					Features
				</Heading>
				<Flex gap='10px' mb='20px'>
					<Tag bgColor='#EBF1FF' border='1px solid #70A0FF' color='#1963D3'>
						driver-performance
					</Tag>
					<Tag bgColor='#EBF1FF' border='1px solid #70A0FF' color='#1963D3'>
						driver
					</Tag>
				</Flex>
				<Divider />
				<Heading size='16px' mt='15px' mb='5px'>
					Labels
				</Heading>
				<Flex gap='10px' mb='20px'>
					<Tag bgColor='white' border='1px solid gray' color='black'>
						driver-performance
					</Tag>
					<Tag bgColor='white' border='1px solid gray' color='black'>
						driver
					</Tag>
				</Flex>
				<Divider />
				<Center>
					<Button
						colorScheme='blue'
						mt='60px'
						onClick={() => {
							let id = 1
							navigate(`/feature-table/${id}/edit`)
						}}
					>
						Edit Table
					</Button>
				</Center>
			</Box>
		</Box>
	)
}

export default FeatureTableOverview
