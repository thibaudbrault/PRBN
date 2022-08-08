import React, { useEffect, useState } from 'react'
import { Dropdown, H1, H2, Head, OptionTitle } from './Styled.Header'
import musics from '/helpers/musics.json'

import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

export default function Header({ curTrack, setCurTrack, game, setGame, filteredMusics, setFilteredMusics }) {

	const [isOpenGame, setIsOpenGame] = useState(false)
	const [isOpenTrack, setIsOpenTrack] = useState(false)

	const toggleOpenGame = () => {
		setIsOpenGame(!isOpenGame)
		setIsOpenTrack(false)
	}

	const toggleOpenTrack = () => {
		setIsOpenTrack(!isOpenTrack)
	}

	const selectTrack = (m) => {
		setCurTrack(m?.id - 1)
		setIsOpenTrack(false)
	}

	return (
		<>
			<Head>
				<H1>PRBN</H1>
				<H2>Pokémon Radio Broadcasting Network</H2>
				<Dropdown>
					<button onClick={toggleOpenGame}>
						<span>
							{isOpenGame
								? (<IoIosArrowUp />)
								: (<IoIosArrowDown />)
							}
						</span>
						<span>
							{game}
						</span>
						<span>
							{isOpenGame
								? (<IoIosArrowUp />)
								: (<IoIosArrowDown />)
							}
						</span>
					</button>
					{isOpenGame && (
						<ol>
							<li value='all' onClick={() => {setGame('all'); setIsOpenGame(false);}}>All</li>
							<li value='red / blue / yellow' onClick={() => {setGame('red / blue / yellow'); setIsOpenGame(false);}}>Red / Blue / Yellow</li>
							<li value='gold / silver / crystal' onClick={() => {setGame('gold / silver / crystal'); setIsOpenGame(false);}}>Gold / Silver / Crystal</li>
						</ol>
					)}
				</Dropdown>
				<Dropdown>
					<button onClick={toggleOpenTrack}>
						<span>
							{isOpenTrack
								? (<IoIosArrowUp />)
								: (<IoIosArrowDown />)
							}
						</span>
						<span>Select a Track</span>
						<span>
							{isOpenTrack
								? (<IoIosArrowUp />)
								: (<IoIosArrowDown />)
							}
						</span>
					</button>
					{isOpenTrack && (
						<ol>
							<OptionTitle style={
								game !== 'red / blue / yellow' && game !== 'all' && game !== 'Select A Game'
									? {display: 'none'}
									: {display: 'block'}
								}>
								Red / Blue / Yellow
							</OptionTitle>
							{filteredMusics?.map((m) => (
								m?.id < 58 && m?.id > 0 &&
									<li key={m?.name + m?.id} onClick={() => selectTrack(m)}>
										{m?.name}
									</li>
							))}
							<OptionTitle style={
								game !== 'gold / silver / crystal' && game !== 'all' && game !== 'Select A Game'
									? {display: 'none'}
									: {display: 'block'}
								}>
								Gold / Silver / Crystal
							</OptionTitle>
							{filteredMusics?.map((m) => (
								m?.id < 176 && m?.id > 57 &&
									<li key={m?.name + m?.id} onClick={() => selectTrack(m)}>
										{m?.name}
									</li>
							))}
						</ol>
					)}
				</Dropdown>
			</Head>
		</>
	)
}
