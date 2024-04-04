import { ValueTypes } from '../types/types.d.ts'

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

export const FEATURE_TITLES = {
	title: 'Feature Name',
	id: 'name',
	modal_id: 'modalFeature'
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

export const tabs = [FEATURE_TABLES_TITLES, ENTITIES, FEATURES_TITLES]
