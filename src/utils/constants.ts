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
	id: 'entities',
	slug: `entities`
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

export const FTColumnState = [
	{
		field: '#',
		resizable: false,
		width: 50,
		maxWidth: 50,
		cellDataType: 'text'
	},
	{
		field: 'Name',
		resizable: false,
		width: 100
	},
	{
		field: 'Entities',
		resizable: false,
		width: 50,
		maxWidth: 1000
	},
	{
		field: 'Labels',
		resizable: false,
		width: 50,
		autoHeight: true,
		cellRenderer: 'LabelsColumn'
		//cellDataType: 'object'
	}
]

export const tabs = [FEATURE_TABLES_TITLES, ENTITIES, FEATURES_TITLES]
