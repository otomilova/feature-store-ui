import {
	Box,
	Button,
	Center,
	Flex,
	Heading,
	HStack,
	IconButton,
	Input,
	InputGroup,
	InputLeftElement,
	NumberDecrementStepper,
	NumberIncrementStepper,
	NumberInput,
	NumberInputField,
	NumberInputStepper,
	Select,
	Table,
	TableContainer,
	Tag,
	Tbody,
	Td,
	Th,
	Thead,
	Tooltip,
	Tr
} from '@chakra-ui/react'
import {
	FiLayers,
	FiMoreHorizontal,
	FiPlusCircle,
	FiSearch
} from 'react-icons/fi'
import { usePagination, useTable } from 'react-table'
import {
	ArrowLeftIcon,
	ArrowRightIcon,
	ChevronLeftIcon,
	ChevronRightIcon
} from '@chakra-ui/icons'

const FeatureTables: React.FC = () => {
	const columns = React.useMemo(
		() => [
			{
				Header: 'Feature Tables',
				columns: [
					{
						Header: '#',
						accessor: '#'
					},
					{
						Header: 'Name',
						accessor: 'name'
					},
					{
						Header: 'Entity',
						accessor: 'entity'
					},
					{
						Header: 'Labels',
						accessor: 'labels'
					}
				]
			}
		],
		[]
	)

	const data = React.useMemo(
		() => [
			{
				'#': '1',
				Name: 'driver_hourly_stats_fresh',
				Entity: 'Drivers',
				Labels: ['driver_performance', 'driver_performance2']
			},
			{
				'#': '2',
				Name: 'driver_hourly_stats_fresh',
				Entity: 'Drivers',
				Labels: ['driver_performance', 'driver_performance2']
			},
			{
				'#': '3',
				Name: 'driver_hourly_stats_fresh',
				Entity: 'Drivers',
				Labels: ['driver_performance', 'driver_performance2']
			},
			{
				'#': '4',
				Name: 'driver_hourly_stats_fresh',
				Entity: 'Drivers',
				Labels: ['driver_performance', 'driver_performance2']
			},
			{
				'#': '5',
				Name: 'driver_hourly_stats_fresh',
				Entity: 'Drivers',
				Labels: ['driver_performance', 'driver_performance2']
			}
		],
		[]
	)

	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		prepareRow,
		page, // Instead of using 'rows', we'll use page,
		// which has only the rows for the active page

		// The rest of these things are super handy, too ;)
		canPreviousPage,
		canNextPage,
		pageOptions,
		pageCount,
		gotoPage,
		nextPage,
		previousPage,
		setPageSize,
		state: { pageIndex, pageSize }
	} = useTable(
		{
			columns,
			data,
			initialState: { pageIndex: 2 }
		},
		usePagination
	)

	return (
		<Box mt='25px' mr={2} w='80%'>
			<Center mb='12px'>
				<Flex direction='row' gap='12px' alignItems='center' marginBottom='0px'>
					<FiLayers size={12} />
					<Heading as='h2' size='l' marginBottom='0px'>
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
						placeholder='Search by Name, Entity or Label'
						w='330px'
						// mr='5'
					/>
				</InputGroup>
				<Button colorScheme='blue' leftIcon={<FiPlusCircle />} size='sm'>
					Create new
				</Button>
			</HStack>

			<TableContainer borderRadius={8}>
				<Table variant='simple' size='sm'>
					{/*<TableCaption>Imperial to metric conversion factors</TableCaption>*/}
					<Thead>
						<Tr bg='#F5F5F5'>
							<Th isNumeric w='20px'>
								#
							</Th>
							<Th>Name</Th>
							<Th>Entity</Th>
							<Th>Labels</Th>
						</Tr>
					</Thead>
					<Tbody>
						<Tr>
							<Td isNumeric>1</Td>
							<Td>driver_hourly_stats_fresh</Td>
							<Td>Drivers</Td>
							<Td>
								<Tag size='sm'>driver_performance</Tag>
								<Tag size='sm'>driver_performance</Tag>
								<IconButton
									h='20px'
									colorScheme='gray'
									aria-label='More tags'
									icon={<FiMoreHorizontal />}
								/>
							</Td>
						</Tr>
						<Tr>
							<Td isNumeric>2</Td>
							<Td>driver_hourly_stats</Td>
							<Td>Drivers</Td>
							<Td>
								<Tag size='sm'>driver_performance</Tag>
								<IconButton
									h='20px'
									colorScheme='gray'
									aria-label='More tags'
									icon={<FiMoreHorizontal />}
								/>
							</Td>
						</Tr>
						<Tr>
							<Td isNumeric>3</Td>
							<Td>transformed_conv_rate</Td>
							<Td>Drivers</Td>
							<Td>
								<Tag size='sm'>driver_performance</Tag>
								<IconButton
									h='20px'
									colorScheme='gray'
									aria-label='More tags'
									icon={<FiMoreHorizontal />}
								/>
							</Td>
						</Tr>
						<Tr>
							<Td isNumeric>4</Td>
							<Td>transformed_conv_rate</Td>
							<Td>Drivers</Td>
							<Td>
								<Tag size='sm'>driver_performance</Tag>
								<IconButton
									h='20px'
									colorScheme='gray'
									aria-label='More tags'
									icon={<FiMoreHorizontal />}
								/>
							</Td>
						</Tr>
						<Tr>
							<Td isNumeric>5</Td>
							<Td>transformed_conv_rate</Td>
							<Td>Drivers</Td>
							<Td>
								<Tag size='sm'>driver_performance</Tag>
								<IconButton
									h='20px'
									colorScheme='gray'
									aria-label='More tags'
									icon={<FiMoreHorizontal />}
								/>
							</Td>
						</Tr>
						<Tr>
							<Td isNumeric>6</Td>
							<Td>transformed_conv_rate</Td>
							<Td>Drivers</Td>
							<Td>
								<Tag size='sm'>driver_performance</Tag>
								<IconButton
									h='20px'
									colorScheme='gray'
									aria-label='More tags'
									icon={<FiMoreHorizontal />}
								/>
							</Td>
						</Tr>
						<Tr>
							<Td isNumeric>7</Td>
							<Td>transformed_conv_rate</Td>
							<Td>Drivers</Td>
							<Td>
								<Tag size='sm'>driver_performance</Tag>
								<IconButton
									h='20px'
									colorScheme='gray'
									aria-label='More tags'
									icon={<FiMoreHorizontal />}
								/>
							</Td>
						</Tr>
						<Tr>
							<Td isNumeric>8</Td>
							<Td>transformed_conv_rate</Td>
							<Td>Drivers</Td>
							<Td>
								<Tag size='sm'>driver_performance</Tag>
								<IconButton
									h='20px'
									colorScheme='gray'
									aria-label='More tags'
									icon={<FiMoreHorizontal />}
								/>
							</Td>
						</Tr>
						<Tr>
							<Td isNumeric>9</Td>
							<Td>transformed_conv_rate</Td>
							<Td>Drivers</Td>
							<Td>
								<Tag size='sm'>driver_performance</Tag>
								<IconButton
									h='20px'
									colorScheme='gray'
									aria-label='More tags'
									icon={<FiMoreHorizontal />}
								/>
							</Td>
						</Tr>
						<Tr>
							<Td isNumeric>10</Td>
							<Td>transformed_conv_rate</Td>
							<Td>Drivers</Td>
							<Td>
								<Tag size='sm'>driver_performance</Tag>
								<IconButton
									h='20px'
									colorScheme='gray'
									aria-label='More tags'
									icon={<FiMoreHorizontal />}
								/>
							</Td>
						</Tr>
						<Tr>
							<Td isNumeric>11</Td>
							<Td>transformed_conv_rate</Td>
							<Td>Drivers</Td>
							<Td>
								<Tag size='sm'>driver_performance</Tag>
								<IconButton
									h='20px'
									colorScheme='gray'
									aria-label='More tags'
									icon={<FiMoreHorizontal />}
								/>
							</Td>
						</Tr>
						<Tr>
							<Td isNumeric>12</Td>
							<Td>transformed_conv_rate</Td>
							<Td>Drivers</Td>
							<Td>
								<Tag size='sm'>driver_performance</Tag>
								<IconButton
									h='20px'
									colorScheme='gray'
									aria-label='More tags'
									icon={<FiMoreHorizontal />}
								/>
							</Td>
						</Tr>
					</Tbody>
				</Table>
			</TableContainer>
			<Flex justifyContent='space-between' m={4} alignItems='center'>
				<Flex>
					<Tooltip label='First Page'>
						<IconButton
							onClick={() => gotoPage(0)}
							isDisabled={!canPreviousPage}
							icon={<ArrowLeftIcon h={3} w={3} />}
							mr={4}
						/>
					</Tooltip>
					<Tooltip label='Previous Page'>
						<IconButton
							onClick={previousPage}
							isDisabled={!canPreviousPage}
							icon={<ChevronLeftIcon h={6} w={6} />}
						/>
					</Tooltip>
				</Flex>

				<Flex alignItems='center'>
					<Text flexShrink='0' mr={8}>
						Page{' '}
						<Text fontWeight='bold' as='span'>
							{pageIndex + 1}
						</Text>{' '}
						of{' '}
						<Text fontWeight='bold' as='span'>
							{pageOptions.length}
						</Text>
					</Text>
					<Text flexShrink='0'>Go to page:</Text>{' '}
					<NumberInput
						ml={2}
						mr={8}
						w={28}
						min={1}
						max={pageOptions.length}
						onChange={value => {
							const page = value ? value - 1 : 0
							gotoPage(page)
						}}
						defaultValue={pageIndex + 1}
					>
						<NumberInputField />
						<NumberInputStepper>
							<NumberIncrementStepper />
							<NumberDecrementStepper />
						</NumberInputStepper>
					</NumberInput>
					<Select
						w={32}
						value={pageSize}
						onChange={e => {
							setPageSize(Number(e.target.value))
						}}
					>
						{[10, 20, 30, 40, 50].map(pageSize => (
							<option key={pageSize} value={pageSize}>
								Show {pageSize}
							</option>
						))}
					</Select>
				</Flex>

				<Flex>
					<Tooltip label='Next Page'>
						<IconButton
							onClick={nextPage}
							isDisabled={!canNextPage}
							icon={<ChevronRightIcon h={6} w={6} />}
						/>
					</Tooltip>
					<Tooltip label='Last Page'>
						<IconButton
							onClick={() => gotoPage(pageCount - 1)}
							isDisabled={!canNextPage}
							icon={<ArrowRightIcon h={3} w={3} />}
							ml={4}
						/>
					</Tooltip>
				</Flex>
			</Flex>
		</Box>
	)
}

export default FeatureTables

// 	FiHexagon entities
// 	<FiLayers /> tables
// 	<FiGrid /> features
