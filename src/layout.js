import React from 'react';
import Bar from './bar';
import { Outlet } from 'react-router-dom';

export default function Layout(props) {
	return (
		<div>
			<Bar name={props.title} />
			<Outlet />
		</div>
	)
}
