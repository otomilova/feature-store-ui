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
import { DESCRIPTION, LABELS } from '../../../../utils/constants'
import { useNavigate } from 'react-router-dom'
import { IEntityResponseEntry } from '../../../../types/types'
import EntitiesIcon from '../../../ui/icons/EntitiesIcon'

interface EntityOverviewContentProps {
	name: string
	entity: IEntityResponseEntry
	entitiesInFTs: Map<string, number>
}

const EntityOverviewContent = ({
	name,
	entity,
	entitiesInFTs
}: EntityOverviewContentProps) => {
	const navigate = useNavigate()

	return (
		<Box
			overflow={{ md: 'scroll', lg: 'scroll', xl: 'hidden' }}
			bgColor='#F5F5F5'
			w='95vh'
			m='3em'
			h={{ md: 'auto', lg: 'auto', xl: 'auto' }}
			mt={{ md: '2em', lg: '3em', xl: '4em' }}
			borderRadius='20px'
			boxShadow='md'
			p='40px'
			pt='0.7em'
			pb={{ md: '30px', lg: '40px', xl: '60px' }}
		>
			<Center pt='10px'>
				<Flex direction='row' gap='12px' alignItems='center'>
					<EntitiesIcon />
					<Heading
						as='h2'
						fontSize={{ md: '20px', lg: '22px', xl: '24px' }}
						color='brand.600'
					>
						Entity Overview: {name}
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
			<Divider mb='1em' />

			<Heading
				fontSize={{ md: '16px', lg: '16px', xl: '18px' }}
				color='brand.600'
				mb='0.3em'
			>
				Type
			</Heading>

			<Text mb='1.2em' color='brand.600'>
				{entity.data.valueType}
			</Text>

			<Heading
				fontSize={{ md: '16px', lg: '16px', xl: '18px' }}
				color='brand.600'
				mb='0.3em'
			>
				Number of FT's
			</Heading>

			<Text mb='1.2em' color='brand.600'>
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
			<Text mb='1.2em' color='brand.600'>
				{entity.data.description}
			</Text>
			<Divider />

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
			<Divider />
			<Center>
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
			</Center>
		</Box>
	)
}

export default EntityOverviewContent
