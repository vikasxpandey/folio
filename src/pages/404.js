import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/Seo'
import Container from 'react-bootstrap/Container'

const NotFoundPage = () => (
	<Layout>
		<SEO title='404: Not found' />
		<Container className='mt-5 text-center pt-5'>
			<h1 className='font-weight-bold colorPrimary'>
				<span className='colorSecondary'>NOT</span> FOUND
			</h1>
			<p className='colorGray'>
				You just hit a route that doesn&#39;t exist...the sadness.
			</p>
		</Container>
	</Layout>
)

export default NotFoundPage
