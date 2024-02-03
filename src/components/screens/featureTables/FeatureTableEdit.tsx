import React from 'react'
import { Box, Center, Flex, Heading } from '@chakra-ui/react'
import { FiLayers } from 'react-icons/fi'
import CreateFeatureTableForm from './CreateFeatureTableForm'
import Nav from '../../ui/breadcrumb/Nav'

const changeable = true

const defaultValue1 = [
	{
		value: 'driver_performance',
		label: 'driver_performance'
	}
]

function FeatureTableEdit({ action }) {
	const crumbs =
		action === 'edit'
			? [
					{
						name: 'FEATURE TABLES',
						link: '/feature-tables'
					},
					{
						name: 'FEATURE TABLE OVERVIEW',
						link: '/feature-tables/1'
					},
					{
						name:
							action === 'edit' ? 'EDIT FEATURE TABLE' : 'CREATE FEATURE TABLE',
						link: '#',
						isActive: true
					}
			  ]
			: [
					{
						name: 'FEATURE TABLES',
						link: '/feature-tables'
					},
					{
						name:
							action === 'edit' ? 'EDIT FEATURE TABLE' : 'CREATE FEATURE TABLE',
						link: '#',
						isActive: true
					}
			  ]

	return (
		<Box mt='25px' w='100%'>
			<Nav crumbs={crumbs} />

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
							{action === 'edit'
								? 'Edit Feature Table: driver_performance'
								: 'Create Feature Table'}
						</Heading>
					</Flex>
				</Center>
				<Flex gap='30px' direction='row'>
					<CreateFeatureTableForm
						changeable={changeable}
						action={action}
						defaultValue={[
							{
								value: 'driver_performance',
								label: 'driver_performance'
							}
						]}
						id={'featureTableForm'}
					/>
				</Flex>
			</Box>
		</Box>
	)
}

export default FeatureTableEdit
