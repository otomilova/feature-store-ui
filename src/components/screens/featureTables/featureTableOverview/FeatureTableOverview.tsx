import React from 'react'
import { Box } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import Nav from '../../../ui/breadcrumb/Nav'
import { useFeatureTableByName } from '../hooks/useFeatureTableByName'
import { createCrumbsForFTOverview } from '../../../../utils/helpers'
import FTOverviewContent from './FTOverviewContent'
import TransitionContainer from '../../../ui/TransitionContainer'
import SpinnerLoader from '../../../ui/SpinnerLoader'

function FeatureTableOverview() {
	const { name } = useParams()
	const { data: featureTable, isLoading } = useFeatureTableByName(name)
	//console.log(featureTable)
	return (
		<TransitionContainer mt='2em' h='85vh' w='100%'>
			{isLoading ? (
				<Box w='90vh'>
					<SpinnerLoader />
				</Box>
			) : (
				<>
					<Nav crumbs={createCrumbsForFTOverview(name)} />
					<FTOverviewContent name={name} featureTable={featureTable} />
				</>
			)}
		</TransitionContainer>
	)
}

export default FeatureTableOverview
