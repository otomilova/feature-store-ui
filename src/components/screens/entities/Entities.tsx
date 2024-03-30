import * as React from 'react'
import { useMemo } from 'react'
import 'ag-grid-community/styles/ag-grid.css' // Core CSS
import 'ag-grid-community/styles/ag-theme-quartz.css'
import { useProject } from '../../hooks/useProject'
import {
	IEntityResponseEntry,
	IFeatureTablesResponseEntry
} from '../../../types/types'
import TablePage from '../../ui/table/TablePage'
import { useEntities } from './hooks/useEntities'
import { useFeatureTables } from '../featureTables/hooks/useFeatureTables'
import { calcEntitiesInFTs } from '../../../utils/helpers'
import { EntitiesColumnState } from '../../../utils/tableData'
import { EntitiesIcon } from '../../ui/icons/EntitiesIcon'

export function Entities() {
	const { project } = useProject()

	const {
		data: entities,
		isLoading
	}: { entities: IEntityResponseEntry[]; isLoading: boolean } =
		useEntities(project)

	const {
		data: featureTables
	}: { featureTables: IFeatureTablesResponseEntry[] } =
		useFeatureTables(project)

	const EntitiesRows = useMemo(
		() =>
			entities?.map((entity, index) => {
				const t = {
					'#': index + 1,
					Name: entity.data.name,
					Type: entity.data.valueType,
					"# of FT's": calcEntitiesInFTs(entities, featureTables)
						? calcEntitiesInFTs(entities, featureTables).get(entity.data.name)
						: 0 || 0,
					Labels: entity.data.labels
				}

				return t
			}),
		[entities]
	)

	return (
		<TablePage
			rows={EntitiesRows}
			columns={EntitiesColumnState}
			isLoading={isLoading}
			title='Entities'
			allowedCreate={true}
			path='entities'
			Icon={EntitiesIcon}
		/>
	)
}
