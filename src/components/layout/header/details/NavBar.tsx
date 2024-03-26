import React, { useCallback } from 'react'
import { Box, Tab, TabIndicator, TabList, Tabs } from '@chakra-ui/react'
import { FiGrid, FiHexagon, FiLayers } from 'react-icons/fi'
import { Link, useLocation } from 'react-router-dom'
import {
	ENTITIES,
	FEATURE_TABLES_TITLES,
	FEATURES_TITLES,
	tabs
} from '../../../../utils/constants.ts'

const NavBar: React.FC = () => {
	const makeIcon = useCallback((component: string, size = '0.7em') => {
		switch (component) {
			case FEATURE_TABLES_TITLES.title:
				return <FiLayers size={size} />
			case FEATURES_TITLES.title:
				return <FiGrid size={size} />
			case ENTITIES.title:
				return <FiHexagon size={size} />
			default:
				return <FiHexagon size={size} />
		}
	}, [])

	const makeTab = useCallback(index => {
		return (
			<>
				<Tabs
					position='relative'
					orientation='vertical'
					align='start'
					isFitted='true'
					defaultIndex={index}
				>
					<TabList alignContent='start' alignItems='start'>
						{tabs.map(tab => {
							return (
								<Tab
									as={Link}
									to={tab.slug}
									key={tab.id}
									alignContent='start'
									textAlign='left'
									gap='10px'
									fontSize={{
										sm: '14px',
										md: '16px',
										lg: '18px',
										xl: '22px'
									}}
								>
									{makeIcon(tab.title)}
									{tab.title}
								</Tab>
							)
						})}
					</TabList>
					<TabIndicator
						mt='-1.5px'
						height='2px'
						bg='blue.500'
						borderRadius='1px'
					/>
				</Tabs>
			</>
		)
	}, [])

	const { pathname } = useLocation()

	return (
		<Box m={5}>
			{(pathname === '/' ||
				pathname === '/feature-tables' ||
				pathname.includes('/feature-tables/')) &&
				makeTab(0)}
			{(pathname === '/entities' || pathname.includes('/entities/')) &&
				makeTab(1)}
			{(pathname === '/features' || pathname.includes('/features/')) &&
				makeTab(2)}
		</Box>
	)
}

export default NavBar
