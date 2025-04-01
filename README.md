# Website

This website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.

## Installation

Install yarn and npm on your device.

```console
yarn install
```

## Local Environment

No local environment variables are needed for setup

## Local Development

```console
yarn start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

## Build

```console
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

```console
GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

## Making Updates 

Change the `SimplyPluralApi.yml` and `SimplyPluralApiBodies.yml` files instead, PRs should only contain non-generated files. Generating the docs as part of a PR will only introduce merge conflicts that can be avoided by just editing the `.yml` and docs files. Locally you may wish to run the [generator](https://github.com/PaloAltoNetworks/docusaurus-openapi-docs?tab=readme-ov-file#generating-openapi-docs).
