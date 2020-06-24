import React from 'react'
import '../styles/hero.css'

import HeroVideo from '../media/video.mp4'
import Container from 'react-bootstrap/Container'

const Hero = () => (
	<div className='hero'>
		<div className='videoContainer'>
			<video
				id='bg-video'
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
			<span className='heroText font-weight-bold'>
				<span>LET'S</span>
				<span>Create</span>
			</span>
		</Container>
	</div>
)

export default Hero
