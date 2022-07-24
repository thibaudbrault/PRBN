import styled from 'styled-components'
import Image from 'next/image'
import { H2 } from '../../Header/Styled.Header'

export const InfoSection = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`

export const Cover = styled(Image)`
	border: 1px solid ${({ theme }) => theme.light} !important;
	border-radius: 10px;
`

export const InfoH2 = styled(H2)`
	margin-top: 2rem;
`

export const H3 = styled.h3`
	margin: 2rem 0;
	font-size: 2.5rem;
`
