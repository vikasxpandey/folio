import React from 'react'

import styles from '../styles/projects.module.css'
import Title from './Title'
import Carousel from 'react-bootstrap/Carousel'

const Projects = () => (
	<>
		<Title text='Projects' />
		<Carousel>
			<Carousel.Item className={styles.projectItem}>
				<Carousel.Caption>
					<h3>First slide label</h3>
					<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item className={styles.projectItem}>
				<Carousel.Caption>
					<h3>Second slide label</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item className={styles.projectItem}>
				<Carousel.Caption>
					<h3>Third slide label</h3>
					<p>
						Praesent commodo cursus magna, vel scelerisque nisl consectetur.
					</p>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	</>
)

export default Projects
