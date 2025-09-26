import { type SiteDataProps } from "../types/configDataTypes";

// Update this file with your site specific information
const siteData: SiteDataProps = {
	name: "VITODING",
	// Your website's title and description (meta fields)
	title:
		"VITODING - Emancipate the Mind",
	description:
		"A website for Vito's personal use, showcasing his research and exploration of technology, business and investment.",

	// Your information for blog post purposes
	author: {
		name: "Vito",
		email: "haoran.ding@yahoo.com",
		twitter: "Cosmic_Themes",
	},

	// default image for meta tags if the page doesn't have an image already
	defaultImage: {
		src: "/images/cosmic-themes-logo.png",
		alt: "Cosmic Themes logo",
	},
};

export default siteData;