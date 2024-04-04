import { Box, Center, Flex, Heading } from '@chakra-ui/react'
import ApplyEntityForm from './ApplyEntityForm'
import { useLocation, useParams } from 'react-router-dom'
import {
	createCrumbsForApplyEntity,
	getBacklink
} from '../../../../utils/helpers'
import TransitionContainer from '../../../ui/TransitionContainer'
import Nav from '../../../ui/breadcrumb/Nav'
import { EntitiesIcon } from '../../../ui/icons/EntitiesIcon'
import { useProject } from '../../../hooks/useProject'
import { IEntityFormData, IEntityResponseEntry } from '../../../../types/types'
import { useEntities } from '../hooks/useEntities'
import SpinnerLoader from '../../../ui/SpinnerLoader'
import { makeEntityFormDataFromResponse } from '../../../../utils/adapters'

function ApplyEntity({ action }: { action: 'create' | 'edit' }) {
	const { project } = useProject()
	const backlink = getBacklink(useLocation().pathname)
	const { name }: { name: string } = useParams()
	const crumbs = createCrumbsForApplyEntity(name, action)
	const {
		data: entities,
		isLoading
	}: { data: IEntityResponseEntry[]; isLoading: boolean } = useEntities(project)

	const entity: IEntityFormData | undefined = entities
		?.filter((entity: IEntityResponseEntry) => entity.data.name === name)
		.map((entity: IEntityResponseEntry) =>
			makeEntityFormDataFromResponse(entity)
		)
		.pop()

	return (
		<TransitionContainer mt='1.5em' w='100%' h='85vh'>
			{(isLoading || !entity) && action === 'edit' ? (
				<SpinnerLoader />
			) : (
				<>
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
									{action === 'edit' ? `Edit Entity` : 'Create Entity'}
								</Heading>
							</Flex>
						</Center>
						<Flex gap='30px' direction='row'>
							<ApplyEntityForm
								backlink={backlink}
								id={'entityForm'}
								action={action}
								entity={entity}
							/>
						</Flex>
					</Box>
				</>
			)}
		</TransitionContainer>
	)
}

export default ApplyEntity
