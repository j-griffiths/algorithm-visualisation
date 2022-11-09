import React from 'react';
import { Heading, useColorMode, useColorModeValue, Flex, IconButton, Spacer, Button, ButtonGroup } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

export default function Bar(props) {
	const { colorMode, toggleColorMode} = useColorMode()
	const titleColor = useColorModeValue("gray.400", "blackAlpha.400")
	return (
		<Flex bg={titleColor} p='4'>
			<Button size='lg'> About </Button>
			<Spacer />
			<Heading> {props.name} </Heading>
			<Spacer />
			<IconButton onClick={toggleColorMode} size='lg' text='Toggle Color Mode' icon={colorMode == 'light' ? <MoonIcon /> : <SunIcon />} />
		</Flex>
	);
}
