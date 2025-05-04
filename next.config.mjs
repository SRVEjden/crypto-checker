/** @type {import('next').NextConfig} */
const nextConfig = {
    sassOptions: {
        prependData:
    `
        @import "tailwindcss";
        @plugin "daisyui" {
          themes: all;
        }; 
    `
    }
};

export default nextConfig;
