import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { StyledComponent } from './styles';
import { useHistory } from 'react-router-dom';

function PostDetails(props) {
	const { postDetails, nextId } = props;
	const history = useHistory();
	const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
		<Link
			to=''
			ref={ref}
			onClick={(e) => {
				e.preventDefault();
				onClick(e);
			}}
		>
			{children}
		</Link>
	));

	const handleClickNext = () => {
		history.push(`/post-detail/${nextId}`);
	};
	return (
		<StyledComponent>
			<div className='postMeta d-flex align-items-center mb-30'>
				<div>
					<span className='views mr-10'>{`${postDetails?.view} Views`}</span>
					<span className='timeLength mr-10'>
						{postDetails?.time}
					</span>
				</div>
				<div className='postActions d-flex align-items-center'>
					<Dropdown className='mr-10 buttonToggler'>
						<Dropdown.Toggle
							as={CustomToggle}
							variant='success'
							id='dropdown-basic'
						>
							...
						</Dropdown.Toggle>

						<Dropdown.Menu>
							<Dropdown.Item
								onClick={() =>
									alert(
										`embed id: ${postDetails?.id}, title:  ${postDetails?.title}`
									)
								}
							>
								<i
									className='fa fa-link mr-10'
									aria-hidden='true'
								></i>
								Embed
							</Dropdown.Item>
							<Dropdown.Item
								onClick={() =>
									alert(
										`download id: ${postDetails?.id}, title:  ${postDetails?.title}`
									)
								}
							>
								<i
									className='fa fa-download mr-10'
									aria-hidden='true'
								></i>
								Download
							</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
					<button
						className='btn btn-success mr-10'
						onClick={handleClickNext}
					>
						Next
					</button>
				</div>
			</div>
			<div className='mainImage'>
				<img src={postDetails?.image} alt='title' />
			</div>
		</StyledComponent>
	);
}

export default PostDetails;
