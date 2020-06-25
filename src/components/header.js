import React, { useState } from 'react'

import { Link } from 'gatsby'
import styles from '../styles/header.module.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const Header = ({ siteTitle }) => {
	const [expanded, setExpanded] = useState(false)

	return (
		<header>
			<Navbar
				className={styles.headerNavbar}
				variant='dark'
				fixed='top'
				expand='md'
				expanded={expanded}
			>
				<Navbar.Brand href='/'>
					{siteTitle.split(' ')[0]}
					<span className='colorSecondary'>{siteTitle.split(' ')[1]}</span>
				</Navbar.Brand>
				<Navbar.Toggle
					onClick={() => setExpanded(true)}
					aria-controls='basic-navbar-nav'
				/>
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='mr-auto'>
						<Navbar.Text
							onClick={() => setExpanded(false)}
							className={styles.navLink}
						>
							<Link to='/#projects'>Projects</Link>
						</Navbar.Text>
						<Navbar.Text
							onClick={() => setExpanded(false)}
							className={styles.navLink}
						>
							<Link to='/#services'>Services</Link>
						</Navbar.Text>
						<Navbar.Text
							onClick={() => setExpanded(false)}
							className={styles.navLink}
						>
							<Link to='/#about'>About</Link>
						</Navbar.Text>
						<Navbar.Text
							onClick={() => setExpanded(false)}
							className={styles.navLink}
						>
							<Link to='/#contact'>Contact</Link>
						</Navbar.Text>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</header>
	)
}

export default Header
