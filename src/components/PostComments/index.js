import React from 'react';
import { StyledComponent } from './styles';

function PostComments(props) {
	const { postDetails } = props;
	let listComment = postDetails.comment || [];
	const renderListComments = () => {
		let html = null;
		if (listComment.length > 0) {
		}
		html = listComment.map((singleComment, index) => {
			return (
				<div className='singleComment' key={index}>
					<h4 className='title'>{singleComment?.author}</h4>
					<p>{singleComment?.comment}</p>
				</div>
			);
		});
		return html;
	};
	const mainRender = () => {
		let html = null;
		if (listComment.length > 0) {
			html = (
				<div className='postComments'>
					<h3 className='postCommentTitle'>
						{listComment.length === 1
							? '1 Comment'
							: `${listComment.length} Comments`}
					</h3>
					{renderListComments()}
				</div>
			);
		}
		return html;
	};
	if (postDetails?.comment)
		return <StyledComponent>{mainRender()}</StyledComponent>;
}

export default PostComments;
