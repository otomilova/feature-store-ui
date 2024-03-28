import { Box } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const TransitionContainer = ({ children, ...props }) => {
	return (
		<Box
			{...props}
			as={motion.div}
			initial={{ opacity: 0, transition: { duration: 0.1 } }}
			animate={{ opacity: 1, transition: { duration: 0 } }}
			exit={{ opacity: 0, transition: { duration: 0.2 }, delay: 0.1 }}
		>
			{children}
		</Box>
	)
}

export default TransitionContainer
