import Home from '../components/screens/home/Home.tsx'
import { FT } from '../components/screens/featureTables/FT.tsx'
import { Features } from '../components/screens/features/Features.tsx'

export const routes = [
	{
		path: '/',
		component: Home
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
