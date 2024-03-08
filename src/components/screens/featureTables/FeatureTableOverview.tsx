import React from 'react'
import {
	Box,
	Button,
	Center,
	Divider,
	Flex,
	Heading,
	Tag,
	Text
} from '@chakra-ui/react'
import { useNavigate, useParams } from 'react-router-dom'
import { FiLayers } from 'react-icons/fi'
import Nav from '../../ui/breadcrumb/Nav'
import { useFeatureTableByName } from './useFeatureTableByName'
import Loader from '../../ui/Loader'
import {
	DESCRIPTION,
	ENTITIES,
	FEATURE_TABLE_TITLES,
	FEATURES_TITLES,
	LABELS
} from '../../../utils/constants'
import { createCrumbsForFTOverview } from '../../../utils/helpers'

function FeatureTableOverview() {
	const { name } = useParams()
	const { data: featureTable, isLoading } = useFeatureTableByName(name)
	const navigate = useNavigate()
	return (
		<Box mt='25px' w='100%'>
			{isLoading ? (
				<Box w='80%'>
					<Loader rows={24} />
				</Box>
			) : (
				<>
					<Nav crumbs={createCrumbsForFTOverview(name)} />

					<Box
						bgColor='#F5F5F5'
						w='80%'
						m='35px'
						h='85vh'
						borderRadius='20px'
						boxShadow='md'
						p='40px'
						pt='10px'
					>
						<Center pt='10px'>
							<Flex direction='row' gap='12px' alignItems='center'>
								<FiLayers size={12} color='344054' />
								<Heading as='h2' size='l' color='brand.600'>
									{FEATURE_TABLE_TITLES.title} Overview
								</Heading>
							</Flex>
						</Center>
						<Heading size='sm' mb='5px' mt='10px' color='brand.600'>
							{featureTable.data.name}
						</Heading>
						<Divider />
						<Heading size='16px' mt='15px' color='brand.600' mb='5px'>
							Multi Record
						</Heading>
						<Text mb='10px' color='brand.600'>
							{featureTable.data?.multiRecord ? 'true' : 'false'}
						</Text>
						<Heading size='16px' mt='15px' color='brand.600' mb='5px'>
							ttlMinutes
						</Heading>
						<Text mb='10px' color='brand.600'>
							{featureTable.data?.ttlMinutes}
						</Text>

						<Heading size='16px' mt='15px' color='brand.600' mb='5px'>
							{ENTITIES.title}
						</Heading>
						<Flex gap='10px' mb='20px'>
							{featureTable.data.entities.map(entity => {
								return (
									<Tag key={entity} size='md' colorScheme='facebook'>
										{' '}
										{entity}{' '}
									</Tag>
								)
							})}
						</Flex>
						<Heading size='16px' color='brand.600'>
							{DESCRIPTION.title}
						</Heading>
						<Text mb='20px' color='brand.600'>
							{featureTable.data?.description}
						</Text>
						<Divider />

						<Heading size='16px' mt='15px' mb='5px' color='brand.600'>
							{FEATURES_TITLES.title}
						</Heading>
						<Flex gap='10px' mb='20px'>
							{featureTable.data.features.map(feature => {
								return (
									<Tag colorScheme='purple' size='md' key={feature.name}>
										{feature.name}
									</Tag>
								)
							})}
						</Flex>
						<Divider />

						<Heading size='16px' mt='15px' mb='5px' color='brand.600'>
							{LABELS.title}
						</Heading>
						<Flex gap='10px' mb='20px' wrap='wrap'>
							{featureTable.data.labels?.map(label => {
								return (
									<Tag colorScheme='blue' size='md' key={label}>
										{label}
									</Tag>
								)
							})}
						</Flex>
						<Divider />
						<Center>
							<Button
								colorScheme='button'
								mt='20px'
								mb='10px'
								onClick={() => {
									navigate(`/feature-tables/${name}/edit`)
								}}
							>
								Edit {FEATURE_TABLE_TITLES.title}
							</Button>
						</Center>
					</Box>
				</>
			)}
		</Box>
	)
}

export default FeatureTableOverview
