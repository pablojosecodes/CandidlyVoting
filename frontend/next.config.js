/** @type {import('next').NextConfig} */
const nextConfig = {



  // experimental: {
  //   serverActions: true,
  // },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i3.ytimg.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'd1nvlwubobyq5u.cloudfront.net',
        port: '',
      },

      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port: '',
      },
      
    ],
  },

}


module.exports = nextConfig
