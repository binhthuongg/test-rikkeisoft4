import styled from 'styled-components';

export const StyledComponent = styled.div`
	display: block;
	.postMeta {
		justify-content: space-between;
	}
	.action .button {
		display: flex;
		width: 64px;
		height: 64px;
		align-items: center;
		justify-content: center;
		cursor: pointer;
	}
	.addToFavourite {
		border: 1px solid #ccc;
		border-radius: 5px;
	}
	.share {
		position: relative;
		&.show {
			.dropdown {
				display: block;
			}
		}
		.dropdown {
			display: none;
			position: absolute;
			z-index: 1;
			left: 100%;
			top: 50%;
			transform: translateY(-50%);
			background: white;
			padding: 5px 10px;
			white-space: nowrap;
			border: 1px solid #eee;
			color: #333;
			span {
				font-weight: bold;
			}
		}
		.socialItem {
			display: inline-block;
			padding: 5px 10px;
			margin: 5px;
			transition: 0.3s ease;
			cursor: pointer;
			&:hover {
				background: rgba(0, 0, 0, 0.08);
			}
		}
	}
`;
