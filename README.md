# 🌖 The TAP Stack

<p align="center"><img src="/public/cover.png" width="600"></p>

## Table of contents

- [🌖 What is the TAP Stack?](#what-is-the-tap-stack)
- [📦 Getting Started](#getting-started)
- [📖 Guides](#guides)
- [📝 Contributing](#contributing)
- [❤️ Acknowledgements](#acknowledgements)

## What is the TAP Stack?

The **"TAP Stack"** is a web development stack focused on simplicity & fast performance. It consists of:

- **T**: [Typescript][typescript] & [Tailwindcss][tailwindcss]
- **A**: [Astro][astro]
- **P**: [Prisma][prisma] & [Planetscale][planetscale]

### Is this some kinda template?

Kind of. We love [Astro][astro] and we strongly believe in the future of all the technologies mentioned above.

So we made `The TAP Stack` to do one thing, get you started with a deployable astro website as fast as possible.

### Can I deploy it to platforms ?

Yes, this repo in itself is already deployed to following platforms:

- **Vercel**: [https://the-tap-stack.vercel.app]
- **Netlify**: [https://the-tap-stack.netlify.app]
- **Cloudflare Pages**: [https://the-tap-stack.pages.dev]

### Does it include to much boilerplate ?

No we promise, here is the entire project structure:

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
