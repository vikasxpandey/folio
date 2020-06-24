import React from 'react'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const Header = ({ siteTitle }) => (
	<Navbar className='headerNavbar' variant='dark' fixed='top' expand='md'>
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
)

Header.defaultProps = {
	siteTitle: ``
}

export default Header
