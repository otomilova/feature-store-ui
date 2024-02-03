import { useCallback, useMemo, useRef, useState } from 'react'
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
	InputLeftElement
} from '@chakra-ui/react'
import { FiLayers, FiPlusCircle, FiSearch } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import { LabelsColumn } from './LabelsColumn.tsx'

export function FT() {
	const navigate = useNavigate()
	const gridRef = useRef()
	const onFilterTextBoxChanged = useCallback(() => {
		gridRef.current.api.setGridOption(
			'quickFilterText',
			document.getElementById('filter-text-box').value
		)
	}, [])

	const [rowData, setRowData] = useState([
		{
			'#': '1',
			Name: 'driver_hourly_stats_fresh',
			Entity: 'Driver',
			Labels: 'driver-performance'
		},
		{
			'#': '2',
			Name: 'driver_hourly_stats',
			Entity: 'Driver',
			Labels: 'driver-performance'
		},
		{
			'#': '3',
			Name: 'driver_hourly',
			Entity: 'Driver',
			Labels: [
				'driver-performance',
				'driver-performance',
				'driver-performance',
				'driver-performance'
			]
		},
		{
			'#': '3',
			Name: 'driver_hourly',
			Entity: 'Driver',
			Labels: [
				'driver-performance',
				'driver-performance',
				'driver-performance',
				'driver-performance'
			]
		},
		{
			'#': '3',
			Name: 'driver_hourly',
			Entity: 'Driver',
			Labels: [
				'driver-performance',
				'driver-performance',
				'driver-performance',
				'driver-performance'
			]
		},
		{
			'#': '3',
			Name: 'driver_hourly',
			Entity: 'Driver',
			Labels: [
				'driver-performance',
				'driver-performance',
				'driver-performance',
				'driver-performance'
			]
		},
		{
			'#': '3',
			Name: 'driver_hourly',
			Entity: 'Driver',
			Labels: [
				'driver-performance',
				'driver-performance',
				'driver-performance',
				'driver-performance'
			]
		},
		{
			'#': '3',
			Name: 'driver_hourly',
			Entity: 'Driver',
			Labels: [
				'driver-performance',
				'driver-performance',
				'driver-performance',
				'driver-performance'
			]
		},
		{
			'#': '3',
			Name: 'driver_hourly',
			Entity: 'Driver',
			Labels: [
				'driver-performance',
				'driver-performance',
				'driver-performance',
				'driver-performance'
			]
		},
		{
			'#': '3',
			Name: 'driver_hourly',
			Entity: 'Driver',
			Labels: [
				'driver-performance',
				'driver-performance',
				'driver-performance',
				'driver-performance'
			]
		},
		{
			'#': '3',
			Name: 'driver_hourly',
			Entity: 'Driver',
			Labels: [
				'driver-performance',
				'driver-performance',
				'driver-performance',
				'driver-performance'
			]
		},
		{
			'#': '3',
			Name: 'driver_hourly',
			Entity: 'Driver',
			Labels: [
				'driver-performance',
				'driver-performance',
				'driver-performance',
				'driver-performance'
			]
		},
		{
			'#': '3',
			Name: 'driver_hourly',
			Entity: 'Driver',
			Labels: [
				'driver-performance',
				'driver-performance',
				'driver-performance',
				'driver-performance'
			]
		},
		{
			'#': '3',
			Name: 'driver_hourly',
			Entity: 'Driver',
			Labels: [
				'driver-performance',
				'driver-performance',
				'driver-performance',
				'driver-performance'
			]
		},
		{
			'#': '3',
			Name: 'driver_hourly',
			Entity: 'Driver',
			Labels: [
				'driver-performance',
				'driver-performance',
				'driver-performance',
				'driver-performance'
			]
		}
	])

	// Column Definitions: Defines & controls grid columns.
	const [colDefs, setColDefs] = useState([
		{ field: '#', resizable: false, width: 50, maxWidth: 50 },
		{ field: 'Name', resizable: false, width: 120 },
		{ field: 'Entity', resizable: false, width: 150, maxWidth: 150 },
		{ field: 'Labels', resizable: false, cellRenderer: 'LabelsColumn' }
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

	return (
		<Box mt='25px' mr='85px' w='100%'>
			<Center mb='12px'>
				<Flex direction='row' gap='12px' alignItems='center' marginBottom='0px'>
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
					onClick={() => navigate('/feature-tables/create')}
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
					onRowClicked={() => navigate('/feature-tables/1')}
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
		</Box>
	)
}
