import { Route, Routes, useLocation } from 'react-router-dom'
import { FT } from '../components/screens/featureTables/FT.tsx'
import { Features } from '../components/screens/features/Features.tsx'
import { Entities } from '../components/screens/entities/Entities'
import App from '../components/App.tsx'
import Home from '../components/screens/home/Home.tsx'
import ApplyFeatureTable from '../components/screens/featureTables/ApplyFeatureTable.tsx'
import FeatureOverview from '../components/screens/features/FeatureOverview.tsx'
import FeatureCreate from '../components/screens/features/FeatureCreate.tsx'
import FeatureEdit from '../components/screens/features/FeatureEdit.tsx'
import FeatureTableOverview from '../components/screens/featureTables/FeatureTableOverview.tsx'
import { AnimatePresence } from 'framer-motion'

const AnimatedRoutes = () => {
	const location = useLocation()
	return (
		<AnimatePresence>
			<Routes location={location} key={location.pathname}>
				<Route element={<App />}>
					<Route path='/' element={<Home />} />
					<Route path='feature-tables' element={<FT />} />
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
					<Route path='feature/:id' element={<FeatureOverview />} />
					<Route path='feature/:id/edit' element={<FeatureEdit />} />
					<Route path='feature/create' element={<FeatureCreate />} />
					<Route path='features' element={<Features />} />
					<Route path='entities' element={<Entities />} />
				</Route>
			</Routes>
		</AnimatePresence>
	)
}

export default AnimatedRoutes
