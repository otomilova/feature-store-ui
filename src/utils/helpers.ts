import { IFeatureTablesResponseEntry } from '../types/types'

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

export function createRequestOptionsFromForm(options: object[]): object {
	return options.reduce((acc, curr) => {
		acc[curr.key] = curr.value
		return acc
	}, {})
}

export function createFormOptionFromResponse(options: object): object[] {
	if (!options) return []
	return Object.keys(options).map((key: string) => {
		return {
			key: key,
			value: options[key]
		}
	})
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

export function createCrumbsForFeaturesOverview(name: string) {
	return [
		{
			name: 'FEATURES',
			link: '/features'
		},
		{
			name: 'FEATURE OVERVIEW',
			link: `/features/${name}`,
			isActive: true
		}
	]
}

export function createCrumbsForEntitiesOverview(name: string) {
	return [
		{
			name: 'ENTITIES',
			link: '/entities'
		},
		{
			name: 'ENTITY OVERVIEW',
			link: `/entities/${name}`,
			isActive: true
		}
	]
}

export function createCrumbsForApplyEntity(name: string, action: string) {
	return action === 'edit'
		? [
				{
					name: 'ENTITIES',
					link: '/entities'
				},
				{
					name: 'ENTITY OVERVIEW',
					link: `/entities/${name}`
				},
				{
					name: action === 'edit' ? 'EDIT ENTITY' : 'CREATE ENTITY',
					link: '#',
					isActive: true
				}
		  ]
		: [
				{
					name: 'ENTITIES',
					link: '/entities'
				},
				{
					name: action === 'edit' ? 'EDIT ENTITY' : 'CREATE ENTITY',
					link: '#',
					isActive: true
				}
		  ]
}

export function getBacklink(location: string) {
	return location.substring(0, location.lastIndexOf('/'))
}

export function calcEntitiesInFTs(
	featureTables: IFeatureTablesResponseEntry[]
): Map<string, number> {
	return featureTables?.reduce((acc, ft) => {
		const entitiesInFt = ft.data.entities
		entitiesInFt?.forEach(entity => {
			if (acc.has(entity)) acc.set(entity, acc.get(entity) + 1)
			else acc.set(entity, 1)
			return acc
		})
		return acc
	}, new Map())
}

export function isEmpty(obj: object | object[] | undefined | null) {
	if (!obj) return true
	else if (Array.isArray(obj)) return obj.length === 0
	else return Object.entries(obj).length === 0
}
