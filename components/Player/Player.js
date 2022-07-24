import React, { useState } from 'react';
import musics from '../../helpers/musics.json';
import { Audio, Main, MoveButton, PlayButton, ProgressBar, Time } from './Styled.Player';

import {TbPlayerPlay, TbPlayerPause, TbPlayerSkipBack, TbPlayerSkipForward, TbPlayerTrackPrev, TbPlayerTrackNext} from 'react-icons/tb';

export default function Player() {

    const[isPlaying, setIsPlaying] = useState(false);

    const togglePlayPause = () => {
        setIsPlaying(!isPlaying)
    }

    return (
        <Main>
            <Time>
                <p>0:00</p>
                <ProgressBar type="range" />
                <p>2:50</p>
            </Time>
            <Audio>
                <audio src={musics[0].link} preload='metadata'></audio>
                <MoveButton title='Previous track'><TbPlayerTrackPrev /></MoveButton>
                <MoveButton title='Back 10 seconds'><TbPlayerSkipBack /></MoveButton>
                <PlayButton onClick={togglePlayPause}>
                    {isPlaying ? (
                        <TbPlayerPause />
                    ) : (
                        <TbPlayerPlay />
                    )}
                </PlayButton>
                <MoveButton title='Forward 10 seconds'><TbPlayerSkipForward /></MoveButton>
                <MoveButton title='Next track'><TbPlayerTrackNext /></MoveButton>
            </Audio>
        </Main>
    )
}
