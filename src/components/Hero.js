import React from 'react'

import { useSpring, animated } from 'react-spring'
import styles from '../styles/hero.module.css'
import HeroVideo from '../media/video/video1.mp4'
import Container from 'react-bootstrap/Container'

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`

const Hero = () => {
	const [props, set] = useSpring(() => ({
		xy: [0, 0],
		config: { mass: 10, tension: 550, friction: 140 }
	}))

	return (
		<div
			className={styles.hero}
			onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
		>
			<div className={styles.videoContainer}>
				<video
					src={HeroVideo}
					preload='auto'
					width='854px'
					height='480px'
					autoPlay
					playsInline
					muted
					loop
				></video>
			</div>
			<Container>
				<animated.div
					className={styles.heroText}
					style={{ transform: props.xy.interpolate(trans) }}
				>
					<span>LET'S</span>
					<span>Create</span>
				</animated.div>
			</Container>
		</div>
	)
}

export default Hero
