export function extractValueFromSelectObj(obj: Record<string, string>): string {
	return obj.value
}

export function createSelectObjFromString(value: string): {
	label: string
	value: string
} {
	return {
		label: value,
		value: value
	}
}

export function createCrumbsForApplyFT(action: string, name: string) {
	return action === 'edit'
		? [
				{
					name: 'FEATURE TABLES',
					link: '/feature-tables'
				},
				{
					name: 'FEATURE TABLE OVERVIEW',
					link: `/feature-tables/${name}`
				},
				{
					name:
						action === 'edit' ? 'EDIT FEATURE TABLE' : 'CREATE FEATURE TABLE',
					link: '#',
					isActive: true
				}
		  ]
		: [
				{
					name: 'FEATURE TABLES',
					link: '/feature-tables'
				},
				{
					name:
						action === 'edit' ? 'EDIT FEATURE TABLE' : 'CREATE FEATURE TABLE',
					link: '#',
					isActive: true
				}
		  ]
}

export function createCrumbsForFTOverview(name: string) {
	return [
		{
			name: 'FEATURE TABLES',
			link: '/feature-tables'
		},
		{
			name: 'FEATURE TABLE OVERVIEW',
			link: `/feature-tables/${name}`,
			isActive: true
		}
	]
}

export function getBacklink(location) {
	return location.substring(0, location.lastIndexOf('/'))
}
