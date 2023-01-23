/** @type {import('next').NextConfig} */
const NextFederationPlugin = require('@module-federation/nextjs-mf');

const hostCounterApp = 'http://localhost:3001';

const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  webpack: (config, options) => {
    const { isServer } = options;
    config.experiments = { topLevelAwait: true };

    const federationConfig = {
      name: 'main',
      remotes: {
        counter: `counter@${hostCounterApp}/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
      },
      filename: 'static/chunks/remoteEntry.js',
    };

    config.plugins.push(
      new NextFederationPlugin(federationConfig)
    );

    return config;
  }
}

module.exports = nextConfig
