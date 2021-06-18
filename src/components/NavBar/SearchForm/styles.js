import styled from 'styled-components';

export const StyledComponent = styled.div`
	color: #fff;
	.inputElement {
		margin-bottom: 0;
		input {
			background: #484765;
			border: none;
			color: inherit;
			outline: none;
			padding: 5px 50px 5px 20px;
			line-height: 28px;
			width: 100%;
			color: rgba(255, 255, 255, 0.8);
			&::-webkit-input-placeholder {
				color: rgba(255, 255, 255, 0.8);
				opacity: 1;
			}
			/* Mozilla Firefox 4 to 18 */
			&:-moz-placeholder {
				color: rgba(255, 255, 255, 0.8);
				opacity: 1;
			}
			/* Mozilla Firefox 19+ */
			&::-moz-placeholder {
				color: rgba(255, 255, 255, 0.8);
				opacity: 1;
			}
			/* Internet Explorer 10+ */
			&:-ms-input-placeholder {
				color: rgba(255, 255, 255, 0.8);
				opacity: 1;
			}
		}
	}
	.title {
		text-align: center;
		text-transform: uppercase;
		font-size: 30px;
		margin-bottom: 30px;
	}
	.error {
		margin: 10px 0 15px 0;
		color: red;
	}
	.buttonWrapper {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.card {
		width: 500px;
		max-width: 100%;
		margin: auto;
	}
	.socialIcons {
		a {
			display: inline-block;
			vertical-align: middle;
			font-size: 20px;
			margin-right: 5px;
		}
	}
	.errorResult {
		margin: 10px 0 15px 0;
		color: red;
	}
	form {
		position: relative;
		.button {
			position: absolute;
			z-index: 1;
			top: 50%;
			transform: translateY(-50%);
			right: 15px;
			cursor: pointer;
			&:hover {
				i {
					color: #198754;
				}
			}
		}
	}
`;
