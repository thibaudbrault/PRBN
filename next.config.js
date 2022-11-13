/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
}

module.exports = {
	images: {
		domains: ['vgmsite.com'],
	},
	experimental: {
		images: {
			unoptimized: true,
		},
	},
}
