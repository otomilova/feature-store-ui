import React from 'react'
import { Link } from 'react-router-dom'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react'

const Nav = ({ crumbs }) => {
	return (
		<Breadcrumb fontSize='14px' spacing='8px'>
			{crumbs.map(crumb => {
				return (
					<BreadcrumbItem isCurrentPage={!!crumb.isActive}>
						<BreadcrumbLink
							as={Link}
							to={crumb.link}
							color={crumb.isActive ? 'brand.600' : 'brand.500'}
							textDecor={crumb.isActive ? 'none' : 'underline'}
							//cursor={crumb.isActive ? 'text' : 'pointer'}
							pointerEvents={crumb.isActive ? 'none' : 'initial'}
						>
							{crumb.name}
						</BreadcrumbLink>
					</BreadcrumbItem>
				)
			})}
		</Breadcrumb>
	)
}

export default Nav
