// /** @type {import('next').NextConfig} */

// const nextConfig = {
// 	reactStrictMode: true,
// 	swcMinify: true,
// 	images: {
// 		domains: ["example.com"]
// 	}
// };

// module.exports = nextConfig;

// import type { NextConfig } from "next";

const nextConfig = {
	// output: 'export',
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: 'images.ctfassets.net',
				port: '',
				pathname: '**',
			},
		],
		// unoptimized: true,
	},
	// reactStrictMode: true,
	// transpilePackages: ['@gruve/echo'],
	// experimental: {
	// 	esmExternals: 'loose',
	// },
	// compiler: {
	// 	removeConsole: process.env.NODE_ENV === 'production',
	// },
};

export default nextConfig;
