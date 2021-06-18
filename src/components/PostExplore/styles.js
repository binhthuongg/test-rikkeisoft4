import styled from 'styled-components';

export const StyledComponent = styled.div`
	display: block;
	padding-top: 100px;
	.item {
		position: relative;
		margin-bottom: 30px;
		overflow: hidden;
		&:hover {
			img {
				transform: scale(1.05);
			}
		}
		img {
			transition: 0.4s ease;
		}
		.name {
			background: #474a51;
			position: absolute;
			z-index: 1;
			bottom: 0;
			margin: 0;
			font-size: 14px;
			left: 0;
			right: 0;
			padding: 15px 20px;
			text-align: center;
			font-weight: bold;
		}
		.link {
			display: block;
			position: absolute;
			left: 0;
			right: 0;
			top: 0;
			bottom: 0;
			z-index: 999;
		}
	}
`;
