import * as React from 'react'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
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
import { useFeatureTables } from './useFeatureTables'
import Loader from '../../ui/Loader'
import { useProject } from '../../hooks/useProject.js'
import { IFeatureTablesResponseEntry } from '../../../types/types'
import { FEATURE_TABLES_TITLES, FTColumnState } from '../../../utils/constants'

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

	const {
		data: featureTables,
		isLoading
	}: { featureTables: IFeatureTablesResponseEntry[]; isLoading: boolean } =
		useFeatureTables(project)
	const FTRows = useMemo(
		() =>
			featureTables?.map((table, index) => {
				const t = {
					'#': index + 1,
					Name: table.data.name,
					Entities: table.data.entities?.join(', '),
					Labels: table.data.labels
				}

				return t
			}),
		[featureTables]
	)

	const [rowData, setRowData] = useState([])
	useEffect(() => {
		setRowData(FTRows)
	}, [FTRows])

	// Column Definitions: Defines & controls grid columns.
	const [colDefs, setColDefs] = useState(FTColumnState)
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
		<Box mt='25px' w='100%'>
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
								{FEATURE_TABLES_TITLES.title}
							</Heading>
						</Flex>
					</Center>
					<HStack mb={5} mr='108px'>
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
							}}
						>
							Create new
						</Button>
					</HStack>
					{/* The AG Grid component */}
					<Box
						className='ag-theme-quartz'
						width='90%'
						height='85%'
						fontFamily='Inter'
					>
						<AgGridReact
							onRowClicked={e => {
								navigate(`/feature-tables/${e.data.Name}`)
							}}
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
