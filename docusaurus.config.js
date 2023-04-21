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
        { to: "/docs/docs/api", label: "API", position: "left" },
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

  plugins: [
    [
      'docusaurus-plugin-openapi-docs',
      {
        id: "simplyPluralApi",
        docsPluginId: "classic",
        config: {
          simplyPlural: {
            specPath: "SimplyPluralApi.yml",
            outputDir: "docs/api",
            sidebarOptions: {
              categoryLinkSource: "tag",
              groupPathsBy: "tag",
            },
          }
        }
      },
    ]
  ],


  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        googleTagManager: false,
        googleAnalytics: false,
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/ApparyllisOrg/SimplyPluralApiDocs",
          docLayoutComponent: "@theme/DocPage",
          docItemComponent: "@theme/ApiItem"
        },
        blog: {
          showReadingTime: true,
          editUrl:
            "https://github.com/ApparyllisOrg/SimplyPluralApiDocs"
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      })
    ]
  ],
  themes: ["docusaurus-theme-openapi-docs"],

};
