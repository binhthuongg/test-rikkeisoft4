import React from 'react';
import { Link } from 'react-router-dom';
import { StyledComponent } from './styles';

function PostExplore(props) {
	const { listPostExplores } = props;
	const renderListPost = () => {
		let html = null;
		if (listPostExplores && listPostExplores.length) {
			html = listPostExplores.map((singlePost, index) => {
				return (
					<div className='col-sm-6 col-md-4 col-lg-3' key={index}>
						<div className='item'>
							<Link
								to={`/post-detail/${singlePost.id}`}
								className='link'
							/>
							<h4 className='name'>{singlePost.title}</h4>
							<img
								src={singlePost.image}
								alt={singlePost.title}
							/>
						</div>
					</div>
				);
			});
		}
		return html;
	};
	const mainRender = () => {
		let html = null;
		if (listPostExplores && listPostExplores.length) {
			html = (
				<>
					<h3 className='title text-center mb-30'>EXPLORE POSTS</h3>
					<div className='list'>
						<div className='row'>{renderListPost()}</div>
					</div>
				</>
			);
		}
		return html;
	};

	return (
		<StyledComponent>
			<div className='PostExplore'>{mainRender()}</div>
		</StyledComponent>
	);
}

export default PostExplore;
