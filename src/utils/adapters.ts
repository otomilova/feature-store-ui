import {
	IApplyFeatureTableRequest,
	IFeatureTableFormData,
	IFeatureTablesResponseEntry
} from '../types/types'
import { createSelectObjFromString } from './helpers'

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
			labels: labels,
			multiRecord: formData.multiRecord,
			ttlMinutes: +formData.ttlMinutes
		}
	}

	return request
}

export function makeFTFormDataFromResponse(
	response: IFeatureTablesResponseEntry
) {
	const features = response.data.features?.map(feature => {
		return {
			featureName: feature.name,
			type: feature.valueType,
			description: feature.description,
			labels: feature.labels?.map(label => createSelectObjFromString(label)),
			featureTable: createSelectObjFromString(response.data.name)
		}
	})
	const entities = response.data.entities?.map(entity =>
		createSelectObjFromString(entity)
	)

	const labels = response.data.labels?.map(label =>
		createSelectObjFromString(label)
	)

	const data: IFeatureTableFormData = {
		featureTable: response.data.name,
		description: response.data.description,
		entities: entities,
		features: features,
		labels: labels,
		multiRecord: response.data.multiRecord
	}
	return data
}
