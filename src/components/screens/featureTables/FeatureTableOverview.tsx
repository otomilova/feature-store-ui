import React from 'react'
import {
	Badge,
	Box,
	Button,
	Center,
	Checkbox,
	Divider,
	Flex,
	Heading,
	HStack,
	Tag,
	Text
} from '@chakra-ui/react'
import { useNavigate, useParams } from 'react-router-dom'
import { FiLayers } from 'react-icons/fi'
import Nav from '../../ui/breadcrumb/Nav'
import { useFeatureTableByName } from './hooks/useFeatureTableByName'
import Loader from '../../ui/Loader'
import {
	DESCRIPTION,
	ENTITIES,
	FEATURE_TABLE_TITLES,
	FEATURES_TITLES,
	LABELS
} from '../../../utils/constants'
import { createCrumbsForFTOverview } from '../../../utils/helpers'
import { motion } from 'framer-motion'

function FeatureTableOverview() {
	const { name } = useParams()
	const { data: featureTable, isLoading } = useFeatureTableByName(name)
	const navigate = useNavigate()
	//console.table(featureTable)

	return (
		<Box
			mt='2em'
			w='100%'
			as={motion.div}
			initial={{ opacity: 0, transition: { duration: 0.1 } }}
			animate={{ opacity: 1, transition: { duration: 0 } }}
			exit={{ opacity: 0, transition: { duration: 0.2 } }}
		>
			{isLoading ? (
				<Box w='90vh'>
					<Loader rows={24} />
				</Box>
			) : (
				<>
					<Nav crumbs={createCrumbsForFTOverview(name)} />

					<Box
						bgColor='#F5F5F5'
						w='90vh'
						m='3em'
						mt={{ md: '2em', lg: '3em', xl: '4em' }}
						borderRadius='20px'
						boxShadow='md'
						p='40px'
						pt='0.7em'
						pb={{ md: '30px', lg: '40px', xl: '60px' }}
					>
						<Center pt='10px'>
							<Flex direction='row' gap='12px' alignItems='center'>
								<FiLayers size='0.9em' color='344054' />
								<Heading
									as='h2'
									fontSize={{ md: '20px', lg: '22px', xl: '24px' }}
									color='brand.600'
								>
									{FEATURE_TABLE_TITLES.title} Overview
								</Heading>
							</Flex>
						</Center>
						<Heading
							fontSize={{ md: '18px', lg: '20px', xl: '22px' }}
							mb='0.5em'
							mt='0.5em'
							color='brand.600'
						>
							{featureTable.featureTable}
						</Heading>
						<Divider />

						{featureTable.multiRecord && (
							<>
								<HStack mt='1em'>
									<Heading
										fontSize={{ md: '16px', lg: '16px', xl: '18px' }}
										color='brand.600'
									>
										Multi record
									</Heading>

									<Checkbox
										cursor='default'
										colorScheme='button'
										isChecked={featureTable.multiRecord}
									/>
								</HStack>
							</>
						)}

						{featureTable.ttlMinutes && (
							<>
								<Heading
									fontSize={{ md: '16px', lg: '16px', xl: '18px' }}
									color='brand.600'
									mt='1em'
									mb='0.3em'
								>
									Time to live
								</Heading>
								<HStack>
									<Badge variant='outline' colorScheme='gray'>
										{featureTable.ttlMinutes}
									</Badge>
									<Text color='brand.600'>minutes</Text>
								</HStack>
							</>
						)}

						<Heading
							fontSize={{ md: '16px', lg: '16px', xl: '18px' }}
							mt='1em'
							color='brand.600'
							mb='0.3em'
						>
							{ENTITIES.title}
						</Heading>
						<Flex gap='10px'>
							{featureTable.entities?.map(entity => {
								return (
									<Tag
										key={entity.value}
										size={{ md: 'md', lg: 'md', xl: 'lg' }}
										colorScheme='facebook'
									>
										{' '}
										{entity.value}{' '}
									</Tag>
								)
							})}
						</Flex>
						<Heading
							mt='1em'
							mb='0.3em'
							fontSize={{ md: '16px', lg: '16px', xl: '18px' }}
							color='brand.600'
						>
							{DESCRIPTION.title}
						</Heading>
						<Text mb='1.2em' color='brand.600'>
							{featureTable.description}
						</Text>
						<Divider />

						<Heading
							fontSize={{ md: '16px', lg: '16px', xl: '18px' }}
							mt='1.2em'
							mb='0.3em'
							color='brand.600'
						>
							{FEATURES_TITLES.title}
						</Heading>
						<Flex gap='10px' mb='1.2em'>
							{featureTable.features?.map(feature => {
								return (
									<Tag
										colorScheme='purple'
										size={{ md: 'md', lg: 'md', xl: 'lg' }}
										key={feature.name}
									>
										{feature.name}
									</Tag>
								)
							})}
						</Flex>
						<Divider />

						<Heading
							fontSize={{ md: '16px', lg: '16px', xl: '18px' }}
							mt='1.2em'
							mb='0.3em'
							color='brand.600'
						>
							Sources
						</Heading>
						<Flex gap='10px' mb='1.2em'>
							{featureTable.sources?.map(source => {
								return (
									<Tag
										colorScheme='cyan'
										size={{ md: 'md', lg: 'md', xl: 'lg' }}
										key={source.name}
									>
										{source.name}
									</Tag>
								)
							})}
						</Flex>
						<Divider />

						<Heading
							fontSize={{ md: '16px', lg: '16px', xl: '18px' }}
							mt='1.2em'
							mb='0.3em'
							color='brand.600'
						>
							Tasks
						</Heading>
						<Flex gap='10px' mb='1.2em'>
							{featureTable.tasks?.map(task => {
								return (
									<Tag
										colorScheme='cyan'
										size={{ md: 'md', lg: 'md', xl: 'lg' }}
										key={task.name}
									>
										{task.name}
									</Tag>
								)
							})}
						</Flex>
						<Divider />

						<Heading
							fontSize={{ md: '16px', lg: '16px', xl: '18px' }}
							mt='1.2em'
							mb='0.3em'
							color='brand.600'
						>
							Sinks
						</Heading>
						<Flex gap='10px' mb='1.2em'>
							{featureTable.sinks?.map(sink => {
								return (
									<Tag
										colorScheme='cyan'
										size={{ md: 'md', lg: 'md', xl: 'lg' }}
										key={sink.name}
									>
										{sink.name}
									</Tag>
								)
							})}
						</Flex>
						<Divider />

						<Heading
							fontSize={{ md: '16px', lg: '16px', xl: '18px' }}
							mt='1.2em'
							mb='0.3em'
							color='brand.600'
						>
							{LABELS.title}
						</Heading>
						<Flex gap='10px' mb='1.2em' wrap='wrap'>
							{featureTable.labels?.map(label => {
								return (
									<Tag
										colorScheme='blue'
										size={{ md: 'md', lg: 'md', xl: 'lg' }}
										key={label.value}
									>
										{label.value}
									</Tag>
								)
							})}
						</Flex>
						<Divider />
						<Center>
							<Button
								size={{ md: 'md', lg: 'md', xl: 'lg' }}
								colorScheme='button'
								mt='1.2em'
								mb='0.8em'
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
