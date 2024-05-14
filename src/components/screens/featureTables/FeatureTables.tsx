import { useMemo } from 'react'
import 'ag-grid-community/styles/ag-grid.css' // Core CSS
import 'ag-grid-community/styles/ag-theme-quartz.css'
import '../../../assets/styles/ag-theme-custom.css'
import { useFeatureTables } from './hooks/useFeatureTables.ts'
import { useProject } from '../../hooks/useProject'
import { IFeatureTablesResponseEntry } from '../../../types/types.ts'
import { FEATURE_TABLES_TITLES } from '../../../utils/constants.ts'
import TablePage from '../../ui/table/TablePage.tsx'
import { FTColumnState } from '../../../utils/tableData'
import { FTIcon } from '../../ui/icons/FTIcon'
import SpinnerLoader from '../../ui/SpinnerLoader'

export function FeatureTables() {
	const { project } = useProject()

	const {
		data: featureTables,
		isLoading,
		isSuccess
	}: {
		data: IFeatureTablesResponseEntry[]
		isLoading: boolean
		isSuccess: boolean
	} = useFeatureTables(project)

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
		<>
			{isLoading && <SpinnerLoader />}
			{isSuccess && (
				<TablePage
					rows={FTRows}
					columns={FTColumnState}
					title={FEATURE_TABLES_TITLES.title}
					allowedCreate={true}
					allowedClone={true}
					path='feature-tables'
					Icon={FTIcon}
				/>
			)}
		</>
	)
}
