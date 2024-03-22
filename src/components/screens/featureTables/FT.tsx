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
import { useFeatureTables } from './hooks/useFeatureTables'
import Loader from '../../ui/Loader'
import { useProject } from '../../hooks/useProject.js'
import { IFeatureTablesResponseEntry } from '../../../types/types'
import { FEATURE_TABLES_TITLES, FTColumnState } from '../../../utils/constants'
import { motion } from 'framer-motion'

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
	}

	return (
		<Box
			mt='25px'
			w='100%'
			mb='20px'
			as={motion.div}
			initial={{ opacity: 0, transition: { duration: 0.1 } }}
			animate={{ opacity: 1, transition: { duration: 0 } }}
			exit={{ opacity: 0, transition: { duration: 0.2 } }}
		>
			{isLoading ? (
				<Loader />
			) : (
				<>
					<Box mr={{ md: '135px', lg: '200px', xl: '335px' }}>
						<Center mb='12px'>
							<Flex
								direction='row'
								gap='12px'
								alignItems='center'
								marginBottom='0px'
							>
								<FiLayers size='0.9em' color='344054' />
								<Heading
									as='h2'
									size={{ md: 'md', lg: 'md', xl: 'lg' }}
									marginBottom='0px'
									color='brand.600'
								>
									{FEATURE_TABLES_TITLES.title}
								</Heading>
							</Flex>
						</Center>
						<HStack mb={5}>
							<InputGroup size={{ md: 'sm', lg: 'md', xl: 'lg' }}>
								<InputLeftElement pointerEvents='none'>
									<FiSearch color='CBD5E0' />
								</InputLeftElement>
								<Input
									type='search'
									placeholder='Search'
									size={{ md: 'sm', lg: 'md', xl: 'lg' }}
									w={{ md: '330px', lg: '380px', xl: '480px' }}
									id='filter-text-box'
									onInput={onFilterTextBoxChanged}
								/>
							</InputGroup>
							<Button
								colorScheme='button'
								leftIcon={<FiPlusCircle />}
								size={{ md: 'sm', lg: 'md', xl: 'lg' }}
								onClick={() => {
									navigate('/feature-tables/create')
								}}
							>
								Create new
							</Button>
						</HStack>
					</Box>
					{/* The AG Grid component */}
					<Box
						className='ag-theme-quartz'
						width='100%'
						height='85%'
						fontFamily='Inter'
						fontSize={{ md: '16px', lg: '18px', xl: '18px' }}
						pr={{ md: '135px', lg: '200px', xl: '335px' }}
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
							rowHeight={{ md: '25', lg: '30', xl: '40' }}
							defaultColDef={{
								cellStyle: params => ({
									display: 'flex',
									alignItems: 'center'
								})
							}}
						/>
					</Box>
				</>
			)}
		</Box>
	)
}
