import * as React from 'react'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
// import { AgGridReact } from 'ag-grid-react'
import 'ag-grid-community/styles/ag-grid.css' // Core CSS
import 'ag-grid-community/styles/ag-theme-quartz.css'
import '../../../assets/styles/ag-theme-custom.css'
import { AgGridReact } from 'ag-grid-react/lib/agGridReact'
import {
	Box,
	Button,
	Center,
	Flex,
	Heading,
	HStack,
	Input,
	InputGroup,
	InputLeftElement,
	useToast
} from '@chakra-ui/react'
import { FiLayers, FiPlusCircle, FiSearch } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import { LabelsColumn } from './LabelsColumn.tsx'
import { useFeatureTables } from './useFeatureTables.js'
import Loader from '../../ui/Loader'
import { useProject } from '../../hooks/useProject.js'

export function FT() {
	const { project } = useProject()
	const navigate = useNavigate()
	const gridRef = useRef()
	const onFilterTextBoxChanged = useCallback(() => {
		gridRef.current.api.setGridOption(
			'quickFilterText',
			document.getElementById('filter-text-box').value
		)
	}, [])

	const { data: featureTables, isLoading } = useFeatureTables(project)
	const FTRows = useMemo(
		() =>
			featureTables?.map((table, index) => {
				const t = {
					'#': index + 1,
					Name: table.data.name,
					Entities: table.data.entities,
					Labels: ''
				}

				return t
			}),
		[featureTables]
	)

	const [rowData, setRowData] = useState([])
	useEffect(() => {
		setRowData(FTRows)
	}, [FTRows])

	// const [rowData, setRowData] = useState([
	// 	{
	// 		'#': '1',
	// 		Name: 'driver_hourly_stats_fresh',
	// 		Entity: 'Driver',
	// 		Labels: 'driver-performance'
	// 	},
	// 	{
	// 		'#': '2',
	// 		Name: 'driver_hourly_stats',
	// 		Entity: 'Driver',
	// 		Labels: 'driver-performance'
	// 	},
	// 	{
	// 		'#': '3',
	// 		Name: 'driver_hourly',
	// 		Entity: 'Driver',
	// 		Labels: [
	// 			'driver-performance',
	// 			'driver-performance',
	// 			'driver-performance',
	// 			'driver-performance'
	// 		]
	// 	},
	// 	{
	// 		'#': '3',
	// 		Name: 'driver_hourly',
	// 		Entity: 'Driver',
	// 		Labels: [
	// 			'driver-performance',
	// 			'driver-performance',
	// 			'driver-performance',
	// 			'driver-performance'
	// 		]
	// 	},
	// 	{
	// 		'#': '3',
	// 		Name: 'driver_hourly',
	// 		Entity: 'Driver',
	// 		Labels: [
	// 			'driver-performance',
	// 			'driver-performance',
	// 			'driver-performance',
	// 			'driver-performance'
	// 		]
	// 	},
	// 	{
	// 		'#': '3',
	// 		Name: 'driver_hourly',
	// 		Entity: 'Driver',
	// 		Labels: [
	// 			'driver-performance',
	// 			'driver-performance',
	// 			'driver-performance',
	// 			'driver-performance'
	// 		]
	// 	},
	// 	{
	// 		'#': '3',
	// 		Name: 'driver_hourly',
	// 		Entity: 'Driver',
	// 		Labels: [
	// 			'driver-performance',
	// 			'driver-performance',
	// 			'driver-performance',
	// 			'driver-performance'
	// 		]
	// 	},
	// 	{
	// 		'#': '3',
	// 		Name: 'driver_hourly',
	// 		Entity: 'Driver',
	// 		Labels: [
	// 			'driver-performance',
	// 			'driver-performance',
	// 			'driver-performance',
	// 			'driver-performance'
	// 		]
	// 	},
	// 	{
	// 		'#': '3',
	// 		Name: 'driver_hourly',
	// 		Entity: 'Driver',
	// 		Labels: [
	// 			'driver-performance',
	// 			'driver-performance',
	// 			'driver-performance',
	// 			'driver-performance'
	// 		]
	// 	},
	// 	{
	// 		'#': '3',
	// 		Name: 'driver_hourly',
	// 		Entity: 'Driver',
	// 		Labels: [
	// 			'driver-performance',
	// 			'driver-performance',
	// 			'driver-performance',
	// 			'driver-performance'
	// 		]
	// 	},
	// 	{
	// 		'#': '3',
	// 		Name: 'driver_hourly',
	// 		Entity: 'Driver',
	// 		Labels: [
	// 			'driver-performance',
	// 			'driver-performance',
	// 			'driver-performance',
	// 			'driver-performance'
	// 		]
	// 	},
	// 	{
	// 		'#': '3',
	// 		Name: 'driver_hourly',
	// 		Entity: 'Driver',
	// 		Labels: [
	// 			'driver-performance',
	// 			'driver-performance',
	// 			'driver-performance',
	// 			'driver-performance'
	// 		]
	// 	},
	// 	{
	// 		'#': '3',
	// 		Name: 'driver_hourly',
	// 		Entity: 'Driver',
	// 		Labels: [
	// 			'driver-performance',
	// 			'driver-performance',
	// 			'driver-performance',
	// 			'driver-performance'
	// 		]
	// 	},
	// 	{
	// 		'#': '3',
	// 		Name: 'driver_hourly',
	// 		Entity: 'Driver',
	// 		Labels: [
	// 			'driver-performance',
	// 			'driver-performance',
	// 			'driver-performance',
	// 			'driver-performance'
	// 		]
	// 	},
	// 	{
	// 		'#': '3',
	// 		Name: 'driver_hourly',
	// 		Entity: 'Driver',
	// 		Labels: [
	// 			'driver-performance',
	// 			'driver-performance',
	// 			'driver-performance',
	// 			'driver-performance'
	// 		]
	// 	}
	// ])

	// Column Definitions: Defines & controls grid columns.
	const [colDefs, setColDefs] = useState([
		{
			field: '#',
			resizable: false,
			width: 50,
			maxWidth: 50,
			cellDataType: 'text'
		},
		{
			field: 'Name',
			resizable: false,
			width: 100
		},
		{
			field: 'Entities',
			resizable: false,
			width: 50,
			maxWidth: 1000
		},
		{
			field: 'Labels',
			resizable: false,
			width: 50,
			cellRenderer: 'LabelsColumn'
		}
	])
	const components = useMemo(() => {
		return {
			LabelsColumn: LabelsColumn
		}
	}, [])

	const autoSizeStrategy = {
		type: 'fitGridWidth',
		defaultMinWidth: 100
		// columnLimits: [
		// 	{
		// 		colId: 'name',
		// 		minWidth: 200
		// 	}
		// ]
	}

	// const autoSizeStrategy = {
	// 	type: 'fitCellContents'
	// }
	const toast = useToast()
	return (
		<Box mt='25px' mr='85px' w='100%'>
			{isLoading ? (
				<Loader />
			) : (
				<>
					<Center mb='12px'>
						<Flex
							direction='row'
							gap='12px'
							alignItems='center'
							marginBottom='0px'
						>
							<FiLayers size={12} color='344054' />
							<Heading as='h2' size='l' marginBottom='0px' color='brand.600'>
								Feature Tables
							</Heading>
						</Flex>
					</Center>
					<HStack mb={5}>
						<InputGroup size='sm'>
							<InputLeftElement pointerEvents='none'>
								<FiSearch color='CBD5E0' />
							</InputLeftElement>
							<Input
								type='search'
								placeholder='Search'
								w='330px'
								id='filter-text-box'
								onInput={onFilterTextBoxChanged}
							/>
						</InputGroup>
						<Button
							colorScheme='button'
							leftIcon={<FiPlusCircle />}
							size='sm'
							onClick={() => {
								navigate('/feature-tables/create')
								toast({
									position: 'top-right',
									title: 'Account created.',
									description: "We've created your account for you.",
									status: 'success',
									duration: 4000,
									isClosable: true
								})
							}}
						>
							Create new
						</Button>
					</HStack>
					{/* The AG Grid component */}
					<Box
						className='ag-theme-quartz'
						width='100%'
						height='85%'
						fontFamily='Inter'
					>
						<AgGridReact
							onRowClicked={e => {
								navigate(`/feature-tables/${e.data.Name}`)
							}}
							// onRowClicked={e => alert(e.rowIndex)}
							rowData={rowData}
							columnDefs={colDefs}
							pagination={true}
							ref={gridRef}
							autoSizeStrategy={autoSizeStrategy}
							components={components}
							// rowHeight='150px'
						/>
					</Box>
				</>
			)}
		</Box>
	)
}
