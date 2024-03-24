import * as React from 'react'
import { useMemo } from 'react'
import 'ag-grid-community/styles/ag-grid.css' // Core CSS
import 'ag-grid-community/styles/ag-theme-quartz.css'
import '../../../assets/styles/ag-theme-custom.css'
import { useProject } from '../../hooks/useProject.js'
import { IFeature } from '../../../types/types'
import { FEATURES_TITLES, FeaturesColumnState } from '../../../utils/constants'
import { useFeatures } from './hooks/useFeatures.ts'
import TablePage from '../../ui/table/TablePage'
import { FeaturesIcon } from '../../ui/icons/FeaturesIcon'

export function Features() {
	const { project } = useProject()

	const {
		data: features,
		isLoading
	}: { features: IFeature[]; isLoading: boolean } = useFeatures(project)

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
			Icon={FeaturesIcon}
			allowedCreate={false}
			path='features'
		/>
	)
}
