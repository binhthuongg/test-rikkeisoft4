import React from 'react';
import { Route } from 'react-router-dom';

function LayoutSidebar(props) {
	const { path, exact, component: Component } = props;
	return (
		<div className='LayoutSidebarWrapper'>
			sidebar
			<div className='layoutSidebarContent'>
				LayoutSidebarWrapper
				<Route path={path} exact={exact} component={Component} />
			</div>
		</div>
	);
}

export default LayoutSidebar;
