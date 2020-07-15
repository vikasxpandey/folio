import React from 'react'

import styles from '../styles/projects.module.css'
import Title from './Title'
import Container from 'react-bootstrap/Container'
import Carousel from 'react-bootstrap/Carousel'

import bg0 from '../media/projects/0.png'
import bg1 from '../media/projects/1.png'
import bg2 from '../media/projects/2.png'
import bg3 from '../media/projects/3.png'

const pages = [
	<Carousel.Item
		className={styles.projectItem}
		style={{ backgroundImage: `url(${bg0})` }}
	>
		<Carousel.Caption className={styles.caption}>
			<Container>
				<h2 className='font-weight-bold pb-md-4'>
					Canvastones<span className='colorSecondary'>.com</span>
				</h2>
				<p>An E-commerce website.</p>
				<p>
					This project was developed as a Freelance project in three months from
					Prototyping to Deployment and Maintainance. It uses Opencart as the
					base framework which is written in PHP and follows the MVC
					architecture. Additionally MySQL for database and HTML - CSS -
					JavaScript Combination for its Front End.
				</p>
				<a
					rel='noreferrer'
					target='_blank'
					href='https://www.canvastones.com'
					className='btn btn-lg dispBlock mt-3 btn-defaultBlack'
				>
					Check Out
				</a>
			</Container>
		</Carousel.Caption>
		<div className={styles.overlay}></div>
	</Carousel.Item>,
	<Carousel.Item
		className={styles.projectItem}
		style={{ backgroundImage: `url(${bg1})` }}
	>
		<Carousel.Caption className={styles.caption}>
			<Container>
				<h2 className='font-weight-bold pb-md-4'>
					Revolotech<span className='colorSecondary'>.com</span>
				</h2>
				<p>A multi-page dynamic website developed from scratch.</p>
				<p>
					This project was developed while I was working as an Intern at Revolo
					Infotech. It uses PHP as the Server side language along with a MySQL
					database. While the Front End uses the HTML - CSS - JavaScript
					Combination.
				</p>
				<a
					rel='noreferrer'
					target='_blank'
					href='https://www.revolotech.com/'
					className='btn btn-lg dispBlock mt-3 btn-defaultBlack'
				>
					Check Out
				</a>
			</Container>
		</Carousel.Caption>
		<div className={styles.overlay}></div>
	</Carousel.Item>,
	<Carousel.Item
		className={styles.projectItem}
		style={{ backgroundImage: `url(${bg2})` }}
	>
		<Carousel.Caption className={styles.caption}>
			<Container>
				<h2 className='font-weight-bold pb-md-4'>
					Ignite<span className='colorSecondary'>.intuitioneers</span>
				</h2>
				<p>A social network and discussion forum for Developers.</p>
				<p>
					This is a project I developed to brush up my ReactJS and NodeJS
					skills. It uses ReactJS as client side Front End framework while
					NodeJS as Server side Back End language. Moreover, it uses MongoDB as
					its Database.
				</p>
				<a
					rel='noreferrer'
					target='_blank'
					href='https://www.github.com/vikasxpandey/ignite'
					className='btn btn-lg dispBlock mt-3 btn-defaultBlack'
				>
					Check Out
				</a>
			</Container>
		</Carousel.Caption>
		<div className={styles.overlay}></div>
	</Carousel.Item>,
	<Carousel.Item
		className={styles.projectItem}
		style={{
			backgroundImage: `url(${bg3})`
		}}
	>
		<Carousel.Caption className={styles.caption}>
			<Container>
				<h2 className='font-weight-bold pb-md-4'>
					More on Github<span className='colorSecondary'>.com</span>
				</h2>
				<p>Find more projects on my GitHub.</p>
				<p>
					Head over to my GitHub to explore more projects across various
					domains.
				</p>
				<a
					rel='noreferrer'
					target='_blank'
					href='https://www.github.com/vikasxpandey'
					className='btn btn-lg dispBlock mt-3 btn-defaultBlack'
				>
					Check Out
				</a>
			</Container>
		</Carousel.Caption>
		<div className={styles.overlay}></div>
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
