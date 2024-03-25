import React from 'react'
import { Box } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import Nav from '../../../ui/breadcrumb/Nav'
import { useFeatureTableByName } from '../hooks/useFeatureTableByName'
import Loader from '../../../ui/Loader'
import { createCrumbsForFTOverview } from '../../../../utils/helpers'
import FTOverviewContent from './FTOverviewContent'
import TransitionContainer from '../../../ui/TransitionContainer'

function FeatureTableOverview() {
	const { name } = useParams()
	const { data: featureTable, isLoading } = useFeatureTableByName(name)
	//console.log(featureTable)
	return (
		<TransitionContainer mt='2em' h='85vh' w='100%'>
			{isLoading ? (
				<Box w='90vh'>
					<Loader rows={24} />
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
