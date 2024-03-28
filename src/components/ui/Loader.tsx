import { Skeleton, Stack } from '@chakra-ui/react'

const Loader = ({ rows = 5 }) => {
	const skeletons = []
	for (let i = 0; i < rows; i++) {
		skeletons.push(<Skeleton height='40px' key={i} />)
	}
	return <Stack>{skeletons}</Stack>
}

export default Loader
