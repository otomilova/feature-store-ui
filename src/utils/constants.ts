import { StorageTypes, ValueTypes } from '../types/types.d.ts'

export const FEATURE_TABLE_TITLES = {
	title: 'Feature Table',
	id: 'featureTable'
}

export const FEATURE_TABLES_TITLES = {
	title: 'Feature Tables',
	id: 'featureTables',
	slug: `feature-tables`
}

export const FEATURES_TITLES = {
	title: 'Features',
	id: 'features',
	slug: `features`
}

export const STORAGE = {
	title: 'Storage',
	id: 'storage',
	slug: `storage`
}

export const FEATURE_TITLES = {
	title: 'Feature Name',
	id: 'name',
	modal_id: 'modalFeature'
}

export const ALIAS = {
	title: 'Alias',
	id: 'alias'
}

export const QUERY = {
	title: 'Query',
	id: 'query'
}

export const COLUMNS = {
	title: 'Columns',
	id: 'columns'
}
export const INPUT = {
	title: 'Input',
	id: 'input'
}
export const PARTITION_BY = {
	title: 'Partition By',
	id: 'partitionBy'
}
export const MODE = {
	title: 'Mode',
	id: 'mode'
}
export const FILTER = {
	title: 'Filter',
	id: 'filter'
}
export const FORMAT = {
	title: 'Format',
	id: 'format',
	id_fileFormat: 'fileFormat'
}

export const URL = {
	title: 'URL',
	id: 'fileUrl',
	id_remote: 'remoteUrl'
}

export const OPTIONS = {
	title: 'Options',
	id: 'options'
}

export const TABLE = {
	title: 'Table',
	id: 'table'
}
export const DESCRIPTION = {
	title: 'Description',
	id: 'description'
}

export const LABELS = {
	title: 'Labels',
	id: 'labels'
}

export const ENTITIES = {
	title: 'Entities',
	id: 'entities',
	slug: `entities`
}

export const TYPE = {
	title: 'Type',
	id: 'type'
}

export const SOURCES = {
	title: 'Sources',
	id: 'sources',
	modal_id: 'modalSource'
}

export const TASKS = {
	title: 'Tasks',
	id: 'tasks',
	modal_id: 'modalTasks'
}

export const SINKS = {
	title: 'Sinks',
	id: 'sinks',
	modal_id: 'modalSinks'
}

export const SELECT_TYPE_OPTIONS = Object.keys(ValueTypes).map(type => {
	return { value: type, label: type }
})

export const SELECT_STORAGE_TYPE_OPTIONS = Object.keys(StorageTypes).map(
	type => {
		return { value: type, label: type }
	}
)

export const tabs = [FEATURE_TABLES_TITLES, ENTITIES, FEATURES_TITLES]
