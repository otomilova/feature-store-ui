import * as React from 'react'
import { useMemo } from 'react'
// import { AgGridReact } from 'ag-grid-react'
import 'ag-grid-community/styles/ag-grid.css' // Core CSS
import 'ag-grid-community/styles/ag-theme-quartz.css'
import { useProject } from '../../hooks/useProject'
import {
	IEntityResponseEntry,
	IFeatureTablesResponseEntry
} from '../../../types/types'
import TablePage from '../../ui/table/TablePage'
import { EntitiesIcon } from '../../ui/icons/EntitiesIcon'
import { EntitiesColumnState } from '../../../utils/constants'
import { useEntities } from './hooks/useEntities'
import { useFeatureTables } from '../featureTables/hooks/useFeatureTables'
import { calcEntitiesInFTs } from '../../../utils/helpers'

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
					"# of FT's":
						calcEntitiesInFTs(entities, featureTables).get(entity.data.name) ||
						0,
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
			Icon={EntitiesIcon}
			allowedCreate={true}
			path='entities'
		/>
	)
}
