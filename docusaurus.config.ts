import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import type * as Plugin from "@docusaurus/types/src/plugin";
import type * as OpenApiPlugin from "docusaurus-plugin-openapi-docs";

const config: Config = {
  title: 'Apparyllis',
  tagline: 'Creating apps, for you.',
  url: 'https://simplyplural.apparyllis.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.png',
  organizationName: 'apparyllis', // Usually your GitHub org/user name.
  projectName: 'SimplyPluralDocs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Apparyllis',
      logo: {
        alt: 'Simply Plural Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          to: 'docs/intro',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        { to: "docs/getting-started/intro", label: "API", position: "left" },
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
        id: "simplyPluralApi", // plugin id
        docsPluginId: "classic", // configured for preset-classic
        config: {
          simplyPlural: {
            specPath: "SimplyPluralApi.yml",
            outputDir: "docs/api",
            template: "api.mustache",
            sidebarOptions: {
              categoryLinkSource: "tag",
              groupPathsBy: "tag",
            },
          } satisfies OpenApiPlugin.Options,
        
        }
      },
    ]
  ],

  presets: [
    [
      "classic",
      {
        docs: {
          editUrl:
            "https://github.com/ApparyllisOrg/SimplyPluralApiDocs",
          sidebarPath: "./sidebar.ts",
          docItemComponent: "@theme/ApiItem", // Derived from docusaurus-theme-openapi
        },
        blog: {
          showReadingTime: true,
          editUrl:
            "https://github.com/ApparyllisOrg/SimplyPluralApiDocs"
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ]
  ],
  themes: ["docusaurus-theme-openapi-docs"],
  stylesheets: [
    {
      href: "https://use.fontawesome.com/releases/v5.11.0/css/all.css",
      type: "text/css",
    },
  ],
};

export default async function createConfig() {
  return config;
}