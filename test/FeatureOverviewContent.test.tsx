import { render } from '@testing-library/react'
import { test } from '@jest/globals'
import FeatureOverviewContent from '../src/components/screens/features/featureOverview/FeatureOverviewContent'
import { ValueTypes } from '../src/types/types'
import { MemoryRouter } from 'react-router-dom'

const mockedUseNavigate = jest.fn()
jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useNavigate: () => mockedUseNavigate
}))

test('FeatureOverviewContent renders correctly', () => {
	const { getByText } = render(
		<MemoryRouter>
			<FeatureOverviewContent
				feature={{ name: 'test_feature', valueType: ValueTypes.BOOL }}
			/>
		</MemoryRouter>
	)

	expect(getByText('Feature Overview')).toBeDefined()
	expect(getByText('test_feature')).toBeDefined()
	expect(getByText('BOOL')).toBeDefined()
})
