import React from 'react'

import Title from './Title'
import ServiceRow from './ServiceRow'
import ServiceCol from './ServiceCol'
// import styles from '../styles/services.module.css'
import Container from 'react-bootstrap/Container'

import singlePageWebsite from '../media/images/single-page.jpg'
import portfolio from '../media/images/portfolio.jpg'
import eCommerce from '../media/images/ecommerce.jpg'
import wordpress from '../media/images/wordpress.jpg'
import android from '../media/images/android.jpg'
import ios from '../media/images/ios.jpg'
import webApp from '../media/images/web-app.jpg'
import seo from '../media/images/seo.jpg'
import prototyping from '../media/images/prototyping.jpg'
import uiux from '../media/images/uiux.jpg'
import dataScience from '../media/images/data-sci.jpg'

const Services = () => (
	<>
		<Title text='Services' />
		<Container className='mb-5'>
			<ServiceRow one='On the' two='W' three='eb'>
				<ServiceCol bg={singlePageWebsite} text='Single Page Website' />
				<ServiceCol bg={portfolio} text='Portfolio' />
				<ServiceCol bg={eCommerce} text='E-Commerce' />
				<ServiceCol bg={wordpress} text='Wordpress' />
			</ServiceRow>
			<ServiceRow one='In the' two='P' three='hone'>
				<ServiceCol bg={android} text='Android App' />
				<ServiceCol bg={ios} text='iOS App' />
				<ServiceCol bg={webApp} text='LightWeight Web App' />
			</ServiceRow>
			<ServiceRow one='For the' two='B' three='rand'>
				<ServiceCol bg={seo} text='SEO' />
				<ServiceCol bg={prototyping} text='Prototyping' />
				<ServiceCol bg={uiux} text='UI/UX' />
				<ServiceCol bg={dataScience} text='Data Science' />
			</ServiceRow>
		</Container>
	</>
)

export default Services
