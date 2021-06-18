import styled from 'styled-components';

export const StyledComponent = styled.div`
	display: flex;
	align-items: center;
	padding: 10px 0;
	justify-content: space-between;
	color: #fff;
	.siteName {
		color: #fff;
		a {
			color: inherit;
		}
	}
	.boxRight {
		justify-content: flex-end;
	}
	a {
		color: inherit;
		&:hover {
			color: #198754;
		}
	}
`;
