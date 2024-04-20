export enum ValueTypes {
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

export enum StorageTypes {
	FILE_TYPE = 'FILE_TYPE',
	HIVE_TYPE = 'HIVE_TYPE',
	REMOTE_TYPE = 'REMOTE_TYPE'
}

export interface IApplyFeatureTableRequest {
	project: string
	data: {
		name: string
		entities: string[]
		features?: IFeature[]
		offlineStorage?: object
		job: {
			sources?: {
				options: object
				alias: string
				columns?: string[]
				filter?: string
				format: string
			}[]
			tasks?: {
				query: string
				alias: string
			}[]
			sinks?: {
				input: string
				options: object
				partitionBy?: string[]
				columns?: string[]
				mode?: string
				filter?: string
				format: string
			}[]
		}
		description?: string
		labels?: string[]
		ttlMinutes?: number
		multiRecord?: boolean
	}
}

export interface IFeatureTableFormData {
	featureTable: string
	description?: string
	offlineStorage?: object
	entities: {
		label: string
		value: string
	}[]
	features?: {
		name: string
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
	sources?: {
		options: object[]
		alias: string
		name: string
		columns?: string
		filter?: string
		format: string
	}[]
	tasks?: {
		query: string
		alias: string
		name: string
	}[]
	sinks?: {
		input: string
		name: string
		options: object[]
		partitionBy?: string
		columns?: string
		mode?: string
		filter?: string
		format: string
	}[]

	labels?: {
		label: string
		value: string
	}[]
	ttlMinutes?: string
	multiRecord?: boolean
	metadata?: {
		createdTimestamp?: string
		lastUpdatedTimestamp?: string
		revision?: string
		hash?: string
	}
}

export interface IFeatureTablesResponseEntry extends IApplyFeatureTableRequest {
	metadata: {
		createdTimestamp?: string
		lastUpdatedTimestamp?: string
		revision?: string
		hash?: string
	}
}

export interface IFeature {
	name: string
	valueType: ValueTypes
	featureTableName?: string
	description?: string
	labels?: string[]
}

export interface IEntityResponseEntry {
	data: {
		name: string
		valueType: ValueTypes
		description: string
		labels: string[]
	}
	metadata: {
		createdTimestamp?: string
		lastUpdatedTimestamp?: string
	}
}

export interface IApplyEntityRequest {
	project: string
	data: {
		name: string
		valueType: ValueTypes
		description?: string
		labels?: string[]
	}
}

export interface IEntityFormData {
	entityName: string
	type: {
		label: string
		value: string
	}
	description?: string
	labels?: {
		label: string
		value: string
	}[]
}

export interface ICreateProjectRequest {
	name: string
	//description?: string
}
