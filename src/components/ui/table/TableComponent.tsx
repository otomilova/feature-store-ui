import React, { useEffect, useMemo, useState } from 'react'
import { Box } from '@chakra-ui/react'
import { LabelsColumn } from './LabelsColumn'
import { AgGridReact } from 'ag-grid-react'
import { useNavigate } from 'react-router-dom'
import 'ag-grid-community/styles/ag-grid.css' // Core CSS
import 'ag-grid-community/styles/ag-theme-quartz.css'
import '../../../assets/styles/ag-theme-custom.css'

const TableComponent: React.FC = ({ rows, columns, path, gridRef }) => {
	const navigate = useNavigate()

	const [rowData, setRowData] = useState([])
	useEffect(() => {
		setRowData(rows)
	}, [rows])

	// Column Definitions: Defines & controls grid columns.
	const [colDefs, setColDefs] = useState(columns)
	const components = useMemo(() => {
		return {
			LabelsColumn: LabelsColumn
		}
	}, [columns])

	const autoSizeStrategy = {
		type: 'fitGridWidth',
		defaultMinWidth: 100
	}
	return (
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
					navigate(`/${path}/${e.data.Name}`)
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
	)
}

export default TableComponent