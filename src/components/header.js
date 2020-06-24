import React from 'react'

import styles from '../styles/header.module.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const Header = ({ siteTitle }) => (
	<header>
		<Navbar
			className={styles.headerNavbar}
			variant='dark'
			fixed='top'
			expand='md'
		>
			<Navbar.Brand href='/'>
				{siteTitle.split(' ')[0]}
				<span className='colorSecondary'>{siteTitle.split(' ')[1]}</span>
			</Navbar.Brand>
			<Navbar.Toggle aria-controls='basic-navbar-nav' />
			<Navbar.Collapse id='basic-navbar-nav'>
				<Nav className='mr-auto'>
					<Nav.Link href='#projects'>Projects</Nav.Link>
					<Nav.Link href='#services'>Services</Nav.Link>
					<Nav.Link href='#about'>About</Nav.Link>
					<Nav.Link href='#contact'>Contact</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	</header>
)

Header.defaultProps = {
	siteTitle: ``
}

export default Header
