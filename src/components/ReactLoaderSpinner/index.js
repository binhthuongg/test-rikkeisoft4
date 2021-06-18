import React from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { StyledComponent } from './styles';

export default class ReactLoaderSpinner extends React.Component {
	//other logic
	render() {
		return (
			<StyledComponent>
				<div className='reactLoaderSpinner'>
					<Loader
						type='Oval'
						color='#00BFFF'
						height={100}
						width={100}
					/>
				</div>
			</StyledComponent>
		);
	}
}
