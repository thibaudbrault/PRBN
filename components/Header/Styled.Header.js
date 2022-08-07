import styled from 'styled-components'

export const Head = styled.header`
	height: 25vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`

export const H1 = styled.h1`
	font-size: 5rem;
	letter-spacing: 0.5rem;
`

export const H2 = styled.h2`
	margin: 2rem 0 3rem;
	font-size: 3.5rem;
	font-family: ${({ theme }) => theme.wendy};
	text-align: center;
`

export const Dropdown = styled.div`
	position: relative;
	width: 75%;
	max-width: 750px;
	margin: 0 auto;

	& button {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		height: 4rem;
		padding: 0 1rem;
		background: ${({ theme }) => theme.dark};
		border-radius: 10px;
		border: 1px solid ${({ theme }) => theme.light};
		color: ${({ theme }) => theme.light};
		text-transform: capitalize;
		font-size: 2rem;
	}

	& ol {
		position: absolute;
		top: 4.5rem;
		left: 0;
		max-height: 50rem;
		width: 100%;
		font-size: 1.7rem;
		border: 1px solid ${({ theme }) => theme.light};
		border-radius: 5px;
		background: none;
		color: ${({ theme }) => theme.light};
		overflow-y: auto;
		cursor: pointer;
		z-index: 6;

		& li {
			padding: 1rem 0.5rem;
			background: ${({ theme }) => theme.dark};

			&:hover {
				background: ${({ theme }) => theme.light};
				color: ${({ theme }) => theme.dark};
			}
		}
	}

	&:first-of-type {
		margin-bottom: 2rem;
	}
`

export const OptionTitle = styled.li`
	font-size: 2rem;
	font-weight: 700;
	color: ${({ theme }) => theme.gold};
`;