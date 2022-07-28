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
	margin: 2rem 0;
	font-size: 3.5rem;
	font-family: ${({ theme }) => theme.wendy};
	text-align: center;
`

export const Dropdown = styled.div`
	& select {
		padding: 0.5rem 0.3rem;
		font-size: 1.7rem;
		border: 1px solid ${({ theme }) => theme.light};
		border-radius: 5px;
		background: none;
		color: ${({ theme }) => theme.light};
		cursor: pointer;

		& option {
			background: ${({ theme }) => theme.dark};
			cursor: pointer;
		}
	}
`
