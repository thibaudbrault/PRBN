import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import styled, { ThemeProvider } from 'styled-components'
import musics from '/helpers/musics.json'

import { theme } from '../components/CommonStyles/GlobalStyles'
import { GlobalStyles } from '../components/CommonStyles/GlobalStyles'
import Header from '../components/Header/Header'
import Player from '../components/Player/Player'
import Footer from '../components/Footer/Footer'

const Layout = styled.div`
	width: 95%;
	height: 100vh;
	margin: 0 auto;
	overflow: hidden;
`

export default function Home() {
	let [curTrack, setCurTrack] = useState(0)
	const [game, setGame] = useState('Select A Game')
	const [filteredMusics, setFilteredMusics] = useState([])

	useEffect(() => {
		setFilteredMusics(
			musics.filter((m) => {
				if (game === 'all' || game === 'Select A Game') {
					return m?.id > 0
				} else if (game === 'red / blue / yellow') {
					return m?.id < 58 && m?.id > 0
				} else if (game === 'gold / silver / crystal') {
					return m?.id > 57
				}
			})
		)
	}, [game])

	return (
		<>
			<Head>
				<title>PRBN | Pokémon Radio Broadcasting Network</title>
			</Head>
			<ThemeProvider theme={theme}>
				<GlobalStyles />
				<Layout>
					<Header
						curTrack={curTrack}
						setCurTrack={setCurTrack}
						game={game}
						setGame={setGame}
						filteredMusics={filteredMusics}
						setFilteredMusics={setFilteredMusics}
					/>
					<Player
						curTrack={curTrack}
						setCurTrack={setCurTrack}
						game={game}
						filteredMusics={filteredMusics}
					/>
					<Footer />
				</Layout>
			</ThemeProvider>
		</>
	)
}
