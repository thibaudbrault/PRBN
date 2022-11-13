import styled, { keyframes } from 'styled-components'
import Image from 'next/image'
import { H2 } from '../../Header/Styled.Header'

export const InfoSection = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	& div {
		width: 75px;
		height: 75px;
		position: absolute;
		top: 112.5px;
		border: 1px solid ${({ theme }) => theme.gold};
		border-radius: 50%;
		background-color: ${({ theme }) => theme.dark};
	}
`

export const Rotate = keyframes`
    from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(359deg);
	}
`

export const Cover = styled(Image)`
	border: 2px solid ${({ theme }) => theme.light} !important;
	border-radius: 50%;

	&.animation {
		animation: ${Rotate} 7s linear infinite;
	}
`

export const InfoH2 = styled(H2)`
	margin: 2rem 0 0;
	text-transform: capitalize;
`

export const H3 = styled.h3`
	margin: 2rem 0;
	font-size: 2.5rem;
`
