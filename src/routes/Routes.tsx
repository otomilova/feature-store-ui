import { BrowserRouter } from 'react-router-dom'
import AnimatedRoutes from './AnimatedRoutes.tsx'

const Router = () => {
	return (
		<BrowserRouter>
			<AnimatedRoutes />
			{/*<Routes>*/}
			{/*	<Route element={<App />}>*/}
			{/*		<Route path='/' element={<Home />} />*/}
			{/*		<Route path='feature-tables' element={<FT />} />*/}
			{/*		<Route*/}
			{/*			path='feature-tables/:name'*/}
			{/*			element={<FeatureTableOverview />}*/}
			{/*		/>*/}
			{/*		<Route*/}
			{/*			path='feature-tables/:name/edit'*/}
			{/*			element={<ApplyFeatureTable action='edit' />}*/}
			{/*		/>*/}
			{/*		<Route*/}
			{/*			path='feature-tables/create'*/}
			{/*			element={<ApplyFeatureTable action='create' />}*/}
			{/*		/>*/}
			{/*		<Route path='feature/:id' element={<FeatureOverview />} />*/}
			{/*		<Route path='feature/:id/edit' element={<FeatureEdit />} />*/}
			{/*		<Route path='feature/create' element={<FeatureCreate />} />*/}
			{/*		<Route path='features' element={<Features />} />*/}
			{/*		<Route path='entities' element={<Entities />} />*/}
			{/*	</Route>*/}
			{/*</Routes>*/}
		</BrowserRouter>
	)
}

export default Router
