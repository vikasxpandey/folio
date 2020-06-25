import React from 'react'

import styles from '../styles/contact.module.css'
import Title from './Title'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Contact = () => (
	<>
		<Title text='Contact' />
		<div className={styles.contactHero}>
			<div>
				<span data-sal='slide-up' data-sal-duration='500' data-sal-delay='100'>
					S
				</span>
				<span data-sal='slide-up' data-sal-duration='500' data-sal-delay='200'>
					A
				</span>
				<span data-sal='slide-up' data-sal-duration='500' data-sal-delay='300'>
					Y
				</span>
			</div>
			<div>
				<span data-sal='slide-up' data-sal-duration='500' data-sal-delay='100'>
					H
				</span>
				<span data-sal='slide-up' data-sal-duration='500' data-sal-delay='200'>
					E
				</span>
				<span data-sal='slide-up' data-sal-duration='500' data-sal-delay='300'>
					L
				</span>
				<span data-sal='slide-up' data-sal-duration='500' data-sal-delay='400'>
					L
				</span>
				<span data-sal='slide-up' data-sal-duration='500' data-sal-delay='500'>
					O
				</span>
			</div>
		</div>

		<Container className='pt-5'>
			<Row>
				<Col md={6} className='mt-3 text-center'>
					<h5 className='colorPrimary'>
						<i className='fa fa-envelope-open-text'></i>&nbsp;&nbsp;&nbsp;Send
						an Email
						<a className='colorSecondary' href='mailto:vikasxpandey@gmail.com'>
							{' '}
							HERE.
						</a>
					</h5>
				</Col>

				<Col md={6} className='mt-3 text-center'>
					<h5 className='colorPrimary'>
						<i className='fa fa-phone-alt'></i>&nbsp;&nbsp;&nbsp;Give a Call
						<a className='colorSecondary' href='tel:+917774962129'>
							{' '}
							HERE.
						</a>
					</h5>
				</Col>
			</Row>
		</Container>
	</>
)

export default Contact
