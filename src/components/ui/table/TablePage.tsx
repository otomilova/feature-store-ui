import { useCallback, useId, useRef } from 'react'
import {
	Box,
	Button,
	Center,
	Heading,
	HStack,
	Input,
	InputGroup,
	InputLeftElement
} from '@chakra-ui/react'
import { FiCopy, FiPlus, FiSearch } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import TableComponent from './TableComponent'
import TransitionContainer from '../TransitionContainer'

interface TablePageProps {
	rows: object[]
	columns: object[]
	title: string
	path: string
	allowedCreate: boolean
	allowedClone: boolean
	Icon: () => JSX.Element
}

const TablePage = ({
	rows,
	columns,
	title,
	path,
	allowedCreate = false,
	allowedClone = false,
	Icon
}: TablePageProps) => {
	const navigate = useNavigate()
	const gridRef = useRef()
	const onFilterTextBoxChanged = useCallback(() => {
		gridRef.current.api.setGridOption(
			'quickFilterText',
			document.getElementById(`${filterInputId}`).value
		)
	}, [])

	const filterInputId = useId()

	return (
		<TransitionContainer mt='25px' w='100%' mb='20px'>
			<Box mr={{ md: '135px', lg: '200px', xl: '335px' }}>
				<Center mb='12px'>
					<HStack gap='12px'>
						{Icon()}
						<Heading
							as='h2'
							size={{ md: 'md', lg: 'md', xl: 'lg' }}
							color='brand.600'
						>
							{title}
						</Heading>
					</HStack>
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
							id={filterInputId}
							onInput={onFilterTextBoxChanged}
						/>
					</InputGroup>
					{allowedCreate && (
						<Button
							colorScheme='button'
							leftIcon={<FiPlus />}
							size={{ md: 'sm', lg: 'md', xl: 'lg' }}
							onClick={() => {
								navigate(`/${path}/create`)
							}}
						>
							Create
						</Button>
					)}
					{allowedCreate && allowedClone && (
						<>
							<Button
								colorScheme='button'
								leftIcon={<FiCopy />}
								size={{ md: 'sm', lg: 'md', xl: 'lg' }}
								onClick={() => {
									navigate(`/${path}/clone`)
								}}
							>
								Clone
							</Button>
						</>
					)}
				</HStack>
			</Box>
			<TableComponent
				gridRef={gridRef}
				rows={rows}
				columns={columns}
				path={path}
			/>
		</TransitionContainer>
	)
}

export default TablePage
