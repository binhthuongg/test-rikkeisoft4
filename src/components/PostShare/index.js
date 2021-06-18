import React, { useEffect, useRef, useState } from 'react';
import { StyledComponent } from './styles';

function PostShare(props) {
	const { postDetails } = props;
	const [isShowShare, setIsShowShare] = useState(false);
	const shareActionRef = useRef(null);
	const listSocials = [
		{
			title: 'facebook',
			icon: () => {
				return (
					<div>
						<i className='fa fa-facebook' aria-hidden='true'></i>
					</div>
				);
			},
		},
		{
			title: 'instagram',
			icon: () => {
				return (
					<div>
						<i className='fa fa-instagram' aria-hidden='true'></i>
					</div>
				);
			},
		},
	];

	const actionShare = (listSocials) => {
		let html = null;
		if (listSocials && listSocials.length > 0) {
			html = listSocials.map((singleSocial, index) => {
				return (
					<div
						key={index}
						className='socialItem'
						onClick={() => {
							alert(
								`Share ${singleSocial.title} bài viết id: ${postDetails?.id}, title: "${postDetails?.title}"`
							);
						}}
						title={singleSocial.title}
					>
						{singleSocial.icon()}
					</div>
				);
			});
		}
		return html;
	};

	const actionShareHtml = (listSocials) => {
		let html = null;
		if (listSocials && listSocials.length > 0) {
			html = (
				<div>
					<span>Share</span>
					{actionShare(listSocials)}
				</div>
			);
		}
		return html;
	};

	const toggleShare = () => {
		setIsShowShare(!isShowShare);
	};

	const listActions = [
		{
			name: 'add-to-favourite',
			action: () => {
				return (
					<div
						className='action addToFavourite'
						onClick={() => alert('add to favourite')}
					>
						<div className='button'>
							<i className='fa fa-heart-o' aria-hidden='true'></i>
						</div>
					</div>
				);
			},
		},
		{
			name: 'share',
			//   action: () => actionShare(listSocials)
			action: () => {
				return (
					<div
						className={`action share ${isShowShare ? 'show' : ''}`}
						ref={shareActionRef}
					>
						<div className='button' onClick={() => toggleShare()}>
							<i className='fa fa-link' aria-hidden='true'></i>
						</div>
						<div className='dropdown'>
							{actionShareHtml(listSocials)}
						</div>
					</div>
				);
			},
		},
	];

	const mainRender = () => {
		let html = null;
		if (listActions && listActions.length > 0) {
			html = listActions.map((singleAction, index) => {
				return (
					<React.Fragment key={index}>
						{singleAction.action()}
					</React.Fragment>
				);
			});
		}
		return html;
	};

	useEffect(() => {
		/**
		 * Alert if clicked on outside of element
		 */
		const handleClickOutside = (event) => {
			if (
				shareActionRef.current &&
				!shareActionRef.current.contains(event.target)
			) {
				setIsShowShare(false);
			}
		};

		// Bind the event listener
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			// Unbind the event listener on clean up
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [shareActionRef]);

	return (
		<StyledComponent>
			<div className='listActions'>{mainRender()}</div>
		</StyledComponent>
	);
}

export default PostShare;
