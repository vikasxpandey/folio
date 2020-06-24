import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/Seo'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Services from '../components/Services'

const IndexPage = () => (
	<Layout>
		<SEO title='Home' />
		<Hero />
		<section id='projects'>
			<Projects />
		</section>
		<section id='services'>
			<Services />
		</section>
	</Layout>
)

export default IndexPage
