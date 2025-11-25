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
  images: {
	remotePatterns: [
	  {
		protocol: "https",
		hostname: '**',
		port: '',
		pathname: '**',
	  },
	],
  },
};

export default nextConfig;
