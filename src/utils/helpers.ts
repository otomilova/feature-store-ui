import {
	IApplyFeatureTableRequest,
	IFeatureTableFormData
} from '../types/types'

export function makeRequestFromFTFormData(formData: IFeatureTableFormData) {
	const request: IApplyFeatureTableRequest = {
		data: {
			features: formData.features
		}
	}

	return request
}