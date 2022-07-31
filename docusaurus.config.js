module.exports = {
  title: 'Simply Plural',
  tagline: 'For Systems and Friends',
  url: 'https://simplyplural.apparyllis.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Simply Plural',
      logo: {
        alt: 'Simply Plural Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/intro',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          to: 'about/',
          activeBasePath: 'about',
          label: 'About the creator',
          position: 'left',
        },
		{ to: "/api", label: "API", position: "left" },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/hcWGEJVFQb',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/apparyllis',
            },
          ],
        },

      ],
      copyright: `Copyright © ${new Date().getFullYear()} Apparyllis U.G.`,
    },
  },

  presets: [
    [
      'docusaurus-preset-openapi',
      {
        docs: {
          	sidebarPath: require.resolve('./sidebars.js')
        },
        theme: {
          	customCss: require.resolve('./src/css/custom.css'),
        },
		api: {
			path: "SimplyPluralApi.yml",
		}
		}
	]
  ],
  plugins: [require.resolve('./Webpack5PolyfillPlugin.js')],
};
