import React from 'react';
import musics from '../../helpers/musics.json';
import { Main } from './Styled.Player';

export default function Player() {
  return (
    <Main>
        <audio src={musics[0].link} preload='metadata'></audio>
        <button>-10s</button>
        <button>play</button>
        <button>pause</button>
        <button>+10s</button>
        <div>
            <p>0:00</p>
            <input type="range" />
            <p>2:50</p>
        </div>
    </Main>
  )
}
