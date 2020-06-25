module.exports = {
	pathPrefix: '/folio',
	siteMetadata: {
		title: `Vikas Pandey`,
		description: `I specialize in Web Development, App Development, UI/UX Development and Data Science to build and strengthen your brand's online presence and create an elegant digital experience.`,
		author: `Vikas Pandey`
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
				threshold: 1,
				once: false
			}
		}
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	]
}
