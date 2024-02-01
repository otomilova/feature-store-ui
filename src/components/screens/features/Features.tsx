import { useCallback, useMemo, useRef, useState } from 'react'
// import { AgGridReact } from 'ag-grid-react'
import 'ag-grid-community/styles/ag-grid.css' // Core CSS
import 'ag-grid-community/styles/ag-theme-quartz.css'
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
import { FiGrid, FiPlusCircle, FiSearch } from 'react-icons/fi'
import { LabelsColumn } from '../featureTables/old/LabelsColumn'
import { useNavigate } from 'react-router-dom'

export function Features() {
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
			Name: 'conv_rate',
			Type: 'FLOAT',
			'Feature Table': 'driver_hourly_stats_fresh',
			Labels: 'driver-performance'
		},
		{
			'#': '2',
			Name: 'acc_rate',
			Type: 'INT64',
			'Feature Table': 'driver_hourly_stats_fresh',
			Labels: 'driver-performance'
		},
		{
			'#': '3',
			Name: 'acc_rate',
			Type: 'FLOAT',
			'Feature Table': 'driver_hourly_stats_fresh',
			Labels: 'driver-performance'
		},
		{
			'#': '4',
			Name: 'acc_rate',
			Type: 'FLOAT',
			'Feature Table': 'driver_hourly_stats_fresh',
			Labels: 'driver-performance'
		},
		{
			'#': '5',
			Name: 'acc_rate',
			Type: 'FLOAT',
			'Feature Table': 'driver_hourly_stats_fresh',
			Labels: 'driver-performance'
		},
		{
			'#': '6',
			Name: 'acc_rate',
			Type: 'FLOAT',
			'Feature Table': 'driver_hourly_stats_fresh',
			Labels: 'driver-performance'
		},
		{
			'#': '7',
			Name: 'acc_rate',
			Type: 'FLOAT',
			'Feature Table': 'driver_hourly_stats_fresh',
			Labels: 'driver-performance'
		},
		{
			'#': '8',
			Name: 'acc_rate',
			Type: 'FLOAT',
			'Feature Table': 'driver_hourly_stats_fresh',
			Labels: 'driver-performance'
		},
		{
			'#': '9',
			Name: 'acc_rate',
			Type: 'FLOAT',
			'Feature Table': 'driver_hourly_stats_fresh',
			Labels: 'driver-performance'
		},
		{
			'#': '10',
			Name: 'acc_rate',
			Type: 'FLOAT',
			'Feature Table': 'driver_hourly_stats_fresh',
			Labels: 'driver-performance'
		}
	])

	// Column Definitions: Defines & controls grid columns.
	const [colDefs, setColDefs] = useState([
		{ field: '#', resizable: false, width: 50, maxWidth: 50 },
		{ field: 'Name', resizable: false, width: 100 },
		{
			field: 'Type',
			resizable: false,
			width: 120,
			cellStyle: {
				color: '#6B7280',
				fontWeight: '400'
			}
		},
		{ field: 'Feature Table', resizable: false, width: 100 },
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
					<FiGrid size={12} color='344054' />
					<Heading as='h2' size='l' marginBottom='0px' color='brand.600'>
						Features
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
					onClick={() => navigate('/feature/create')}
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
					onRowClicked={() => navigate('/feature/1')}
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
