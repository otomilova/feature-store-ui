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
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { FiGrid } from 'react-icons/fi'

function FeatureOverview() {
	const navigate = useNavigate()
	return (
		<Box mt='25px' w='100%'>
			<Breadcrumb fontSize='14px' spacing='8px'>
				<BreadcrumbItem>
					<BreadcrumbLink
						as={Link}
						to='/features'
						color='#1963D3'
						textDecor='underline'
					>
						FEATURES
					</BreadcrumbLink>
				</BreadcrumbItem>

				<BreadcrumbItem isCurrentPage>
					<BreadcrumbLink href='#'>FEATURE OVERVIEW</BreadcrumbLink>
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
						<FiGrid size={12} />
						<Heading as='h2' size='l'>
							Feature Overview: conv_rate
						</Heading>
					</Flex>
				</Center>
				<Heading size='sm' mb='20px' mt='15px'>
					conv_rate
				</Heading>
				<Divider />
				<Heading size='16px' mt='15px'>
					Type
				</Heading>
				<Text mb='20px'>FLOAT</Text>
				<Heading size='16px'>Description</Heading>
				<Text mb='20px'>Text to be filled in</Text>
				<Heading size='16px'>Feature Table</Heading>
				<NavLink to='/feature-table/1'>
					<Text mb='20px' color='#1963D3'>
						driver_hourly_stats_fresh
					</Text>
				</NavLink>
				<Divider />
				<Heading size='16px' mt='15px' mb='5px'>
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
						colorScheme='blue'
						mt='60px'
						onClick={() => {
							let id = 1
							navigate(`/feature/${id}/edit`)
						}}
					>
						Edit Feature
					</Button>
				</Center>
			</Box>
		</Box>
	)
}

export default FeatureOverview
