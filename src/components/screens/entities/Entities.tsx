import * as React from 'react'
import { useMemo } from 'react'
// import { AgGridReact } from 'ag-grid-react'
import 'ag-grid-community/styles/ag-grid.css' // Core CSS
import 'ag-grid-community/styles/ag-theme-quartz.css'
import { useProject } from '../../hooks/useProject.js'
import {
	IEntityResponseEntry,
	IFeatureTablesResponseEntry
} from '../../../types/types'
import TablePage from '../../ui/table/TablePage'
import { EntitiesIcon } from '../../ui/icons/EntitiesIcon'
import { EntitiesColumnState } from '../../../utils/constants'
import { useEntities } from './hooks/useEntities'
import { useFeatureTables } from '../featureTables/hooks/useFeatureTables'

export function Entities() {
	const { project } = useProject()

	const {
		data: entities,
		isLoading
	}: { entities: IEntityResponseEntry[]; isLoading: boolean } =
		useEntities(project)

	const { data: featureTables }: { entities: IFeatureTablesResponseEntry[] } =
		useFeatureTables(project)

	console.log(entities)
	const entitiesInFTs = featureTables?.reduce((acc, ft) => {
		const entitiesInFt = ft.data.entities
		debugger
		entitiesInFt.forEach(entity => {
			if (acc.has(entity)) acc.set(entity, acc.get(entity) + 1)
			else acc.set(entity, 1)
			return acc
		})
		return acc
	}, new Map())

	const EntitiesRows = useMemo(
		() =>
			entities?.map((entity, index) => {
				const t = {
					'#': index + 1,
					Name: entity.data.name,
					Type: entity.data.valueType,
					"# of FT's": entitiesInFTs.get(entity.data.name) || 0,
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
			allowedCreate={false}
			path='entities'
		/>
	)
}
