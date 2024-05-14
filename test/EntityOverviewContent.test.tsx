import { render } from '@testing-library/react'
import { test } from '@jest/globals'
import { ValueTypes } from '../src/types/types'
import { MemoryRouter } from 'react-router-dom'
import EntityOverviewContent from '../src/components/screens/entities/entityOverview/EntityOverviewContent'

const mockedUseNavigate = jest.fn()
jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useNavigate: () => mockedUseNavigate
}))

test('EntityOverviewContent renders correctly', () => {
	const { getByText } = render(
		<MemoryRouter>
			<EntityOverviewContent
				entity={{
					data: {
						name: 'test_entity',
						valueType: ValueTypes.INT64,
						description: 'test_description',
						labels: ['test_labels1', 'test_labels2']
					},
					metadata: {
						createdTimestamp: 'test_createdTimestamp',
						lastUpdatedTimestamp: 'lastUpdatedTimestamp'
					}
				}}
				entitiesInFTs={new Map(Object.entries({ test_entity: 5 }))}
				name='test_name'
			/>
		</MemoryRouter>
	)

	expect(getByText('Entity Overview')).toBeDefined()
	expect(getByText('test_entity')).toBeDefined()
	expect(getByText('INT64')).toBeDefined()
	expect(getByText('test_description')).toBeDefined()
	expect(getByText('test_labels1')).toBeDefined()
	expect(getByText('test_labels2')).toBeDefined()
	expect(getByText('5')).toBeDefined()
})
