# Kitchen-sink Turborepo starter

This is a work in progress and is based on the official turborepo starter for PNPM.  It currently adds on a .NET GraphQL API as well as a Tailwind CSS based design system, but there is vision for more to come.

## Prerequisites

Here are a few things that need to be installed before you can use this starter:

- [Node.js](https://nodejs.org/en/) - current LTS version recommended
- [PNPM](https://pnpm.js.org/)
- [.NET](https://dotnet.microsoft.com/)

## What's inside?

This turborepo uses [PNPM](https://pnpm.io) as a packages manager. It includes the following packages/apps:

### Apps and Packages

- `api-graphql`: a [.NET](https://dotnet.microsoft.com/en-us/) based GraphQL API
- `docs`: a [Next.js](https://nextjs.org) app
- `web`: another [Next.js](https://nextjs.org) app
- `data`: a data access API interraction TypeScript library layer shared by both `web` and `docs` applications
- `ui`: a stub React component library shared by both `web` and `docs` applications
- `config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

Most packages/apps are [TypeScript](https://www.typescriptlang.org/) with the addition of the [.NET](https://dotnet.microsoft.com/en-us/) based GraphQL API utilizing [GraphQL.NET](https://graphql-dotnet.github.io/).  Other languages and stacks could be added in the future.

### Utilities

This turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Jest](https://jestjs.io) test runner for all things JavaScript
- [Prettier](https://prettier.io) for code formatting

## Setup

This repository is used in the `pnpx create-turbo@latest` command, and selected when choosing which package manager you wish to use with your monorepo (PNPM).

### Build

To build all apps and packages, run the following command:

```sh
cd my-turborepo
pnpm run build
```

### Develop

To develop all apps and packages, run the following command:

```sh
cd my-turborepo
pnpm run dev
```

### Remote Caching

Turborepo can use a technique known as [Remote Caching (Beta)](https://turborepo.org/docs/features/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching (Beta) you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```sh
cd my-turborepo
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your turborepo:

```sh
npx turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Pipelines](https://turborepo.org/docs/features/pipelines)
- [Caching](https://turborepo.org/docs/features/caching)
- [Remote Caching (Beta)](https://turborepo.org/docs/features/remote-caching)
- [Scoped Tasks](https://turborepo.org/docs/features/scopes)
- [Configuration Options](https://turborepo.org/docs/reference/configuration)
- [CLI Usage](https://turborepo.org/docs/reference/command-line-reference)
