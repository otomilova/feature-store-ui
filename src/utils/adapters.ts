import {
	IApplyFeatureTableRequest,
	IFeatureTableFormData
} from '../types/types'

export function makeRequestFromFTFormData(
	formData: IFeatureTableFormData,
	project: string
) {
	const features = formData.features?.map(feature => {
		return {
			name: feature.featureName,
			valueType: feature.type,
			description: feature.description,
			labels: feature.labels?.map(label => label.value)
		}
	})
	const entities = formData.entities.map(entity => entity.value)
	const labels = formData.labels?.map(label => label.value)

	const request: IApplyFeatureTableRequest = {
		project: project,
		data: {
			name: formData.featureTable,
			entities: entities,
			features: features,
			description: formData.description,
			labels: labels
		}
	}

	return request
}
