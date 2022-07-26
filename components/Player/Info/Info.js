import React, { useState, useEffect } from 'react'
import { InfoH2, H3, InfoSection, Cover } from './Styled.Info'

import redBlue from '/public/pokemon_red_blue.jpg'
import goldSilver from '/public/pokemon_gold_silver_crystal.jpg'

export default function Info({ musics, curTrack }) {

	const [cover, setCover] = useState('')

	useEffect(() => {
		if(musics?.[curTrack]?.game === 'Red / Blue / Yellow' || musics?.[curTrack]?.game === 'Yellow') {
			setCover(redBlue)
		} else if(musics?.[curTrack]?.game === 'Gold / Silver / Crystal' || musics?.[curTrack]?.game === 'Crystal') {
			setCover(goldSilver)
		} 
	}, [curTrack, musics])

	return (
		<InfoSection>
			<Cover
				className='image'
				src={cover}
				alt='Cover pokémon Red / Blue'
				width={300}
				height={300}
			/>
			<InfoH2>{musics?.[curTrack]?.name}</InfoH2>
			<H3>{musics?.[curTrack]?.game}</H3>
		</InfoSection>
	)
}
