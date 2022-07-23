import React, { useState } from 'react';
import musics from '../../helpers/musics.json';
import { Main } from './Styled.Player';

import {TbPlayerPlay, TbPlayerPause, TbPlayerSkipBack, TbPlayerSkipForward} from 'react-icons/tb';

export default function Player() {

    const[isPlaying, setIsPlaying] = useState(false);

    const togglePlayPause = () => {
        setIsPlaying(!isPlaying)
    }

    return (
        <Main>
            <div>
                <p>0:00</p>
                <input type="range" />
                <p>2:50</p>
            </div>
            <div>
                <audio src={musics[0].link} preload='metadata'></audio>
                <button title='Back 10 seconds'><TbPlayerSkipBack /></button>
                <button onClick={togglePlayPause}>
                    {isPlaying ? (
                        <TbPlayerPause />
                    ) : (
                        <TbPlayerPlay />
                    )}
                </button>
                <button title='Forward 10 seconds'><TbPlayerSkipForward /></button>
            </div>
        </Main>
    )
}
