import {
	Box,
	Button,
	Center,
	Divider,
	Flex,
	Heading,
	HStack,
	Tag,
	Text
} from '@chakra-ui/react'
import { DESCRIPTION, LABELS } from '../../../../utils/constants'
import { useNavigate } from 'react-router-dom'
import { IEntityResponseEntry } from '../../../../types/types'
import { EntitiesIcon } from '../../../ui/icons/EntitiesIcon'

interface EntityOverviewContentProps {
	entity: IEntityResponseEntry
	entitiesInFTs: Map<string, number>
	name: string
}

const EntityOverviewContent = ({
	entity,
	entitiesInFTs,
	name
}: EntityOverviewContentProps) => {
	const navigate = useNavigate()

	return (
		<Box
			boxShadow='xl'
			border='2px solid'
			borderColor='brand.50'
			w={{ md: '95vh', lg: '85vh', xl: '75vh' }}
			m='3em'
			h='auto'
			mt={{ md: '2em', lg: '3em', xl: '4em' }}
			borderRadius='20px'
			p='40px'
			pt='0.7em'
			pb='2em'
		>
			<Center pt='10px'>
				<Flex direction='row' gap='12px' alignItems='center'>
					{EntitiesIcon()}
					<Heading
						as='h2'
						fontSize={{ md: '20px', lg: '22px', xl: '24px' }}
						color='brand.600'
					>
						Entity Overview
					</Heading>
				</Flex>
			</Center>
			<Heading
				fontSize={{ md: '18px', lg: '20px', xl: '22px' }}
				mb='0.5em'
				mt='0.5em'
				color='brand.600'
			>
				{entity.data.name}
			</Heading>
			<Divider mb='1em' borderColor='brand.400' />

			<Heading
				fontSize={{ md: '16px', lg: '16px', xl: '18px' }}
				color='brand.600'
				mb='0.3em'
			>
				Type
			</Heading>

			<Text
				mb='1.2em'
				color='brand.600'
				fontSize={{ md: '16px', lg: '16px', xl: '18px' }}
			>
				{entity.data.valueType}
			</Text>

			<Heading
				fontSize={{ md: '16px', lg: '16px', xl: '18px' }}
				color='brand.600'
				mb='0.3em'
			>
				Number of usage in Feature Tables
			</Heading>

			<Text
				mb='1.2em'
				color='brand.600'
				fontSize={{ md: '16px', lg: '16px', xl: '18px' }}
			>
				{entitiesInFTs.get(entity.data.name) || 0}
			</Text>

			<Heading
				mt='1.2em'
				mb='0.3em'
				fontSize={{ md: '16px', lg: '16px', xl: '18px' }}
				color='brand.600'
			>
				{DESCRIPTION.title}
			</Heading>
			<Text
				mb='1.2em'
				color='brand.600'
				fontSize={{ md: '16px', lg: '16px', xl: '18px' }}
			>
				{entity.data.description}
			</Text>
			<Divider borderColor='brand.400' />

			<Heading
				fontSize={{ md: '16px', lg: '16px', xl: '18px' }}
				mt='1.2em'
				mb='0.4em'
				color='brand.600'
			>
				{LABELS.title}
			</Heading>
			<Flex gap='10px' mb='1.2em' wrap='wrap'>
				{entity.data.labels?.map(label => {
					return (
						<Tag
							colorScheme='blue'
							size={{ md: 'md', lg: 'md', xl: 'lg' }}
							key={label}
						>
							{label}
						</Tag>
					)
				})}
			</Flex>
			<Divider borderColor='brand.400' />
			<Center>
				<HStack gap='1.2em'>
					<Button
						onClick={() => {
							navigate(`/entities`)
						}}
						mt='1.8em'
						size={{ md: 'md', lg: 'md', xl: 'lg' }}
						colorScheme='blue'
						variant='outline'
					>
						Back to Entities
					</Button>
					<Button
						size={{ md: 'md', lg: 'md', xl: 'lg' }}
						colorScheme='button'
						mt='1.8em'
						onClick={() => {
							navigate(`/entities/${name}/edit`)
						}}
					>
						Edit Entity
					</Button>
				</HStack>
			</Center>
		</Box>
	)
}

export default EntityOverviewContent
