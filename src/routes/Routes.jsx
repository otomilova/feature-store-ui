import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { FT } from '../components/screens/featureTables/FT.tsx'
import { Features } from '../components/screens/features/Features.tsx'
import { Entities } from '../components/screens/entities/Entities'
import App from '../components/App.tsx'
import Home from '../components/screens/home/Home.tsx'
import FeatureTableEdit from '../components/screens/featureTables/FeatureTableEdit.tsx'
import FeatureOverview from '../components/screens/features/FeatureOverview.tsx'
import FeatureCreate from '../components/screens/features/FeatureCreate.tsx'
import FeatureEdit from '../components/screens/features/FeatureEdit.tsx'
import FeatureTableOverview from '../components/screens/featureTables/FeatureTableOverview.tsx'

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<App />}>
					<Route path='/' element={<Home />} />
					<Route path='feature-tables' element={<FT />} />
					<Route path='feature-table/:id' element={<FeatureTableOverview />} />
					<Route
						path='feature-table/:id/edit'
						element={<FeatureTableEdit action='edit' />}
					/>
					<Route
						path='feature-table/create'
						element={<FeatureTableEdit action='create' />}
					/>
					<Route path='feature/:id' element={<FeatureOverview />} />
					<Route path='feature/:id/edit' element={<FeatureEdit />} />
					<Route path='feature/create' element={<FeatureCreate />} />
					<Route path='features' element={<Features />} />
					<Route path='entities' element={<Entities />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default Router
