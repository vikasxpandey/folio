import React from 'react'

import styles from '../styles/about.module.css'
import Title from './Title'
import Container from 'react-bootstrap/Container'

import bg from '../media/images/me-bg.jpg'

const About = () => (
	<div className={styles.about}>
		<Title text='About' />
		<div className={styles.bgContainer}>
			<img src={bg} alt='background' />
		</div>
		<Container
			data-sal='slide-down'
			data-sal-duration='500'
			className={styles.aboutContent}
		>
			<h3>
				Vikas <span className='colorSecondary'>Pandey</span>, Computer Engineer
				from Mumbai University.
			</h3>
			<h4 className='colorGraySolid'>
				I specialize in Web Development, App Development, UI/UX Development and
				Data Science to build and strengthen your brand's online presence and
				create an elegant digital experience.
			</h4>
			<h4>
				Get in touch to
				<span className='colorSecondary'> Get Started.</span>
			</h4>
			<div className={styles.social}>
				<a
					rel='noreferrer'
					target='_blank'
					href='https://www.facebook.com/vikasxpandey'
				>
					<i className='fab fa-2x fa-facebook'></i>
				</a>
				<a
					rel='noreferrer'
					target='_blank'
					href='https://www.twitter.com/vikasxpandey'
				>
					<i className='fab fa-2x fa-twitter'></i>
				</a>
				<a
					rel='noreferrer'
					target='_blank'
					href='https://www.instagram.com/vikasxpandey'
				>
					<i className='fab fa-2x fa-instagram'></i>
				</a>
				<a
					rel='noreferrer'
					target='_blank'
					href='https://www.linkedin.com/in/vikasxpandey'
				>
					<i className='fab fa-2x fa-linkedin'></i>
				</a>
				<a
					rel='noreferrer'
					target='_blank'
					href='https://www.codepen.io/vikasxpandey'
				>
					<i className='fab fa-2x fa-codepen'></i>
				</a>
				<a
					rel='noreferrer'
					target='_blank'
					href='https://www.github.com/vikasxpandey'
				>
					<i className='fab fa-2x fa-github'></i>
				</a>
			</div>
		</Container>
	</div>
)

export default About
