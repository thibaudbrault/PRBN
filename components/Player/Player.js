import React, { useState, useEffect, useRef, useCallback } from 'react'
import musics from '../../helpers/musics.json'
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

export default function Player() {
	const [isPlaying, setIsPlaying] = useState(false)
	let [curTrack, setCurTrack] = useState(0)
	const [duration, setDuration] = useState(0)
	const [curTime, setCurTime] = useState(0)

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

	const togglePlayPause = () => {
		setIsPlaying(!isPlaying)
		if (isPlaying) {
			audio.current.pause()
			cancelAnimationFrame(animationRef.current)
		} else {
			audio.current.play()
			animationRef.current = requestAnimationFrame(rangeDot)
		}
	}

	const rangeDot = useCallback(() => {
		progressBar.current.value = audio.current.currentTime
		setCurTime(progressBar.current.value)
		animationRef.current = requestAnimationFrame(rangeDot)
	}, [])

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
		progressBar.current.value = Number(progressBar.current.value -= 10)
		changeRange()
	}

	const forward = () => {
		progressBar.current.value = Number(progressBar.current.value += 10)
		changeRange()
	}

	const next = useCallback(() => {
		if(musics?.[curTrack]?.id == musics.length) {
			setCurTrack(curTrack)
		} else {
			setCurTrack(curTrack + 1)
			setIsPlaying(false)
			rangeDot()
		}
	}, [curTrack, rangeDot])

	useEffect(() => {
		if (curTime == duration) {
			next()
		}
	}, [curTime, duration, next])

	return (
		<Main>
			<Info musics={musics} curTrack={curTrack} />
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
					></audio>
					<MoveButton title='Loop'>
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
					<MoveButton title='Shuffle'>
						<TbArrowsShuffle2 />
					</MoveButton>
				</AudioContainer>
			</section>
		</Main>
	)
}
