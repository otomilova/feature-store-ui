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
import SpinnerLoader from '../../ui/SpinnerLoader'

export function Features() {
	const { project } = useProject()

	const {
		data: features,
		isLoading,
		isSuccess
	}: { data: IFeature[]; isLoading: boolean; isSuccess: boolean } = useFeatures(
		project
	)

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
		<>
			{isLoading && <SpinnerLoader />}
			{isSuccess && (
				<TablePage
					rows={FeaturesRows}
					columns={FeaturesColumnState}
					title={FEATURES_TITLES.title}
					allowedCreate={false}
					path='features'
					Icon={FeaturesIcon}
				/>
			)}
		</>
	)
}
