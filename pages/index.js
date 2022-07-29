import React, { useState } from 'react'
import Head from 'next/head'
import styled, { ThemeProvider } from 'styled-components'
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

	return (
		<>
			<Head>
				<title>PRBN | Pokémon Radio Broadcasting Network</title>
			</Head>
			<ThemeProvider theme={theme}>
				<GlobalStyles />
				<Layout>
					<Header curTrack={curTrack} setCurTrack={setCurTrack} />
					<Player curTrack={curTrack} setCurTrack={setCurTrack} />
					<Footer />
				</Layout>
			</ThemeProvider>
		</>
	)
}
