import React from 'react'

import styles from '../styles/hero.module.css'
import HeroVideo from '../media/video/video.mp4'
import Container from 'react-bootstrap/Container'

const Hero = () => (
	<div className={styles.hero}>
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
			<span className={styles.heroText}>
				<span>LET'S</span>
				<span>Create</span>
			</span>
		</Container>
	</div>
)

export default Hero
