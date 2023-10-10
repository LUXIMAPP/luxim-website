module.exports = {
  siteUrl: 'https://www.luximapp.com/',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', disallow: '/sitemap.xml' },
      { userAgent: '*', allow: '/' },
    ],
  },
  exclude: ['/sitemap.xml'],
};
