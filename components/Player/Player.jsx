import React, { useState, useEffect, useRef, useCallback } from 'react'
import musics from '/data/musics.json'
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

export default function Player({ curTrack, setCurTrack, game }) {

	// change when the track is playing or paused
	const [isPlaying, setIsPlaying] = useState(false)
	// total duration of the track
	const [duration, setDuration] = useState(0)
	// current time of the track
	const [curTime, setCurTime] = useState(0)
	// change when the user click on the shuffle button
	const [shuffled, setShuffled] = useState(false)
	// change when the user click on the loop button
	const [looped, setLooped] = useState(false)

	// ref the audio
	const audio = useRef()
	// ref the progress bar
	const progressBar = useRef()
	// ref the dot animation
	const animationRef = useRef()

	// modify the total duration of the track
	const onLoadedMetadata = () => {
		const seconds = Math.floor(audio?.current?.duration)
		setDuration(seconds)
		progressBar.current.max = seconds
	}

	// calculate and return the current time and the total duration
	const calculateTime = (secs) => {
		const minutes = Math.floor(secs / 60)
		const seconds = Math.floor(secs % 60)
		const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`

		return `${minutes}:${returnedSeconds}`
	}

	// make the user able to move the range to change the current time of the track
	const changeRange = () => {
		audio.current.currentTime = progressBar.current.value
		setCurTime(progressBar.current.value)
	}

	// change the dot position to be equal to the track's current time
	const rangeDot = useCallback(() => {
		progressBar.current.value = audio.current.currentTime
		setCurTime(progressBar.current.value)
		animationRef.current = requestAnimationFrame(rangeDot)
	}, [])

	// make the play / pause button works
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

	// move back 10 seconds
	const backward = () => {
		progressBar.current.value = Number(progressBar.current.value) - 10
		changeRange()
	}

	// move forward 10 seconds
	const forward = () => {
		progressBar.current.value = Number(progressBar.current.value) + 10
		changeRange()
	}

	// stay on the same track if the current one is the first of the list
	// go to a random track when shuffled is true
	// stay on the same track if the current one is the first of the game selected
	// go to previous track when clicking the previous button
	const previous = () => {
		if (curTrack === 0) {
			setCurTrack(curTrack)
		} else if (shuffled) {
			setCurTrack(Math.floor(Math.random() * 174) + 1)
		} else if (game === 'gold / silver / crystal' && curTrack === 57) {
			setCurTrack(curTrack)
			setIsPlaying(false)
		} else {
			setCurTrack(curTrack - 1)
			setIsPlaying(false)
			rangeDot()
		}
	}

	// switch between true and false when clicking the loop button
	const loop = () => {
		setLooped(!looped)
	}

	// stay on the same track when looped is true
	// go to a random track when shuffled is true
	// stay on the same track when the current one is the last of the game selected
	// go to next track when clicking the next button
	const next = useCallback(() => {
		if (looped) {
			setCurTrack(curTrack)
			setIsPlaying(false)
			setCurTime(0)
		} else if (shuffled) {
			setCurTrack(Math.floor(Math.random() * 174) + 1)
		} else if (game === 'red / blue / yellow' && curTrack === 56) {
			setCurTrack(curTrack)
			setIsPlaying(false)
		} else if (game === 'gold / silver / crystal' && curTrack === 174) {
			setCurTrack(curTrack)
			setIsPlaying(false)
		} else {
			setCurTrack(curTrack + 1)
			rangeDot()
		}
	}, [looped, shuffled, game, curTrack, setCurTrack, rangeDot])

	// switch between true and false when clicking the shuffle button
	const shuffle = () => {
		setShuffled(!shuffled)
	}

	// autoplay when the track is fully loaded
	const canPlay = () => {
		setIsPlaying(true)
	}

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
						step='0.05'
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
						onLoadedMetadata={onLoadedMetadata}
						autoPlay
					></audio>
					<MoveButton
						aria-label='Loop'
						title='Loop'
						onClick={loop}
						style={looped ? { color: '#A1946B' } : { color: '#DDDDDD' }}
					>
						<TiArrowLoop />
					</MoveButton>
					<MoveButton aria-label='Previous track' title='Previous track' onClick={previous}>
						<TbPlayerTrackPrev />
					</MoveButton>
					<MoveButton aria-label='Move back 10 seconds' title='Back 10 seconds' onClick={backward}>
						<TbPlayerSkipBack />
					</MoveButton>
					<PlayButton aria-label='Play / Pause' onClick={togglePlayPause}>
						{isPlaying ? <TbPlayerPause /> : <TbPlayerPlay />}
					</PlayButton>
					<MoveButton aria-label='Move forward 10 seconds' title='Forward 10 seconds' onClick={forward}>
						<TbPlayerSkipForward />
					</MoveButton>
					<MoveButton aria-label='Next track' title='Next track' onClick={next}>
						<TbPlayerTrackNext />
					</MoveButton>
					<MoveButton
						aria-label='Shuffle'
						title='Shuffle'
						onClick={shuffle}
						style={shuffled ? { color: '#A1946B' } : { color: '#DDDDDD' }}
					>
						<TbArrowsShuffle2 />
					</MoveButton>
				</AudioContainer>
			</section>
		</Main>
	)
}
