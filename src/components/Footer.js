import React from 'react'

import { Link } from 'gatsby'
import styles from '../styles/footer.module.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Footer = () => (
	<footer className='mt-5'>
		<Container className='border-top pt-5 pb-5'>
			<Row>
				<Col md={3}>
					<div>
						<h2>
							<span className='colorPrimary'>Vikas </span>
							<span className='colorSecondary'>Pandey</span>
						</h2>
						<div className={styles.footerSocial}>
							<a target='_blank' href='https://www.facebook.com/vikasxpandey'>
								<i class='fab colorPrimary fa-facebook'></i>
							</a>
							<a target='_blank' href='https://www.twitter.com/vikasxpandey'>
								<i class='fab colorPrimary fa-twitter'></i>
							</a>
							<a target='_blank' href='https://www.instagram.com/vikasxpandey'>
								<i class='fab colorPrimary fa-instagram'></i>
							</a>
							<a
								target='_blank'
								href='https://www.linkedin.com/in/vikasxpandey'
							>
								<i class='fab colorPrimary fa-linkedin'></i>
							</a>
							<a target='_blank' href='https://www.codepen.io/vikasxpandey'>
								<i class='fab colorPrimary fa-codepen'></i>
							</a>
							<a target='_blank' href='https://www.github.com/vikasxpandey'>
								<i class='fab colorPrimary fa-github'></i>
							</a>
						</div>
					</div>
				</Col>
				<Col md={3}>
					<div className={styles.footerInner}>
						<ul>
							<h4 className='colorGray font-weight-bold'>EXPLORE</h4>
							<li>
								<Link to='/#projects'>Projects</Link>
							</li>
							<li>
								<Link to='/#services'>Services</Link>
							</li>
							<li>
								<Link to='/#about'>About</Link>
							</li>
							<li>
								<Link to='/#contact'>Contact</Link>
							</li>
						</ul>
					</div>
				</Col>
				<Col md={6}>
					<div>
						<div className={styles.footerHero}>LET'S TALK.</div>
						<div className='colorGray text-left pl-3'>ABOUT YOUR PROJECT</div>
					</div>
				</Col>
			</Row>
		</Container>
		<div>
			<span className='colorGray font-weight-bold text-center dispBlock mb-3'>
				Copyright &copy; {new Date().getFullYear()}, Vikas Pandey
			</span>
		</div>
	</footer>
)

export default Footer
