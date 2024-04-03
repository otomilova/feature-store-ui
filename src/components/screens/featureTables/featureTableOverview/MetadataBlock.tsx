import { Box, Divider, Heading, Text, VStack } from '@chakra-ui/react'
import { IFeatureTableFormData } from '../../../../types/types'

interface MetadataBlockProps {
	featureTable: IFeatureTableFormData
}

const MetadataBlock = ({ featureTable }: MetadataBlockProps) => {
	return (
		<Box
			overflow='auto'
			w='40vh'
			h='fit-content'
			m='0'
			borderRadius='20px'
			boxShadow='xl'
			border='2px solid'
			borderColor='brand.50'
			p='40px'
			pt='0.7em'
			pb='2em'
		>
			<VStack>
				<Heading
					fontSize={{ md: '16px', lg: '16px', xl: '18px' }}
					mb='0.1em'
					color='brand.600'
				>
					Created at:
				</Heading>
				<Text
					mb='0.2em'
					color='brand.600'
					fontSize={{ md: '20px', lg: '20px', xl: '24px' }}
				>
					{featureTable.metadata?.createdTimestamp}
				</Text>
			</VStack>
			<Divider borderColor='brand.400' mb='1.3em' mt='1em' />
			<VStack>
				<Heading
					fontSize={{ md: '16px', lg: '16px', xl: '18px' }}
					mb='0.3em'
					color='brand.600'
				>
					Updated at:
				</Heading>
				<Text
					mb='0.2em'
					color='brand.600'
					fontSize={{ md: '20px', lg: '20px', xl: '24px' }}
				>
					{featureTable.metadata?.lastUpdatedTimestamp}
				</Text>
			</VStack>
			<Divider borderColor='brand.400' mb='1.3em' mt='1em' />
			<VStack>
				<Heading
					fontSize={{ md: '16px', lg: '16px', xl: '18px' }}
					mb='0.1em'
					color='brand.600'
				>
					Revision:
				</Heading>
				<Text
					color='brand.600'
					fontSize={{ md: '18px', lg: '18px', xl: '20px' }}
				>
					{featureTable.metadata?.revision
						? featureTable.metadata?.revision
						: '0'}
				</Text>
			</VStack>
		</Box>
	)
}

export default MetadataBlock
