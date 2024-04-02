import React from 'react'
import { useParams } from 'react-router-dom'
import { useProject } from '../../../hooks/useProject'
import {
	IEntityResponseEntry,
	IFeatureTablesResponseEntry
} from '../../../../types/types'
import TransitionContainer from '../../../ui/TransitionContainer'
import { useEntities } from '../hooks/useEntities'
import EntityOverviewContent from './EntityOverviewContent'
import {
	calcEntitiesInFTs,
	createCrumbsForEntitiesOverview
} from '../../../../utils/helpers'
import { useFeatureTables } from '../../featureTables/hooks/useFeatureTables'
import Nav from '../../../ui/breadcrumb/Nav'
import SpinnerLoader from '../../../ui/SpinnerLoader'

function EntityOverview() {
	const { project } = useProject()
	const { name } = useParams()
	const {
		data: entities,
		isLoading
	}: { entities: IEntityResponseEntry[]; isLoading: boolean } =
		useEntities(project)

	const {
		data: featureTables,
		isLoading: isLoadingFT
	}: { featureTables: IFeatureTablesResponseEntry[] } =
		useFeatureTables(project)

	const entity = entities?.filter(entity => entity.data.name === name).pop()
	const entitiesInFTs = calcEntitiesInFTs(entities, featureTables)
	return (
		<TransitionContainer mt='2em' h='85vh' w='100%'>
			{isLoading || isLoadingFT || !entity ? (
				<SpinnerLoader />
			) : (
				<>
					<Nav crumbs={createCrumbsForEntitiesOverview(name)} />
					<EntityOverviewContent
						entity={entity}
						entitiesInFTs={entitiesInFTs}
					/>
				</>
			)}
		</TransitionContainer>
	)
}

export default EntityOverview
