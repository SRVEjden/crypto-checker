/** @type {import('next').NextConfig} */
const nextConfig = {
	sassOptions: {
		prependData: `
        @use "tailwindcss";
        @plugin "daisyui" {
          themes: all;
        }; 
    `,
	},
};

export default nextConfig;
