import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/Seo'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Services from '../components/Services'
import Tech from '../components/Tech'
import About from '../components/About'
import Contact from '../components/Contact'

const IndexPage = () => {
	return (
		<>
			<Layout>
				<SEO title='Portfolio' />
				<Hero />
				<section id='projects'>
					<Projects />
				</section>
				<section id='services'>
					<Services />
				</section>
				<section id='tech'>
					<Tech />
				</section>
				<section id='about'>
					<About />
				</section>
				<section style={{ background: '#000' }} id='contact'>
					<Contact />
				</section>
			</Layout>
		</>
	)
}

export default IndexPage
