const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.js',
  unstable_staticImage: true,
  redirects: [
    {
      source: '/hello-vercel',
      destination: 'https://vercel.com',
      permanent: true,
    },
  ],
})
module.exports = {
  ...withNextra(),
  async redirects() {
    return [
      {
        source: '/vercel',
        destination: 'https://vercel.com',
        permanent: false,
      },
    ]
  },
}
