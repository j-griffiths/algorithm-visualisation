import React from 'react';
import { Button, HStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function Home(props) {
    return (
    	<HStack spacing='10' justify='center' pt='12'>
	    <Link to='sort'>
	    	<Button colorScheme='green' size='lg'>Sort Algorithms</Button>
	    </Link>
	    <Link to='search'>
		<Button colorScheme='blue' size='lg'>Search Algorithms</Button>
	    </Link>
    	</HStack>
    )
};
