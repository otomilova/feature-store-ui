import React from 'react'
import {
	Box,
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	Button,
	Center,
	Divider,
	Editable,
	EditablePreview,
	EditableTextarea,
	Flex,
	Heading,
	Input,
	Tooltip
} from '@chakra-ui/react'
import { Link, useNavigate } from 'react-router-dom'
import { FiLayers } from 'react-icons/fi'
import EditableControls from './EditableControls'
import FeaturesInput from './FeaturesInput'
import LabelsInput from './LabelsInput'
import { useForm } from 'react-hook-form'

function FeatureTableOverview() {
	const {
		register,
		setValue,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm({
		mode: 'onChange'
	})
	const navigate = useNavigate()
	return (
		<Box mt='25px' w='100%'>
			<Breadcrumb fontSize='14px' spacing='8px'>
				<BreadcrumbItem>
					<BreadcrumbLink
						as={Link}
						to='/feature-tables'
						color='#1963D3'
						textDecor='underline'
					>
						FEATURE TABLES
					</BreadcrumbLink>
				</BreadcrumbItem>

				<BreadcrumbItem>
					<BreadcrumbLink
						as={Link}
						to='/feature-table/1'
						color='#1963D3'
						textDecor='underline'
					>
						FEATURE TABLE
					</BreadcrumbLink>
				</BreadcrumbItem>

				<BreadcrumbItem>
					<BreadcrumbLink
						as={Link}
						to='/feature-table/1'
						color='#1963D3'
						textDecor='underline'
					>
						FEATURE TABLE OVERVIEW
					</BreadcrumbLink>
				</BreadcrumbItem>

				<BreadcrumbItem isCurrentPage>
					<BreadcrumbLink href='#'>FEATURE TABLE EDIT</BreadcrumbLink>
				</BreadcrumbItem>
			</Breadcrumb>
			<Box
				bgColor='#F5F5F5'
				m='55px'
				h='80%'
				borderRadius='20px'
				boxShadow='md'
				p='25'
			>
				<Center pt='10px'>
					<Flex direction='row' gap='12px' alignItems='center' mb='20px'>
						<FiLayers size={12} />
						<Heading as='h2' size='l'>
							Edit Feature Table: driver_hourly_stats_fresh
						</Heading>
					</Flex>
				</Center>
				<Flex gap='30px'>
					<Flex direction='column' align='stretch'>
						<Heading fontSize='14px'>Name</Heading>
						<Input
							mb='20px'
							mt='15px'
							value='driver_hourly_stats_fresh'
							variant='filled'
							isDisabled='true'
							border='1px solid gray'
						></Input>
					</Flex>
					<Flex direction='column'>
						<Heading fontSize='14px'>Entity</Heading>
						<Input
							mb='20px'
							mt='15px'
							value='Driver'
							variant='filled'
							isDisabled='true'
							border='1px solid gray'
						></Input>
					</Flex>
				</Flex>
				<Divider />
				<Heading size='16px'>Description</Heading>

				<Editable defaultValue='Text to be filled in' mb='20px'>
					<Tooltip label='Click to edit' shouldWrapChildren={true}>
						<EditablePreview />
					</Tooltip>
					<EditableTextarea />
					<EditableControls />
				</Editable>
				<Divider />
				<Heading size='16px' mb='5px' mt='15px'>
					Features
				</Heading>
				<FeaturesInput register={register} />
				<Divider />
				<Heading size='16px' mt='15px' mb='5px'>
					Labels
				</Heading>
				<LabelsInput register={register} />
				<Divider />
				<Center>
					<Flex gap='15px'>
						<Button
							colorScheme='blue'
							variant='outline'
							mt='60px'
							onClick={() => {
								navigate('/feature-table/1')
							}}
						>
							Cancel
						</Button>
						<Button
							colorScheme='blue'
							mt='60px'
							onClick={() => {
								navigate('/feature-table/1')
							}}
						>
							Apply changes
						</Button>
					</Flex>
				</Center>
			</Box>
		</Box>
	)
}

export default FeatureTableOverview
