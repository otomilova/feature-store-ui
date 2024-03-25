import { Route, Routes, useLocation } from 'react-router-dom'
import { Entities } from '../components/screens/entities/Entities'
import App from '../components/App.tsx'
import Home from '../components/screens/home/Home.tsx'
import ApplyFeatureTable from '../components/screens/featureTables/ApplyFeatureTable.tsx'
import FeatureOverview from '../components/screens/features/featureOverview/FeatureOverview.tsx'
import FeatureTableOverview from '../components/screens/featureTables/FeatureTableOverview/FeatureTableOverview.tsx'
import { AnimatePresence } from 'framer-motion'
import { FeatureTables } from '../components/screens/featureTables/FeatureTables.tsx'
import { Features } from '../components/screens/features/Features.tsx'

const AnimatedRoutes = () => {
	const location = useLocation()
	return (
		<AnimatePresence>
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
					<Route path='features/:name' element={<FeatureOverview />} />
					<Route path='features' element={<Features />} />
					<Route path='entities' element={<Entities />} />
				</Route>
			</Routes>
		</AnimatePresence>
	)
}

export default AnimatedRoutes
