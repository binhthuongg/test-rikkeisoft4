import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { postApi } from '../../commons/API/postApi';
import PostComments from '../../components/PostComments';
import PostDetails from '../../components/PostDetails';
import PostExplore from '../../components/PostExplore';
import PostListSmall from '../../components/PostListSmall';
import PostShare from '../../components/PostShare';
import { StyledComponent } from './styles';

function PostSingle(props) {
	let { id } = props.match.params;
	const [postDetails, setPostDetails] = useState(null);
	const [listPosts, setListPosts] = useState(null);
	const [nextId, setNextId] = useState(null);

	useEffect(() => {
		postApi.getPost(id).then((response) => {
			setPostDetails(response?.data[0]);
		});
	}, [id]);

	useEffect(() => {
		if (postDetails) {
			postApi
				.getList()
				.then((response) => {
					const data = response.data;
					setListPosts(data);
					let result = [];
					data.map((singlePost) => {
						result.push(singlePost.id);
						return '';
					});
					let numberIndex = result.indexOf(+id); //convert to number
					if (numberIndex > -1) {
						if (numberIndex === result.length - 1) {
							setNextId(result[0]);
						} else {
							setNextId(result[numberIndex + 1]);
						}
					}
				})
				.catch((error) => {
					console.log('error', error);
				});
		}
	}, [id, postDetails]);

	const mainRender = () => {
		let html = null;
		if (postDetails) {
			html = (
				<div className='mainContainer'>
					<div className='container'>
						<div className='row'>
							<div className='col-lg-9'>
								<div className='postShareWrapper'>
									<PostShare postDetails={postDetails} />
								</div>
								<div className='postListWrapper'>
									<PostDetails
										postDetails={postDetails}
										nextId={nextId}
									/>
									<PostComments postDetails={postDetails} />
								</div>
							</div>
							<div className='col-lg-3'>
								<PostListSmall listPosts={listPosts} />
							</div>
						</div>
						<PostExplore listPostExplores={listPosts} />
					</div>
				</div>
			);
		} else {
			html = <div className='container'>Đang cập nhật dữ liệu</div>;
		}
		return html;
	};
	return <StyledComponent>{mainRender()}</StyledComponent>;
}

export default withRouter(PostSingle);
