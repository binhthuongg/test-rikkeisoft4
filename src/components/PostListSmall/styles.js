import styled from 'styled-components';

export const StyledComponent = styled.div`
	display: block;
	.postMeta {
		justify-content: space-between;
	}
	.mainTitle {
		font-size: 15px;
		padding-bottom: 5px;
		border-bottom: 1px solid #eee;
		margin-bottom: 30px;
	}
	.list {
		height: 450px;
		overflow-y: auto;
		padding-right: 15px;
	}
	.item {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: flex-start;
		&:not(:last-child) {
			margin-bottom: 10px;
		}
		&:hover {
			.postTitle {
				color: #198754;
			}
		}
		.link {
			position: absolute;
			z-index: 9;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			display: block;
		}
		.image {
			border-radius: 5px;
			width: 64px;
			height: 64px;
			flex-shrink: 0;
			position: relative;
			z-index: 1;
			img {
				object-fit: cover;
				width: 100%;
				height: 100%;
			}
		}
		.postTitle {
			display: flex;
			flex-direction: column;
			flex: 1;
			justify-content: space-around;
			padding-left: 8px;
			z-index: 1;
			font-size: 15px;
			margin: 0;
		}
	}
`;
