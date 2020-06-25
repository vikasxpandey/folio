import React, { useRef } from 'react'

import styles from '../styles/projects.module.css'
import Title from './Title'
import Container from 'react-bootstrap/Container'
import Carousel from 'react-bootstrap/Carousel'

const pages = [
	<Carousel.Item className={styles.projectItem}>
		<Carousel.Caption>
			<Container>
				<h2 className='font-weight-bold'>
					Canvastones<span className='colorSecondary'>.com</span>
				</h2>
				<p>An E-commerce website.</p>
				<p>
					This project was made as a Freelance project in three months from
					Prototyping to Deployment and Maintainance. It uses Opencart as the
					base framework which is written in PHP and follows the MVC
					architecture. Additionally MySQL for database and HTML - CSS -
					JavaScript Combination for its Front End.
				</p>
				<a
					target='_blank'
					href='https://www.canvastones.com'
					className='btn btn-lg dispBlock mt-3 btn-defaultBlack'
				>
					Check Out
				</a>
			</Container>
		</Carousel.Caption>
	</Carousel.Item>,
	<Carousel.Item className={styles.projectItem}>
		<Carousel.Caption>
			<Container>
				<h2 className='font-weight-bold'>
					Revolotech<span className='colorSecondary'>.com</span>
				</h2>
				<p>A multi-page dynamic website built from scratch.</p>
				<p>
					This project was made while I was working as an Intern at Revolo
					Infotech. It uses PHP as the Server side language along with a MySQL
					database. While the Front End uses the HTML - CSS - JavaScript
					Combination.
				</p>
				<a
					target='_blank'
					href='https://www.revolotech.com/'
					className='btn btn-lg dispBlock mt-3 btn-defaultBlack'
				>
					Check Out
				</a>
			</Container>
		</Carousel.Caption>
	</Carousel.Item>,
	<Carousel.Item className={styles.projectItem}>
		<Carousel.Caption>
			<Container>
				<h2 className='font-weight-bold'>
					Ignite<span class='colorSecondary'>.intuitioneers</span>
				</h2>
				<p>A social network and discussion forum for Developers.</p>
				<p>
					This is a project I developed to brush up my ReactJS and NodeJS
					skills. It uses ReactJS as client side Front End framework while
					NodeJS as Server side Back End language. Moreover, it uses MongoDB as
					its Database.
				</p>
				<a
					target='_blank'
					href='https://www.github.com/vikasxpandey/ignite'
					className='btn btn-lg dispBlock mt-3 btn-defaultBlack'
				>
					Check Out
				</a>
			</Container>
		</Carousel.Caption>
	</Carousel.Item>,
	<Carousel.Item className={styles.projectItem}>
		<Carousel.Caption>
			<Container>
				<h2 className='font-weight-bold'>
					More on Github<span className='colorSecondary'>.com</span>
				</h2>
				<p>Find more projects on my GitHub.</p>
				<p>
					Head over to my GitHub to explore more projects based on Data Science
					and Machine Learning.
				</p>
				<a
					target='_blank'
					href='https://www.github.com/vikasxpandey'
					className='btn btn-lg dispBlock mt-3 btn-defaultBlack'
				>
					Check Out
				</a>
			</Container>
		</Carousel.Caption>
	</Carousel.Item>
]

const Projects = () => {
	return (
		<>
			<Title text='Projects' />
			<Carousel>{pages.map((page) => page)}</Carousel>
		</>
	)
}

export default Projects
