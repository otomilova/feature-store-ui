import {
	IApplyEntityRequest,
	IApplyFeatureTableRequest,
	IEntityFormData,
	IEntityResponseEntry,
	IFeatureTableFormData,
	IFeatureTablesResponseEntry,
	ValueTypes
} from '../types/types.d.ts'
import {
	createFormOptionFromResponse,
	createRequestOptionsFromForm,
	createSelectObjFromString,
	extractValueFromSelectObj
} from './helpers'

export function makeRequestFromFTFormData(
	formData: IFeatureTableFormData,
	project: string
) {
	const features = formData.features?.map(feature => {
		return {
			name: feature.name,
			valueType: feature.type,
			description: feature.description,
			labels: feature.labels?.map(label => label.value)
		}
	})
	const entities = formData.entities.map(entity => entity.value)
	const labels = formData.labels?.map(label => label.value)

	const sources = formData.sources?.map(source => {
		return {
			options: createRequestOptionsFromForm(source.options),
			alias: source.alias,
			columns: source.columns
				? source.columns.split(',').map(column => column.trim())
				: [],
			filter: source.filter,
			format: source.format
		}
	})

	const tasks = formData.tasks?.map(task => {
		return {
			query: task.query,
			alias: task.alias
		}
	})

	const sinks = formData.sinks?.map(sink => {
		return {
			options: createRequestOptionsFromForm(sink.options),
			input: sink.input,
			columns: sink.columns
				? sink.columns?.split(',').map(column => column.trim())
				: [],
			format: sink.format,
			filter: sink.filter,
			mode: sink.mode,
			partitionBy: sink.partitionBy
				? sink.partitionBy?.split(',').map(column => column.trim())
				: []
		}
	})

	const request: IApplyFeatureTableRequest = {
		project: project,
		data: {
			name: formData.featureTable,
			entities: entities,
			features: features,
			job: {
				sources: sources,
				tasks: tasks,
				sinks: sinks
			},
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
			name: feature.name,
			type: feature.valueType,
			description: feature.description,
			labels: feature.labels?.map(label => createSelectObjFromString(label)),
			featureTable: createSelectObjFromString(response.data.name)
		}
	})
	const entities = response.data.entities.map(entity =>
		createSelectObjFromString(entity)
	)

	const labels = response.data.labels?.map(label =>
		createSelectObjFromString(label)
	)

	const sources = response.data.job?.sources?.map(source => {
		return {
			options: createFormOptionFromResponse(source.options),
			alias: source.alias,
			name: source.alias,
			columns: source.columns?.join(', '),
			filter: source.filter,
			format: source.format
		}
	})

	const tasks = response.data.job?.tasks?.map(task => {
		return {
			query: task.query,
			alias: task.alias,
			name: task.alias
		}
	})

	const sinks = response.data.job?.sinks?.map(sink => {
		return {
			input: sink.input,
			name: sink.format,
			options: createFormOptionFromResponse(sink.options),
			partitionBy: sink.partitionBy?.join(', '),
			columns: sink.columns?.join(', '),
			mode: sink.mode,
			filter: sink.filter,
			format: sink.format
		}
	})

	const data: IFeatureTableFormData = {
		featureTable: response.data.name,
		description: response.data.description,
		entities: entities,
		features: features,
		sources: sources,
		tasks: tasks,
		sinks: sinks,
		labels: labels,
		multiRecord: response.data.multiRecord,
		ttlMinutes: response.data.ttlMinutes?.toString(),
		metadata: response.metadata
	}
	return data
}

export function makeRequestFromEntityFormData(
	formData: IEntityFormData,
	project: string
) {
	const labels = formData.labels?.map(label => extractValueFromSelectObj(label))
	const valueType = ValueTypes[extractValueFromSelectObj(formData.type)]
	const request: IApplyEntityRequest = {
		project: project,
		data: {
			name: formData.entityName,
			valueType: valueType,
			description: formData.description,
			labels: labels
		}
	}

	return request
}

export function makeEntityFormDataFromResponse(response: IEntityResponseEntry) {
	const labels = response.data.labels?.map(label =>
		createSelectObjFromString(label)
	)
	const type = createSelectObjFromString(response.data.valueType.toString())

	const formData: IEntityFormData = {
		entityName: response.data.name,
		type: type,
		description: response.data.description,
		labels: labels
	}
	return formData
}
