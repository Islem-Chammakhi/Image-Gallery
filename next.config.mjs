/** @type {import('next').NextConfig} */
//to fix remote images from pexels.com 
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:'https',
                hostname:'images.pexels.com',
                port:'',
                pathname:'/photos/**'//anything come after /photos/
            }
        ]
    },
    eslint:{
        ignoreDuringBuilds:true,
    },
};

export default nextConfig;
