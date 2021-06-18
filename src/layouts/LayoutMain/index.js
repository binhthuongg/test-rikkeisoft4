import React from 'react';
import { Route } from 'react-router-dom';
import NavBar from '../../components/NavBar';

function LayoutMain(props) {
	const { path, exact, component: Component } = props;
	return (
		<>
			<NavBar />
			<div className='LayoutMainWrapper' style={{ paddingTop: 50 }}>
				<Route path={path} exact={exact} component={Component} />
			</div>
		</>
	);
}

export default LayoutMain;
