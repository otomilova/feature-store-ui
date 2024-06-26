import { Route, Routes, useLocation } from 'react-router-dom'
import { Entities } from '../components/screens/entities/Entities'
import App from '../components/App.tsx'
import Home from '../components/screens/home/Home.tsx'
import ApplyFeatureTable from '../components/screens/featureTables/featureTablesForms/ApplyFeatureTable.tsx'
import FeatureOverview from '../components/screens/features/featureOverview/FeatureOverview.tsx'
import FeatureTableOverview from '../components/screens/featureTables/featureTableOverview/FeatureTableOverview.tsx'
import { AnimatePresence } from 'framer-motion'
import { FeatureTables } from '../components/screens/featureTables/FeatureTables.tsx'
import { Features } from '../components/screens/features/Features.tsx'
import EntityOverview from '../components/screens/entities/entityOverview/EntityOverview.tsx'
import ApplyEntity from '../components/screens/entities/entitiesForms/ApplyEntity'
import CloneFeatureTable from '../components/screens/featureTables/featureTablesForms/cloneFT/CloneFeatureTable'
import CloneEntity from '../components/screens/entities/entitiesForms/cloneEntity/CloneEntity'

const AnimatedRoutes = () => {
	const location = useLocation()
	return (
		<AnimatePresence mode='wait'>
			<Routes location={location} key={location.pathname}>
				<Route element={<App />}>
					<Route path='/' element={<Home />} />
					<Route path='feature-tables' element={<FeatureTables />} />
					<Route
						path='feature-tables/:name'
						element={<FeatureTableOverview />}
					/>
					<Route
						path='feature-tables/:name/edit'
						element={<ApplyFeatureTable action='edit' />}
					/>
					<Route
						path='feature-tables/create'
						element={<ApplyFeatureTable action='create' />}
					/>
					<Route path='feature-tables/clone' element={<CloneFeatureTable />} />
					<Route path='features/:name' element={<FeatureOverview />} />
					<Route path='features' element={<Features />} />
					<Route path='entities' element={<Entities />} />
					<Route path='entities/:name' element={<EntityOverview />} />
					<Route path='entities/clone' element={<CloneEntity />} />
					<Route
						path='entities/:name/edit'
						element={<ApplyEntity action='edit' />}
					/>
					<Route
						path='entities/create'
						element={<ApplyEntity action='create' />}
					/>
				</Route>
			</Routes>
		</AnimatePresence>
	)
}

export default AnimatedRoutes
