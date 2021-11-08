/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    images: {
        domains: ['images.microcms-assets.io'],
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            issuer: {
                and: [/\.(js|ts)x?$/],
            },
            use: ['@svgr/webpack'],
        });

        return config;
    },
};
