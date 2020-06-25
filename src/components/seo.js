import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

function SEO({ description, lang, meta, title }) {
	const { site } = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						title
						description
						author
					}
				}
			}
		`
	)

	const metaDescription = description || site.siteMetadata.description

	return (
		<Helmet
			htmlAttributes={{
				lang
			}}
			title={title}
			titleTemplate={`%s | ${site.siteMetadata.title}`}
			meta={[
				{
					name: `description`,
					content: metaDescription
				},
				{
					property: `og:title`,
					content: title
				},
				{
					property: `og:description`,
					content: metaDescription
				},
				{
					property: `og:type`,
					content: `website`
				},
				{
					name: `twitter:card`,
					content: `summary`
				},
				{
					name: `twitter:creator`,
					content: site.siteMetadata.author
				},
				{
					name: `twitter:title`,
					content: title
				},
				{
					name: `twitter:description`,
					content: metaDescription
				}
			].concat(meta)}
		>
			<script
				src='https://embed.tawk.to/5ea6d78f69e9320caac7b74b/default'
				crossOrigin='*'
				type='text/javascript'
			/>
		</Helmet>
	)
}

SEO.defaultProps = {
	lang: `en`,
	meta: [],
	description: ``
}

export default SEO
