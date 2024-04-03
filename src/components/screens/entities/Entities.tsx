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
import SpinnerLoader from '../../ui/SpinnerLoader'

export function Entities() {
	const { project } = useProject()

	const {
		data: entities,
		isLoading,
		isSuccess
	}: {
		data: IEntityResponseEntry[]
		isLoading: boolean
		isSuccess: boolean
	} = useEntities(project)

	const {
		data: featureTables,
		isLoading: isLoading2,
		isSuccess: isSuccess2
	}: {
		data: IFeatureTablesResponseEntry[]
		isLoading: boolean
		isSuccess: boolean
	} = useFeatureTables(project)
	useFeatureTables(project)

	const entitiesInTFs = calcEntitiesInFTs(featureTables)

	const EntitiesRows = useMemo(
		() =>
			entities?.map((entity, index) => {
				const t = {
					'#': index + 1,
					Name: entity.data.name,
					Type: entity.data.valueType,
					'# of usage':
						(entitiesInTFs ? entitiesInTFs.get(entity.data.name) : 0) || 0,
					Labels: entity.data.labels
				}

				return t
			}),
		[entities, featureTables]
	)

	return (
		<>
			{isLoading && isLoading2 && <SpinnerLoader />}

			{isSuccess && isSuccess2 && (
				<TablePage
					rows={EntitiesRows}
					columns={EntitiesColumnState}
					title='Entities'
					allowedCreate={true}
					path='entities'
					Icon={EntitiesIcon}
				/>
			)}
		</>
	)
}
