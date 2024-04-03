import { Flex, Tag } from '@chakra-ui/react'

export function LabelsColumn({ value }: string[]) {
	return (
		<Flex gap='5px' wrap='wrap' mt='10px' fontFamily='Inter' mb='10px'>
			{value?.map((label: string) => {
				return (
					<Tag
						colorScheme='twitter'
						size={{ md: 'sm', lg: 'md', xl: 'lg' }}
						key={label}
					>
						{label}
					</Tag>
				)
			})}
		</Flex>
	)
}
