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
					property: `og:image`,
					content: `https://vikasxpandey.github.io/folio_old/assets/img/me-bg.jpg`
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
					name: `twitter:image`,
					content: `https://vikasxpandey.github.io/folio_old/assets/img/me-bg.jpg`
				},
				{
					name: `twitter:site`,
					content: `https://www.vikasxpandey.in`
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
			<script type='application/ld+json'>
				{` {
					"@context" : "http://schema.org",
					"@type" : "Person",
					"name" : "Vikas Pandey",
					"disambiguatingDescription": "Software Engineer",
					"address" : {
						"@type" : "PostalAddress",
						"addressLocality" : "Mumbai",
						"addressRegion" : "Maharashtra",
						"addressCountry" : "India",
						"postalCode" : "400 001"
					},
					"jobTitle": "Software Engineer",
					"image":"https://vikasxpandey.github.io/folio_old/assets/img/me-bg.jpg"
					}`}
			</script>
		</Helmet>
	)
}

SEO.defaultProps = {
	lang: `en`,
	meta: [],
	description: ``
}

export default SEO
