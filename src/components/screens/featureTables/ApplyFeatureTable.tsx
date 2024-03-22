import { Box, Center, Flex, Heading } from '@chakra-ui/react'
import { FiLayers } from 'react-icons/fi'
import ApplyFeatureTableForm from './ApplyFeatureTableForm'
import Nav from '../../ui/breadcrumb/Nav'
import { useFeatureTableByName } from './hooks/useFeatureTableByName.ts'
import { useLocation, useParams } from 'react-router-dom'
import { makeFTFormDataFromResponse } from '../../../utils/adapters'
import { IFeatureTableFormData } from '../../../types/types'
import Loader from '../../ui/Loader'
import { createCrumbsForApplyFT, getBacklink } from '../../../utils/helpers'
import { motion } from 'framer-motion'

function ApplyFeatureTable({ action }: { action: string }) {
	const { name }: { name: string } = useParams()
	const backlink = getBacklink(useLocation().pathname)
	const {
		data: featureTable,
		isLoading,
		isSuccess
	} = useFeatureTableByName(name)
	const featureTableFormData: IFeatureTableFormData | undefined = isSuccess
		? makeFTFormDataFromResponse(featureTable)
		: undefined
	const crumbs = createCrumbsForApplyFT(action, name)

	return (
		<Box
			mt='1.5em'
			w='100%'
			h='85vh'
			as={motion.div}
			initial={{ opacity: 0, transition: { duration: 0.1 } }}
			animate={{ opacity: 1, transition: { duration: 0 } }}
			exit={{ opacity: 0, transition: { duration: 0.2 } }}
		>
			{isLoading ? (
				<Loader />
			) : (
				<>
					<Nav crumbs={crumbs} />

					<Box
						overflow={{ md: 'scroll', lg: 'hidden', xl: 'hidden' }}
						w='77%'
						bgColor='brand.300'
						m='55px'
						mt={{ md: '2em', lg: '3em', xl: '4em' }}
						h={{ md: '85vh', lg: 'auto', xl: 'auto' }}
						borderRadius='20px'
						boxShadow='md'
						p='25'
					>
						<Center pt='10px'>
							<Flex direction='row' gap='12px' alignItems='center' mb='20px'>
								<FiLayers size={12} color='344054' />

								<Heading as='h2' size='l' color='brand.600'>
									{action === 'edit'
										? `Edit Feature Table: ${name}`
										: 'Create Feature Table'}
								</Heading>
							</Flex>
						</Center>
						<Flex gap='30px' direction='row'>
							<ApplyFeatureTableForm
								featureTableFormData={featureTableFormData}
								backlink={backlink}
								action={action}
								defaultValue={[
									{
										value: 'driver_performance',
										label: 'driver_performance'
									}
								]}
								id={'featureTableForm'}
							/>
						</Flex>
					</Box>
				</>
			)}
		</Box>
	)
}

export default ApplyFeatureTable
