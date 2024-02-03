import React from 'react'
import { Box, Tab, TabIndicator, TabList, Tabs } from '@chakra-ui/react'
import { FiGrid, FiHexagon, FiLayers } from 'react-icons/fi'
import { Link, useLocation } from 'react-router-dom'

const tabs = [
	{ name: 'Feature Tables', icon: <FiLayers size={9} /> },
	{ name: 'Entities', icon: <FiHexagon size={9} /> },
	{ name: 'Features', icon: <FiGrid size={9} /> }
]

function makeTab(index) {
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
					<Tab
						as={Link}
						to={`feature-tables`}
						key='featureTables'
						alignContent='start'
						textAlign='left'
						gap='10px'
					>
						<FiLayers size={9} />
						{/*<Icon as={} boxSize={2} />*/}
						Feature Tables
					</Tab>
					<Tab
						as={Link}
						to={`entities`}
						key='entities'
						alignContent='start'
						textAlign='left'
						gap='10px'
					>
						<FiHexagon size={9} />
						{/*<Icon as={} boxSize={2} />*/}
						Entities
					</Tab>
					<Tab
						as={Link}
						to={`features`}
						key='features'
						alignContent='start'
						textAlign='left'
						gap='10px'
					>
						<FiGrid size={9} />
						{/*<Icon as={} boxSize={2} />*/}
						Features
					</Tab>
					{/*{tabs.map(tab => (*/}
					{/*	<Link to={`feature-tables`}>*/}
					{/*		<Tab*/}
					{/*			key={tab.name}*/}
					{/*			alignContent='start'*/}
					{/*			textAlign='left'*/}
					{/*			gap='10px'*/}
					{/*		>*/}
					{/*			{tab.icon}*/}
					{/*			/!*<Icon as={} boxSize={2} />*!/*/}

					{/*			{tab.name}*/}
					{/*		</Tab>*/}
					{/*	</Link>*/}
					{/*))}*/}
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
}

const NavBar: React.FC = () => {
	const { pathname } = useLocation()
	return (
		<Box m={5}>
			{(pathname === '/' ||
				pathname === '/feature-tables' ||
				pathname.includes('/feature-tables/')) &&
				makeTab(0)}
			{pathname === '/entities' && makeTab(1)}
			{(pathname === '/features' || pathname.includes('/feature/')) &&
				makeTab(2)}
		</Box>
	)
}

export default NavBar

//FiHexagon entities
// 	<FiLayers /> tables
// 	<FiGrid /> features
