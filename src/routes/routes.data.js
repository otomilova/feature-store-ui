import { FT } from '../components/screens/featureTables/FT.tsx'
import { Features } from '../components/screens/features/Features.tsx'
import App from '../components/App.js'

export const routes = [
	{
		path: '/',
		component: App
	},
	{
		path: 'feature-tables',
		component: FT
	},
	{
		path: 'features',
		component: Features
	}
	// {
	// 	path: 'entities',
	// 	component: Entities,
	// },
]
