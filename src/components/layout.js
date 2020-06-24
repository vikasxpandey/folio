import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'fontsource-roboto-condensed'
import '../styles/layout.css'

import Header from './Header'

const Layout = ({ children }) => {
	const data = useStaticQuery(graphql`
		query SiteTitleQuery {
			site {
				siteMetadata {
					title
				}
			}
		}
	`)

	return (
		<>
			<Header siteTitle={data.site.siteMetadata.title} />
			<main>{children}</main>
			<footer>
				&copy; {new Date().getFullYear()}, Built with
				{` `}
				<a href='https://www.gatsbyjs.org'>Gatsby</a>
			</footer>
		</>
	)
}

Layout.propTypes = {
	children: PropTypes.node.isRequired
}

export default Layout
