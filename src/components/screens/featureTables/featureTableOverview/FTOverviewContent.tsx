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
import {
	DESCRIPTION,
	ENTITIES,
	FEATURE_TABLE_TITLES,
	FEATURES_TITLES,
	LABELS
} from '../../../../utils/constants'
import PopoverComponent from '../../../ui/popover/PopoverComponent'
import { useNavigate } from 'react-router-dom'
import { FTIcon } from '../../../ui/icons/FTIcon'
import { IFeatureTableFormData } from '../../../../types/types'

interface FTOverviewContentProps {
	name: string
	featureTable: IFeatureTableFormData
}

const FtOverviewContent = ({ name, featureTable }: FTOverviewContentProps) => {
	const navigate = useNavigate()
	return (
		<Box
			overflow={{ md: 'scroll', lg: 'scroll', xl: 'hidden' }}
			bgColor='#F5F5F5'
			w='95vh'
			m='3em'
			h={{ md: '85vh', lg: '85vh', xl: 'auto' }}
			mt={{ md: '2em', lg: '3em', xl: '4em' }}
			borderRadius='20px'
			boxShadow='md'
			p='40px'
			pt='0.7em'
			pb={{ md: '30px', lg: '40px', xl: '60px' }}
		>
			<Center pt='10px'>
				<Flex direction='row' gap='12px' alignItems='center'>
					{FTIcon()}
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
						<PopoverComponent item={feature} key={feature.name}>
							<Tag
								_hover={{ bgColor: '#C3D5FF', cursor: 'pointer' }}
								colorScheme='blue'
								variant='outline'
								bgColor='#EBF1FF'
								size={{ md: 'md', lg: 'md', xl: 'lg' }}
								key={feature.name}
							>
								{feature.name}
							</Tag>
						</PopoverComponent>
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
						<PopoverComponent item={source} key={source.name}>
							<Tag
								_hover={{ bgColor: 'green.100', cursor: 'pointer' }}
								colorScheme='green'
								variant='outline'
								bgColor='green.50'
								size={{ md: 'md', lg: 'md', xl: 'lg' }}
								key={source.name}
							>
								{source.name}
							</Tag>
						</PopoverComponent>
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
						<PopoverComponent item={task} key={task.name}>
							<Tag
								_hover={{ bgColor: 'green.100', cursor: 'pointer' }}
								colorScheme='green'
								variant='outline'
								bgColor='green.50'
								size={{ md: 'md', lg: 'md', xl: 'lg' }}
								key={task.name}
							>
								{task.name}
							</Tag>
						</PopoverComponent>
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
						<PopoverComponent item={sink} key={sink.name}>
							<Tag
								_hover={{ bgColor: 'green.100', cursor: 'pointer' }}
								colorScheme='green'
								variant='outline'
								bgColor='green.50'
								size={{ md: 'md', lg: 'md', xl: 'lg' }}
								key={sink.name}
							>
								{sink.name}
							</Tag>
						</PopoverComponent>
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
							colorScheme='twitter'
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
					mt='1.8em'
					onClick={() => {
						navigate(`/feature-tables/${name}/edit`)
					}}
				>
					Edit {FEATURE_TABLE_TITLES.title}
				</Button>
			</Center>
		</Box>
	)
}

export default FtOverviewContent
