import React from 'react'
import { Box } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import { useProject } from '../../../hooks/useProject.js'
import {
	IEntityResponseEntry,
	IFeatureTablesResponseEntry
} from '../../../../types/types'
import Loader from '../../../ui/Loader'
import TransitionContainer from '../../../ui/TransitionContainer'
import { useEntities } from '../hooks/useEntities'
import EntityOverviewContent from './EntityOverviewContent'
import {
	calcEntitiesInFTs,
	createCrumbsForEntitiesOverview
} from '../../../../utils/helpers'
import { useFeatureTables } from '../../featureTables/hooks/useFeatureTables'
import Nav from '../../../ui/breadcrumb/Nav'

function EntityOverview() {
	const { project } = useProject()
	const { name } = useParams()
	const {
		data: entities,
		isLoading
	}: { entities: IEntityResponseEntry[]; isLoading: boolean } =
		useEntities(project)

	const {
		data: featureTables
	}: { featureTables: IFeatureTablesResponseEntry[] } =
		useFeatureTables(project)

	const entity = entities?.filter(entity => entity.data.name === name).pop()
	const entitiesInFTs = calcEntitiesInFTs(entities, featureTables)
	return (
		<TransitionContainer mt='2em' h='85vh' w='100%'>
			{isLoading || !entity ? (
				<Box w='90vh'>
					<Loader rows={24} />
				</Box>
			) : (
				<>
					<Nav crumbs={createCrumbsForEntitiesOverview(name)} />
					<EntityOverviewContent
						name={name}
						entity={entity}
						entitiesInFTs={entitiesInFTs}
					/>
				</>
			)}
		</TransitionContainer>
	)
}

export default EntityOverview
