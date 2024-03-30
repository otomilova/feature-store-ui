import { useParams } from 'react-router-dom'
import Nav from '../../../ui/breadcrumb/Nav'
import { useFeatureTableByName } from '../hooks/useFeatureTableByName'
import { createCrumbsForFTOverview } from '../../../../utils/helpers'
import FTOverviewContent from './FTOverviewContent'
import TransitionContainer from '../../../ui/TransitionContainer'
import SpinnerLoader from '../../../ui/SpinnerLoader'
import { useProject } from '../../../hooks/useProject'

function FeatureTableOverview() {
	const { project } = useProject()
	const { name } = useParams()
	const { data: featureTable, isLoading } = useFeatureTableByName(name, project)
	return (
		<TransitionContainer mt='2em' h='85vh' w='100%'>
			{isLoading || !featureTable ? (
				<SpinnerLoader />
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
