import styled from 'styled-components';

export const StyledComponent = styled.div`
	display: block;
	margin-top: 50px;
	.singleComment {
		padding: 10px 0;
		border-bottom: 1px solid #585d6a;
		*:last-child {
			margin-bottom: 0;
		}
		.title {
			font-size: 14px;
			color: #16632e;
			font-weight: bold;
		}
	}
	.postCommentTitle {
		font-size: 14px;
		text-transform: uppercase;
		padding-bottom: 2px;
		border-bottom: 1px solid #585d6a;
	}
`;
