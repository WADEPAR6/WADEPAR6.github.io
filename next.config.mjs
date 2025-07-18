/** @type {import('next').NextConfig} */
const nextConfig = {
    output : 'export',
    distDir: 'dist',
    images: {
        unoptimized: true
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        });

        return config;
    },
};

export default nextConfig;
