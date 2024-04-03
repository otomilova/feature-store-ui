function getLabelString(labels: string[]) {
	if (labels) {
		return labels.join(', ')
	}
	return ''
}

export const FTColumnState = [
	{
		field: '#',
		resizable: false,
		flex: 1,
		cellDataType: 'text'
	},
	{
		field: 'Name',
		resizable: false,
		flex: 3
	},
	{
		field: 'Entities',
		resizable: false,
		flex: 4
	},
	{
		field: 'Labels',
		resizable: false,
		flex: 4,
		autoHeight: true,
		cellRenderer: 'LabelsColumn',
		getQuickFilterText: params => {
			return getLabelString(params.value?.value)
		},
		valueFormatter: value => value
	}
]

export const FeaturesColumnState = [
	{
		field: '#',
		resizable: false,
		flex: 2,
		cellDataType: 'text'
	},
	{
		field: 'Name',
		resizable: false,
		flex: 5
	},
	{
		field: 'Type',
		resizable: false,
		flex: 4
	},
	{
		field: 'Feature Table',
		resizable: false,
		flex: 5
	},
	{
		field: 'Labels',
		resizable: false,
		flex: 6,
		autoHeight: true,
		cellRenderer: 'LabelsColumn',
		getQuickFilterText: params => {
			return getLabelString(params.value?.value)
		},
		valueFormatter: value => value
	}
]

export const EntitiesColumnState = [
	{
		field: '#',
		resizable: false,
		flex: 2,
		cellDataType: 'text'
	},
	{
		field: 'Name',
		resizable: false,
		flex: 5
	},
	{
		field: 'Type',
		resizable: false,
		flex: 4
	},
	{
		field: '# of usage',
		resizable: false,
		flex: 5
	},
	{
		field: 'Labels',
		resizable: false,
		flex: 6,
		autoHeight: true,
		cellRenderer: 'LabelsColumn',
		getQuickFilterText: params => {
			return getLabelString(params.value?.value)
		},
		valueFormatter: value => value
	}
]
