import { useMemo } from 'react'
import 'ag-grid-community/styles/ag-grid.css' // Core CSS
import 'ag-grid-community/styles/ag-theme-quartz.css'
import '../../../assets/styles/ag-theme-custom.css'
import { useProject } from '../../hooks/useProject'
import { IFeature } from '../../../types/types'
import { FEATURES_TITLES } from '../../../utils/constants'
import { useFeatures } from './hooks/useFeatures.ts'
import TablePage from '../../ui/table/TablePage'
import { FeaturesColumnState } from '../../../utils/tableData'
import { FeaturesIcon } from '../../ui/icons/FeaturesIcon'

export function Features() {
	const { project } = useProject()

	const {
		data: features,
		isLoading
	}: { data: IFeature[]; isLoading: boolean } = useFeatures(project)

	const FeaturesRows = useMemo(
		() =>
			features?.map((feature, index) => {
				const t = {
					'#': index + 1,
					Name: feature.name,
					Type: feature.valueType,
					'Feature Table': feature.featureTableName,
					Labels: feature.labels
				}

				return t
			}),
		[features]
	)
	return (
		<TablePage
			rows={FeaturesRows}
			columns={FeaturesColumnState}
			isLoading={isLoading}
			title={FEATURES_TITLES.title}
			allowedCreate={false}
			path='features'
			Icon={FeaturesIcon}
		/>
	)
}
