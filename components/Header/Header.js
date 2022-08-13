import React, { useEffect, useState } from 'react'
import { Dropdown, H1, H2, Head, OptionTitle } from './Styled.Header'
import musics from '/helpers/musics.json'

import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

export default function Header({
	setCurTrack,
	game,
	setGame
}) {
	const [isOpenGame, setIsOpenGame] = useState(false)
	const [isOpenTrack, setIsOpenTrack] = useState(false)
	const [filteredMusics, setFilteredMusics] = useState([])

	useEffect(() => {
		setFilteredMusics(
			musics.filter((m) => {
				if (game === 'all' || game === 'Select A Game') {
					return m?.id > 0
				} else if (game === 'red / blue / yellow') {
					return m?.id < 58 && m?.id > 0
				} else if (game === 'gold / silver / crystal') {
					return m?.id < 176 && m?.id > 57
				} else if (game === 'ruby / sapphire / emerald') {
					return m?.id > 175
				}
			})
		)
	}, [game])

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
						<span>{isOpenGame ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
						<span>{game}</span>
						<span>{isOpenGame ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
					</button>
					{isOpenGame && (
						<ol>
							<li
								value='all'
								onClick={() => {
									setGame('all')
									setIsOpenGame(false)
								}}
							>
								All
							</li>
							<li
								value='red / blue / yellow'
								onClick={() => {
									setGame('red / blue / yellow')
									setIsOpenGame(false)
								}}
							>
								Red / Blue / Yellow
							</li>
							<li
								value='gold / silver / crystal'
								onClick={() => {
									setGame('gold / silver / crystal')
									setIsOpenGame(false)
								}}
							>
								Gold / Silver / Crystal
							</li>
							<li
								value='ruby / sapphire / emerald'
								onClick={() => {
									setGame('ruby / sapphire / emerald')
									setIsOpenGame(false)
								}}
							>
								Ruby / Sapphire / Emerald
							</li>
						</ol>
					)}
				</Dropdown>
				<Dropdown>
					<button onClick={toggleOpenTrack}>
						<span>{isOpenTrack ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
						<span>Select a Track</span>
						<span>{isOpenTrack ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
					</button>
					{isOpenTrack && (
						<ol>
							<OptionTitle
								style={
									game !== 'red / blue / yellow' &&
									game !== 'all' &&
									game !== 'Select A Game'
										? { display: 'none' }
										: { display: 'block' }
								}
							>
								Red / Blue / Yellow
							</OptionTitle>
							{filteredMusics?.map(
								(m) =>
									m?.id < 58 &&
									m?.id > 0 && (
										<li key={m?.name + m?.id} onClick={() => selectTrack(m)}>
											{m?.name}
										</li>
									)
							)}
							<OptionTitle
								style={
									game !== 'gold / silver / crystal' &&
									game !== 'all' &&
									game !== 'Select A Game'
										? { display: 'none' }
										: { display: 'block' }
								}
							>
								Gold / Silver / Crystal
							</OptionTitle>
							{filteredMusics?.map(
								(m) =>
									m?.id < 176 &&
									m?.id > 57 && (
										<li key={m?.name + m?.id} onClick={() => selectTrack(m)}>
											{m?.name}
										</li>
									)
							)}
							<OptionTitle
								style={
									game !== 'ruby / sapphire / emerald' &&
									game !== 'all' &&
									game !== 'Select A Game'
										? { display: 'none' }
										: { display: 'block' }
								}
							>
								Ruby / Sapphire / Emerald
							</OptionTitle>
							{filteredMusics?.map(
								(m) =>
									m?.id > 175 && (
										<li key={m?.name + m?.id} onClick={() => selectTrack(m)}>
											{m?.name}
										</li>
									)
							)}
						</ol>
					)}
				</Dropdown>
			</Head>
		</>
	)
}
