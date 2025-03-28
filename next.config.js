/** @type {import('next').NextConfig} */

const {i18n} = require('./next-i18next.config');

module.exports = {
    i18n,
    images: {
        domains: ['firebasestorage.googleapis.com', 'lh3.googleusercontent.com', 'graph.facebook.com', 'platform-lookaside.fbsbx.com'],
    },
    async redirects() {
        return [
            {
                source: `/a/profiles/:id`,
                destination: `/a/profiles/:id/about`,
                permanent: true,
            },
        ];
    },
};
