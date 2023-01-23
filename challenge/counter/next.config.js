/** @type {import('next').NextConfig} */

const NextFederationPlugin = require('@module-federation/nextjs-mf');

const hostMainApp = 'http://localhost:3000';

const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,

  webpack: (config, options) => {
    const { isServer } = options;
    config.experiments = { topLevelAwait: true };
    const federationConfig = {
      name: 'counter',
      remotes: {
        main: `main@${hostMainApp}/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
      },
      filename: 'static/chunks/remoteEntry.js',
      exposes: {
        './counterLabel': './src/components/CounterLabel/index.ts'
      },
      shared: {},
    };

    config.plugins.push(new NextFederationPlugin(federationConfig));

    return config;
  }
}

module.exports = nextConfig;
