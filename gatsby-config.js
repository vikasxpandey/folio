module.exports = {
	siteMetadata: {
		title: `Vikas Pandey`,
		description: `Get on the web and strengthen your brand's online presence and create an elegant digital experience.`,
		author: `Vikas Pandey`,
		siteUrl: `https://www.vikasxpandey.in`
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `media`,
				path: `${__dirname}/src/media`
			}
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `vikas-pandey`,
				short_name: `vikas`,
				start_url: `/`,
				background_color: `#000`,
				theme_color: `#ff0000`,
				display: `minimal-ui`
			}
		},
		{
			resolve: `gatsby-plugin-scroll-reveal`,
			options: {
				threshold: 0.7,
				once: false
			}
		},
		`gatsby-plugin-sitemap`,
		{
			resolve: 'gatsby-plugin-robots-txt',
			options: {
				host: 'https://www.vikasxpandey.in',
				sitemap: 'https://www.vikasxpandey.in/sitemap.xml',
				policy: [{ userAgent: '*', allow: '/' }]
			}
		},
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: 'UA-166926978-1',
				head: true,
				defer: true
			}
		}
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	]
}
