import { Box, Divider, Flex, Heading, Tag, VStack } from '@chakra-ui/react'
import { LABELS } from '../../../../utils/constants'
import { IFeatureTableFormData } from '../../../../types/types'

interface LabelsBlockProps {
	featureTable: IFeatureTableFormData
}

const LabelsBlock = ({ featureTable }: LabelsBlockProps) => {
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
					color='brand.600'
				>
					{LABELS.title}
				</Heading>
				<Divider borderColor='brand.400' mb='0.3em' />
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
			</VStack>
		</Box>
	)
}

export default LabelsBlock
