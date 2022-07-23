import Head from 'next/head';
import styled from 'styled-components';
import { GlobalStyles } from '../components/CommonStyles/GlobalStyles';
import Header from '../components/Header/Header';
import Player from '../components/Player/Player';
import Footer from '../components/Footer/Footer';

const Layout = styled.div`
  width: 95%;
  height: 100vh;
  margin: 0 auto;
  overflow: hidden;
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>PRBN | Pokémon Radio Broadcasting Network</title>
        <meta name="description" content="Listen to every pokémon games ost" />
      </Head>
      <GlobalStyles />
      <Layout>
        <Header />
        <Player />
        <Footer />
      </Layout>
    </>
  )
}
