import React from 'react';
import { Link } from 'react-router-dom';
import { StyledComponent } from './styles';

function Home(props) {
	return (
		<StyledComponent>
			<div className='container'>
				<Link to='/post-detail/905612'>Đến trang demo </Link>
			</div>
		</StyledComponent>
	);
}

export default Home;
