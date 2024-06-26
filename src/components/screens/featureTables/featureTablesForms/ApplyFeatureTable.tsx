import { Box, Center, Flex, Heading } from '@chakra-ui/react'
import ApplyFeatureTableForm from './ApplyFeatureTableForm'
import Nav from '../../../ui/breadcrumb/Nav'
import { useFeatureTableByName } from '../hooks/useFeatureTableByName.ts'
import { useLocation, useParams } from 'react-router-dom'
import { createCrumbsForApplyFT, getBacklink } from '../../../../utils/helpers'
import TransitionContainer from '../../../ui/TransitionContainer'
import { IEntityResponseEntry } from '../../../../types/types'
import { useEntities } from '../../entities/hooks/useEntities'
import { useProject } from '../../../hooks/useProject'
import { FTIcon } from '../../../ui/icons/FTIcon'
import SpinnerLoader from '../../../ui/SpinnerLoader'

function ApplyFeatureTable({ action }: { action: 'create' | 'edit' }) {
	const { project } = useProject()
	const { name }: { name: string } = useParams()
	const backlink = getBacklink(useLocation().pathname)
	const { data: featureTableFormData, isLoading } = useFeatureTableByName(
		name,
		project
	)
	const { data: entities }: { entities: IEntityResponseEntry[] } =
		useEntities(project)
	const crumbs = createCrumbsForApplyFT(action, name)
	return (
		<TransitionContainer mt='1.5em' w='100%' h='85vh'>
			{(isLoading || !featureTableFormData) && action === 'edit' ? (
				<SpinnerLoader />
			) : (
				<>
					<Nav crumbs={crumbs} />

					<Box
						overflow={{ md: 'auto', lg: 'auto', xl: 'hidden' }}
						w='fit-content'
						bgColor='brand.300'
						m='55px'
						mt={{ md: '2em', lg: '3em', xl: '5em' }}
						h={{ md: '85vh', lg: 'auto', xl: 'auto' }}
						borderRadius='20px'
						boxShadow='md'
						pr={{ md: '35px', lg: '35px', xl: '65px' }}
						pl={{ md: '35px', lg: '35px', xl: '65px' }}
						pb={{ md: '35px', lg: '35px', xl: '65px' }}
						pt='25px'
					>
						<Center pt='10px'>
							<Flex direction='row' gap='12px' alignItems='center' mb='1.5em'>
								{FTIcon()}

								<Heading
									as='h2'
									fontSize={{ md: '20px', lg: '22px', xl: '24px' }}
									color='brand.600'
								>
									{action === 'edit'
										? `Edit Feature Table`
										: 'Create Feature Table'}
								</Heading>
							</Flex>
						</Center>
						<Flex gap='30px' direction='row'>
							<ApplyFeatureTableForm
								entities={entities}
								featureTableFormData={featureTableFormData}
								backlink={backlink}
								action={action}
								id={'featureTableForm'}
							/>
						</Flex>
					</Box>
				</>
			)}
		</TransitionContainer>
	)
}

export default ApplyFeatureTable
