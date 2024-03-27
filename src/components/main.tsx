import React from 'react'
import ReactDOM from 'react-dom/client'
import '../assets/styles/index.css'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import Router from '../routes/Routes'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const colors = {
	brand: {
		//dividers #C6CBD2?
		50: '#CBD5E0', //borders input
		100: '#F7F7F9', //borders
		200: '#FBFBFB', //background
		300: '#F5F5F5', //background form
		400: '#98A2B3', //borders?dividers?
		500: '#1963D3', //accent color
		600: '#344054' //text
	},
	button: {
		500: '#1963D3', //default
		600: '#124CA4' //hover
	}
}

const theme = extendTheme({
	fonts: {
		body: 'Inter'
	},
	colors: { ...colors },
	breakpoints: {
		base: '0px',
		sm: '1024px',
		md: '1440px',
		lg: '1920px',
		xl: '2560px'
	},
	styles: {
		root: {
			overscrollBehavior: 'none'
		}
	}
})

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false
		}
	}
})

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ChakraProvider resetCSS theme={theme}>
			<QueryClientProvider client={queryClient}>
				<Router />
			</QueryClientProvider>
		</ChakraProvider>
	</React.StrictMode>
)
