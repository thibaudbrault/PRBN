import React, { useState, useEffect } from 'react'
import { InfoH2, H3, InfoSection, Cover } from './Styled.Info'

import redBlue from '/public/pokemon_red_blue.jpg'
import goldSilver from '/public/pokemon_gold_silver_crystal.jpg'
import rubySapphire from '/public/pokemon_ruby_sapphire_emerald.webp'

export default function Info({ musics, curTrack, isPlaying }) {
	// image for the track
	const [cover, setCover] = useState('')

	// modify the cover according to the current track game
	useEffect(() => {
		if (
			musics?.[curTrack]?.game === 'Red / Blue / Yellow' ||
			musics?.[curTrack]?.game === 'Yellow'
		) {
			setCover(redBlue)
		} else if (
			musics?.[curTrack]?.game === 'Gold / Silver / Crystal' ||
			musics?.[curTrack]?.game === 'Crystal'
		) {
			setCover(goldSilver)
		} else if (musics?.[curTrack]?.game === 'Ruby / Sapphire / Emerald') {
			setCover(rubySapphire)
		}
	}, [curTrack, musics])

	return (
		<InfoSection>
			<Cover
				src={cover}
				alt='Cover pokémon Red / Blue'
				width={300}
				height={300}
				className={isPlaying ? 'animation' : null}
			/>
			<InfoH2>{musics?.[curTrack]?.name}</InfoH2>
			<H3>{musics?.[curTrack]?.game}</H3>
		</InfoSection>
	)
}
