import React, { useCallback, useRef } from 'react'
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
import { motion } from 'framer-motion'
import Loader from '../Loader'
import { FiPlusCircle, FiSearch } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import TableComponent from './TableComponent'

const TablePage: React.FC = ({
	rows,
	columns,
	isLoading,
	Icon,
	title,
	path,
	allowedCreate
}) => {
	const navigate = useNavigate()
	const gridRef = useRef()
	const onFilterTextBoxChanged = useCallback(() => {
		gridRef.current.api.setGridOption(
			'quickFilterText',
			document.getElementById('filter-text-box').value
		)
	}, [])

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
									id='filter-text-box'
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
		</Box>
	)
}

export default TablePage
