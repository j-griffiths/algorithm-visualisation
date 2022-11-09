import React from 'react';
import { createRoot } from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom';
import Layout from './layout';
import Home from './home';
import Search from './search';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<Layout title='Algorithm Visualisation'/>}>
	    		<Route index element={<Home />} />
	    		<Route path='search' element={<Search />} />
		</Route>
	)
);

const root = createRoot(document.getElementById('app'));
root.render(<App />);

function App() {
    return (
        <ChakraProvider>
	    <RouterProvider router={router} />
	</ChakraProvider>
    )
}
