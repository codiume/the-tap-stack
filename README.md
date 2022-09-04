# 🌖 The TAP Stack

![cover](/public/cover.png 'tap stack')

## Table of contents

- [🌖 What is the TAP Stack?](#what-is-the-tap-stack)
- [📦 Getting Started](#getting-started)
- [📖 Guides](#guides)
- [📝 Contributing](#contributing)
- [❤️ Acknowledgements](#acknowledgements)

## Philosophy

### What is the TAP Stack?

The **"TAP Stack"** is a web development stack focused on simplicity & fast performance. It consists of:

- **T**: [![typescript][typescript-badge]][typescript] [![tailwindcss][tailwindcss-badge]][tailwindcss]
- **A**: [![astro][astro-badge]][astro]
- **P**: [![prisma][prisma-badge]][prisma] [![planetscale][planetscale-badge]][planetscale]

### Is this some kinda template?

Kind of. We love [Astro][astro] and we strongly believe in the future of all the technologies mentioned above.

So we made `The TAP Stack` to do one thing, get you started with a deployable astro website as fast as possible.

### Can I deploy it to platforms ?

Yes, this repo in itself is already deployed to following platforms:

- **Vercel**: [https://the-tap-stack.vercel.app]
- **Netlify**: [https://the-tap-stack.netlify.app]
- **Cloudflare Pages**: [https://the-tap-stack.pages.dev]

## Getting Started

### Using your package manager

You can use both `npm`

```bash
npm init astro -- --template codiume/the-tap-stack
```

Or `yarn`

```bash
yarn create astro -- --template codiume/the-tap-stack
```

### Using Github interface

This template repo can be used to scaffold your astro website. Follow these steps to get started:

1. Go to [https://github.com/codiume/the-tap-stack]
2. Press the "Use this template" button at the top of this repo to create a new repo with the contents of this skeleton.
3. Clone the project to your local environment & Have fun creating your website.

### Deploy with Vercel

You can also deploy directly this project to your Vercel account:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fcodiume%2Fthe-tap-stack&env=DATABASE_URL)

## Project Structure

```txt
/
├── prisma/
│   └── schema.prisma
├── public/
├── src/
│   └── pages/
│       └── index.astro
│   └── components/
│       └── Article.astro
└── package.json
```

## Guides

### Setup a Prisma & Database

1. Create a database on PlanetScale
2. Copy `DATABASE_URL` from PlanetScale to your `.env`
3. Push your prisma schema to PlanetScale `npx prisma db push`

## Contributing

Please see [contributing.md](CONTRIBUTING.md) for details.

## Acknowledgements

The **TAP** Stack is inspired by [t3][t3] and all the amazing work [Julius Marminge][juliusmarminge] and the community is doing developing it.

[astro]: https://astro.build
[planetscale]: https://planetscale.com
[prisma]: https://www.prisma.io
[tailwindcss]: https://tailwindcss.com
[typescript]: https://www.typescriptlang.org
[t3]: https://github.com/t3-oss/create-t3-app
[juliusmarminge]: https://github.com/juliusmarminge

<!-- Badges -->

[typescript-badge]: https://img.shields.io/badge/Code-Typescript-informational?style=for-the-badge&logo=typescript&logoColor=white
[tailwindcss-badge]: https://img.shields.io/badge/Code-Tailwind-informational?style=for-the-badge&logo=tailwindcss&logoColor=white
[astro-badge]: https://img.shields.io/badge/Code-Astro-informational?style=for-the-badge&logo=astro&logoColor=white
[prisma-badge]: https://img.shields.io/badge/Tools-Prisma-informational?style=for-the-badge&logo=prisma&logoColor=white
[planetscale-badge]: https://img.shields.io/badge/Tools-planetscale-informational?style=for-the-badge&logo=planetscale&logoColor=white
