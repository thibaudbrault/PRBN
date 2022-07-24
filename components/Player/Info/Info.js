import React from 'react'
import { InfoH2, H3, InfoSection, Cover } from './Styled.Info'

export default function Info({ musics, curTrack }) {
	return (
		<InfoSection>
			<Cover
				className='image'
				src='https://vgmsite.com/soundtracks/pokemon-red-green-blue-yellow/coverart.jpg'
				alt='Cover pokémon Red / Blue'
				width={300}
				height={300}
			/>
			<InfoH2>{musics?.[curTrack]?.name}</InfoH2>
			<H3>{musics?.[curTrack]?.game}</H3>
		</InfoSection>
	)
}
