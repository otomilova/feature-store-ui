import * as React from 'react'
import { useMemo } from 'react'
import 'ag-grid-community/styles/ag-grid.css' // Core CSS
import 'ag-grid-community/styles/ag-theme-quartz.css'
import '../../../assets/styles/ag-theme-custom.css'
import { useFeatureTables } from './hooks/useFeatureTables.ts'
import { useProject } from '../../hooks/useProject'
import { IFeatureTablesResponseEntry } from '../../../types/types.d.ts'
import {
	FEATURE_TABLES_TITLES,
	FTColumnState
} from '../../../utils/constants.ts'
import TablePage from '../../ui/table/TablePage.tsx'
import FTIcon from '../../ui/icons/FTIcon'

export function FeatureTables() {
	const { project } = useProject()

	const {
		data: featureTables,
		isLoading
	}: { featureTables: IFeatureTablesResponseEntry[]; isLoading: boolean } =
		useFeatureTables(project)

	const FTRows = useMemo(
		() =>
			featureTables?.map((table, index) => {
				const t = {
					'#': index + 1,
					Name: table.data.name,
					Entities: table.data.entities?.join(', '),
					Labels: table.data.labels
				}

				return t
			}),
		[featureTables]
	)

	return (
		<TablePage
			rows={FTRows}
			columns={FTColumnState}
			isLoading={isLoading}
			title={FEATURE_TABLES_TITLES.title}
			allowedCreate={true}
			path='feature-tables'
		>
			<FTIcon />
		</TablePage>
	)
}
