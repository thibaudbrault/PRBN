import React from 'react'
import { Dropdown, H1, H2, Head } from './Styled.Header'
import musics from '/helpers/musics.json'

export default function Header({ curTrack, setCurTrack }) {

	const selectTrack = (m) => {
		setCurTrack(m?.id - 1)
	}

	console.log(curTrack)

	return (
		<>
			<Head>
				<H1>PRBN</H1>
				<H2>Pokémon Radio Broadcasting Network</H2>
				<Dropdown>
					<select name='tracks' placeholder='Select Track'>
						<option value='select track' disabled selected hidden>
							Select a Track
						</option>
						{musics?.map((m) => (
							<option key={m?.name + m?.id} value={m?.name} onClick={() => selectTrack(m)}>
								{m?.name}
							</option>
						))}
					</select>
				</Dropdown>
			</Head>
		</>
	)
}
