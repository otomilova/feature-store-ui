import { Box, Center, Flex, Heading } from '@chakra-ui/react'
import { FiLayers } from 'react-icons/fi'
import ApplyFeatureTableForm from './ApplyFeatureTableForm'
import Nav from '../../ui/breadcrumb/Nav'
import { useFeatureTableByName } from './hooks/useFeatureTableByName.ts'
import { useLocation, useParams } from 'react-router-dom'
import Loader from '../../ui/Loader'
import { createCrumbsForApplyFT, getBacklink } from '../../../utils/helpers'
import { motion } from 'framer-motion'

function ApplyFeatureTable({ action }: { action: string }) {
	const { name }: { name: string } = useParams()
	const backlink = getBacklink(useLocation().pathname)
	const { data: featureTableFormData, isLoading } = useFeatureTableByName(name)
	const crumbs = createCrumbsForApplyFT(action, name)

	return (
		<Box
			mt='1.5em'
			w='100vh'
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
						overflow={{ md: 'scroll', lg: 'scroll', xl: 'hidden' }}
						w='fit-content'
						bgColor='brand.300'
						m='55px'
						mt={{ md: '2em', lg: '3em', xl: '5em' }}
						h={{ md: '85vh', lg: '85vh', xl: 'auto' }}
						borderRadius='20px'
						boxShadow='md'
						pr={{ md: '35px', lg: '35px', xl: '65px' }}
						pl={{ md: '35px', lg: '35px', xl: '65px' }}
						pb={{ md: '35px', lg: '35px', xl: '65px' }}
						pt='25px'
					>
						<Center pt='10px'>
							<Flex direction='row' gap='12px' alignItems='center' mb='1.5em'>
								<FiLayers size={12} color='344054' />

								<Heading
									as='h2'
									fontSize={{ md: '20px', lg: '22px', xl: '24px' }}
									color='brand.600'
								>
									{action === 'edit'
										? `Edit Feature Table: ${name}`
										: 'Create Feature Table'}
								</Heading>
							</Flex>
						</Center>
						<Flex gap='30px' direction='row'>
							<ApplyFeatureTableForm
								featureTableFormData={featureTableFormData}
								isLoading={isLoading}
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
