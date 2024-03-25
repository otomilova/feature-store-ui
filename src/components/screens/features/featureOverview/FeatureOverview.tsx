import React from 'react'
import { Box } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import { useProject } from '../../../hooks/useProject.js'
import { IFeature } from '../../../../types/types'
import { useFeatures } from '../hooks/useFeatures'
import Loader from '../../../ui/Loader'
import TransitionContainer from '../../../ui/TransitionContainer'
import { createCrumbsForFeaturesOverview } from '../../../../utils/helpers'
import FeatureOverviewContent from './FeatureOverviewContent'
import Nav from '../../../ui/breadcrumb/Nav'

function FeatureOverview() {
	const { project } = useProject()
	const { name } = useParams()
	const {
		data: features,
		isLoading
	}: { features: IFeature[]; isLoading: boolean } = useFeatures(project)

	const feature = features?.filter(feature => feature.name === name).pop()
	console.log(feature)

	return (
		<TransitionContainer mt='2em' h='85vh' w='100%'>
			{isLoading || !feature ? (
				<Box w='90vh'>
					<Loader rows={24} />
				</Box>
			) : (
				<>
					<Nav crumbs={createCrumbsForFeaturesOverview(name)} />
					<FeatureOverviewContent name={name} feature={feature} />
				</>
			)}
		</TransitionContainer>
	)
}

export default FeatureOverview
