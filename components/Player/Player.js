import React, { useState, useEffect, useRef, useCallback } from 'react'
import musics from '/helpers/musics.json'
import {
	AudioContainer,
	Main,
	MoveButton,
	PlayButton,
	ProgressBar,
	Time,
} from './Styled.Player'

import {
	TbPlayerPlay,
	TbPlayerPause,
	TbPlayerSkipBack,
	TbPlayerSkipForward,
	TbPlayerTrackPrev,
	TbPlayerTrackNext,
	TbArrowsShuffle2,
} from 'react-icons/tb'

import { TiArrowLoop } from 'react-icons/ti'

import Info from './Info/Info'

export default function Player({ curTrack, setCurTrack, game, filteredMusics }) {
	const [isPlaying, setIsPlaying] = useState(false)
	const [duration, setDuration] = useState(0)
	const [curTime, setCurTime] = useState(0)
	const [shuffled, setShuffled] = useState(false)
	const [looped, setLooped] = useState(false)

	const audio = useRef()
	const progressBar = useRef()
	const animationRef = useRef()

	useEffect(() => {
		const seconds = Math.floor(audio?.current?.duration)
		setDuration(seconds)
		progressBar.current.max = seconds
	}, [audio?.current?.loadedmetadata, audio?.current?.readyState])

	const calculateTime = (secs) => {
		const minutes = Math.floor(secs / 60)
		const seconds = Math.floor(secs % 60)
		const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`

		return `${minutes}:${returnedSeconds}`
	}

	const changeRange = () => {
		audio.current.currentTime = progressBar.current.value
		setCurTime(progressBar.current.value)
	}
	
	const rangeDot = useCallback(() => {
		progressBar.current.value = audio.current.currentTime
		setCurTime(progressBar.current.value)
		animationRef.current = requestAnimationFrame(rangeDot)
	}, [])

	const togglePlayPause = useCallback(() => {
		setIsPlaying(!isPlaying)
		if (isPlaying) {
			audio.current.pause()
			cancelAnimationFrame(animationRef.current)
		} else {
			audio.current.play()
			animationRef.current = requestAnimationFrame(rangeDot)
		}
	}, [isPlaying, rangeDot])

	const previous = () => {
		if (curTrack === 0) {
			setCurTrack(curTrack)
		} else {
			setCurTrack(curTrack - 1)
			setIsPlaying(false)
			rangeDot()
		}
	}

	const backward = () => {
		progressBar.current.value = Number((progressBar.current.value -= 10))
		changeRange()
	}

	const forward = () => {
		progressBar.current.value = Number((progressBar.current.value += 10))
		changeRange()
	}

	const next = useCallback(() => {
		if (game === 'red / blue / yellow' && curTrack === 56) {
			setCurTrack(curTrack)
			setIsPlaying(false)
			alert('Red / Blue / Yellow soundtrack ended')
		} else if (game === 'gold / silver / crystal' && curTrack === 174) {
			setCurTrack(curTrack)
			setIsPlaying(false)
			alert('Gold / Silver / Crystal soundtrack ended')
		} else {
			setCurTrack(curTrack + 1)
			setIsPlaying(false)
			rangeDot()
		}
	}, [game, curTrack, setCurTrack, rangeDot])

	const loop = () => {
		setLooped(!looped)
	}

	useEffect(() => {
		if(looped && curTime == duration) {
			progressBar.current.value === 0
			setCurTime(progressBar.current.value)
			setIsPlaying(true)
		}
	}, [curTime, looped, duration])

	const canPlay = () => {
		setIsPlaying(true)
	}

	const shuffle = () => {
		setShuffled(!shuffled)
	}

	console.log(curTrack)

	return (
		<Main>
			<Info musics={musics} curTrack={curTrack} isPlaying={isPlaying} />
			<section>
				<Time>
					<p>{calculateTime(curTime)}</p>
					<ProgressBar
						ref={progressBar}
						type='range'
						defaultValue={0}
						onChange={changeRange}
					/>
					<p>{duration && !isNaN(duration) && calculateTime(duration)}</p>
				</Time>
				<AudioContainer>
					<audio
						ref={audio}
						src={musics?.[curTrack]?.link}
						preload='metadata'
						onEnded={next}
						onCanPlay={canPlay}
						autoPlay
					></audio>
					<MoveButton title='Loop' onClick={loop}
						style={
							looped 
								? {color: '#A1946B'}
								: {color: '#DDDDDD'}
						}
					>
						<TiArrowLoop />
					</MoveButton>
					<MoveButton title='Previous track' onClick={previous}>
						<TbPlayerTrackPrev />
					</MoveButton>
					<MoveButton title='Back 10 seconds' onClick={backward}>
						<TbPlayerSkipBack />
					</MoveButton>
					<PlayButton onClick={togglePlayPause}>
						{isPlaying ? <TbPlayerPause /> : <TbPlayerPlay />}
					</PlayButton>
					<MoveButton title='Forward 10 seconds' onClick={forward}>
						<TbPlayerSkipForward />
					</MoveButton>
					<MoveButton title='Next track' onClick={next}>
						<TbPlayerTrackNext />
					</MoveButton>
					<MoveButton title='Shuffle' onClick={shuffle}
						style={
							shuffled 
								? {color: '#A1946B'}
								: {color: '#DDDDDD'}
						}
					>
						<TbArrowsShuffle2 />
					</MoveButton>
				</AudioContainer>
			</section>
		</Main>
	)
}
