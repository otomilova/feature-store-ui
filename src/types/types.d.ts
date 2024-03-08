export enum ValueTypes {
	INVALID = 'INVALID',
	BYTES = 'BYTES',
	BOOL = 'BOOL',
	FLOAT = 'FLOAT',
	INT32 = 'INT32',
	INT64 = 'INT64',
	DOUBLE = 'DOUBLE',
	STRING = 'STRING',
	BYTES_LIST = 'BYTES_LIST',
	BOOL_LIST = 'BOOL_LIST',
	INT32_LIST = 'INT32_LIST',
	INT64_LIST = 'INT64_LIST',
	DOUBLE_LIST = 'DOUBLE_LIST',
	FLOAT_LIST = 'FLOAT_LIST',
	STRING_LIST = 'STRING_LIST',
	TIMESTAMP = 'TIMESTAMP',
	STRUCT = 'STRUCT',
	VARIABLE = 'VARIABLE'
}

export interface IApplyFeatureTableRequest {
	project: string
	data: {
		name: string
		entities: string[]
		features?: {
			name: string
			valueType: ValueTypes
			description?: string
			labels?: string[]
		}[]
		description?: string
		labels?: string[]
		ttlMinutes?: number
		multiRecord?: boolean
	}
}

export interface IFeatureTableFormData {
	featureTable: string
	description?: string
	entities?: {
		label: string
		value: string
	}[]
	features?: {
		featureName: string
		type: ValueTypes
		description?: string
		labels?: {
			label: string
			value: string
		}[]
		featureTable?: {
			label: string
			value: string
		}
	}[]
	labels?: {
		label: string
		value: string
	}[]
	ttlMinutes?: string
	multiRecord?: boolean
}

export interface IFeatureTablesResponseEntry {
	data: {
		name: string
		description?: string
		entities?: string[]
		features?: {
			name: string
			valueType: ValueTypes
			description?: string
			labels?: string[]
		}[]
		labels?: string[]
		ttlMinutes?: number
		multiRecord?: boolean
	}
	metadata: {
		createdTimestamp?: string
		lastUpdatedTimestamp?: string
		revision?: string
		hash?: string
	}
}
