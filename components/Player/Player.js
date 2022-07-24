import React, { useState, useEffect, useRef } from 'react';
import musics from '../../helpers/musics.json';
import { AudioContainer, Main, MoveButton, PlayButton, ProgressBar, Time } from './Styled.Player';

import {TbPlayerPlay, TbPlayerPause, TbPlayerSkipBack, TbPlayerSkipForward, TbPlayerTrackPrev, TbPlayerTrackNext} from 'react-icons/tb';

import Info from './Info/Info';

export default function Player() {

    const[isPlaying, setIsPlaying] = useState(false);
    let [curTrack, setCurTrack] = useState(0);
    const [duration, setDuration] = useState(0);

    const audio = useRef();

    useEffect(() => {
        const seconds = Math.floor(audio?.current?.duration);
        setDuration(seconds);
        // progressBar.current.max = seconds;
    }, [audio?.current?.loadedmetadata, audio?.current?.readyState]);
    
    const calculateTime = (secs) => {
        const minutes = Math.floor(secs / 60);
        const seconds = Math.floor(secs % 60);
        const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;

        return `${minutes}:${returnedSeconds}`;
    }

    const togglePlayPause = () => {
        setIsPlaying(!isPlaying);
        if(isPlaying) {
            audio.current.pause()
        } else {
            audio.current.play()
        }
    }

    const previous = () => {
        if(curTrack === 0) {
            setCurTrack(curTrack)
        } else {
            setCurTrack(curTrack - 1)
            setIsPlaying(false)
        }
    }

    const next = () => {
        setCurTrack(curTrack + 1);
        setIsPlaying(false);
    }

    return (
        <Main>
            <Info musics={musics} curTrack={curTrack} />
            <section>
                <Time>
                    <p>0:00</p>
                    <ProgressBar type="range" />
                    <p>{(duration && !isNaN(duration)) && calculateTime(duration)}</p>
                </Time>
                <AudioContainer>
                    <audio ref={audio} src={musics?.[curTrack]?.link} preload='metadata'></audio>
                    <MoveButton onClick={previous} title='Previous track'><TbPlayerTrackPrev /></MoveButton>
                    <MoveButton title='Back 10 seconds'><TbPlayerSkipBack /></MoveButton>
                    <PlayButton onClick={togglePlayPause}>
                        {isPlaying ? (
                            <TbPlayerPause />
                        ) : (
                            <TbPlayerPlay />
                        )}
                    </PlayButton>
                    <MoveButton title='Forward 10 seconds'><TbPlayerSkipForward /></MoveButton>
                    <MoveButton onClick={next} title='Next track'><TbPlayerTrackNext /></MoveButton>
                </AudioContainer>
            </section>
        </Main>
    )
}
