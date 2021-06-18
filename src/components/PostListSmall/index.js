import React from 'react';
import { Link } from 'react-router-dom';
import { StyledComponent } from './styles';

function PostListSmall(props) {
	const { listPosts } = props;
	const renderListPost = () => {
		let html = null;
		if (listPosts && listPosts.length) {
			html = listPosts.map((singlePost, index) => {
				return (
					<div className='item' key={index}>
						<Link
							to={`/post-detail/${singlePost.id}`}
							className='link'
						/>
						<div className='image'>
							<img
								src={singlePost.image}
								alt={singlePost.title}
							/>
						</div>
						<h3 className='postTitle'>{singlePost.title}</h3>
					</div>
				);
			});
		}
		return html;
	};
	const mainRender = () => {
		let html = null;
		if (listPosts && listPosts.length) {
			html = (
				<>
					<h3 className='mainTitle'>NEWEST IN MOST VIRAL</h3>
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
			<div className='PostListSmall'>{mainRender()}</div>
		</StyledComponent>
	);
}

export default PostListSmall;
