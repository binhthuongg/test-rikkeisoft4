import React from 'react';
import { Link } from 'react-router-dom';
import SearchForm from './SearchForm';
import { StyledComponent } from './styles';

function NavBar(props) {
	return (
		<StyledComponent>
			<div className='container-fluid'>
				<div className='row'>
					<div className='col-md-3'>
						<div className='boxLeft d-flex align-items-center mb-30'>
							<h3 className='siteName mr-30'>
								<Link to='/'>Logo</Link>
							</h3>
							<div className='createPost'>
								<Link to='/post/add'>
									<button className='btn btn-success'>
										<i
											className='fa fa-plus mr-10'
											aria-hidden='true'
										></i>
										NewPost
									</button>
								</Link>
							</div>
						</div>
					</div>
					<div className='col-md-6'>
						<div className='mb-30'>
							<SearchForm />
						</div>
					</div>
					<div className='col-md-3'>
						<div className='boxRight d-flex align-items-center mb-30'>
							<div className='mr-30'>
								<Link to='/login'>
									<i
										className='fa fa-cog'
										aria-hidden='true'
									></i>
								</Link>
							</div>
							<div className='mr-30'>
								<Link to='/login'>Sign in </Link>
							</div>
							<div>
								<Link to='/register'>
									<button className='btn btn-success'>
										Sign up
									</button>{' '}
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</StyledComponent>
	);
}

export default NavBar;
