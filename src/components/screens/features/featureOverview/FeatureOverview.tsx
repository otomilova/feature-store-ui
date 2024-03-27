import React from 'react'
import { useParams } from 'react-router-dom'
import { useProject } from '../../../hooks/useProject'
import { IFeature } from '../../../../types/types'
import { useFeatures } from '../hooks/useFeatures'
import TransitionContainer from '../../../ui/TransitionContainer'
import { createCrumbsForFeaturesOverview } from '../../../../utils/helpers'
import FeatureOverviewContent from './FeatureOverviewContent'
import Nav from '../../../ui/breadcrumb/Nav'
import SpinnerLoader from '../../../ui/SpinnerLoader'

function FeatureOverview() {
	const { project } = useProject()
	const { name } = useParams()
	const {
		data: features,
		isLoading
	}: { features: IFeature[]; isLoading: boolean } = useFeatures(project)

	const feature = features?.filter(feature => feature.name === name).pop()

	return (
		<TransitionContainer mt='2em' h='85vh' w='100%'>
			{isLoading || !feature ? (
				<SpinnerLoader />
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
