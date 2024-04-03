import { Box, Center, Flex, Heading } from '@chakra-ui/react'
import ApplyEntityForm from './ApplyEntityForm'
import { useLocation } from 'react-router-dom'
import {
	createCrumbsForApplyEntity,
	getBacklink
} from '../../../../utils/helpers'
import TransitionContainer from '../../../ui/TransitionContainer'
import Nav from '../../../ui/breadcrumb/Nav'
import { EntitiesIcon } from '../../../ui/icons/EntitiesIcon'

function ApplyEntity() {
	//const { name }: { name: string } = useParams()
	const backlink = getBacklink(useLocation().pathname)

	const crumbs = createCrumbsForApplyEntity()

	return (
		<TransitionContainer mt='1.5em' w='100%' h='85vh'>
			<Nav crumbs={crumbs} />

			<Box
				w='fit-content'
				bgColor='brand.300'
				m='55px'
				mt={{ md: '2em', lg: '3em', xl: '5em' }}
				h='auto'
				borderRadius='20px'
				boxShadow='md'
				pr='3em'
				pl='3em'
				pb='3em'
				pt='25px'
			>
				<Center pt='10px'>
					<Flex direction='row' gap='12px' alignItems='center' mb='1.5em'>
						{EntitiesIcon()}

						<Heading
							as='h2'
							fontSize={{ md: '20px', lg: '22px', xl: '24px' }}
							color='brand.600'
						>
							Create Entity
						</Heading>
					</Flex>
				</Center>
				<Flex gap='30px' direction='row'>
					<ApplyEntityForm backlink={backlink} id={'entityForm'} />
				</Flex>
			</Box>
		</TransitionContainer>
	)
}

export default ApplyEntity
