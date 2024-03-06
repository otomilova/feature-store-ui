import { ValueTypes } from '../types/types.d.ts'

export const FEATURE_TABLE_TITLES = {
	title: 'Feature Table',
	id: 'featureTable'
}

export const FEATURE_TABLES_TITLES = {
	title: 'Feature Tables',
	id: 'featureTables'
}

export const FEATURES_TITLES = {
	title: 'Features',
	id: 'features'
}

export const FEATURE_TITLES = {
	title: 'Feature Name',
	id: 'featureName'
}

export const DESCRIPTION = {
	title: 'Description',
	id: 'description'
}

export const PROJECT = {
	title: 'Project',
	id: 'project'
}

export const LABELS = {
	title: 'Labels',
	id: 'labels'
}

export const ENTITIES = {
	title: 'Entities',
	id: 'entities'
}

export const TYPE = {
	title: 'Type',
	id: 'type'
}

export const MODAL_FEATURE = {
	id: 'modalFeature'
}

export const SELECT_TYPE_OPTIONS = Object.keys(ValueTypes).map(type => {
	return { value: type, label: type }
})
