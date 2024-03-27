import React, { useCallback, useId, useRef } from 'react'
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
import { FiPlusCircle, FiSearch } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import TableComponent from './TableComponent'
import TransitionContainer from '../TransitionContainer'
import SpinnerLoader from '../SpinnerLoader'

interface TablePageProps {
	isLoading: boolean
	Icon: () => JSX.Element
	rows: never
	columns: never
	title: string
	path: string
	allowedCreate: boolean
}

const TablePage: React.FC = ({
	rows,
	columns,
	isLoading,
	Icon,
	title,
	path,
	allowedCreate = false
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
			{isLoading ? (
				<SpinnerLoader />
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
								{Icon()}

								<Heading
									as='h2'
									size={{ md: 'md', lg: 'md', xl: 'lg' }}
									marginBottom='0px'
									color='brand.600'
								>
									{title}
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
									id={filterInputId}
									onInput={onFilterTextBoxChanged}
								/>
							</InputGroup>
							{allowedCreate && (
								<Button
									colorScheme='button'
									leftIcon={<FiPlusCircle />}
									size={{ md: 'sm', lg: 'md', xl: 'lg' }}
									onClick={() => {
										navigate(`/${path}/create`)
									}}
								>
									Create new
								</Button>
							)}
						</HStack>
					</Box>
					<TableComponent
						gridRef={gridRef}
						rows={rows}
						columns={columns}
						path={path}
					/>
				</>
			)}
		</TransitionContainer>
	)
}

export default TablePage
