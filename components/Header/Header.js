import React from 'react'
import { Dropdown, H1, H2, Head } from './Styled.Header'
import musics from '/helpers/musics.json'

export default function Header() {
	console.log(musics)

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
							<option key={m?.name} value={m?.name}>
								{m?.name}
							</option>
						))}
					</select>
				</Dropdown>
			</Head>
		</>
	)
}
