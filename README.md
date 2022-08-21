# 🌖 The TAP Stack

## What is the TAP Stack?

The **"TAP Stack"** is a web development stack focused on simplicity & fast performance. It consists of:

- **T**: [Typescript][typescript] & [Tailwindcss][tailwindcss]
- **A**: [Astro][astro]
- **P**: [Prisma][prisma] & [Planetscale][planetscale]

### Is this Some kinda template?

Kind of. We love [Astro][astro] and all the technologies mentioned above. We also believe in astro's future as the defacto framework for creating static websites, and maybe even more.

So we made `The TAP Stack` to do one thing, get you started with astro as fast as possible.

## Is there a deployed demo I can see ?

Yes, this repo in itself is already deployed to following platforms:

- **Vercel**: [https://the-tap-stack.vercel.app]
- **Netlify**: [https://the-tap-stack.netlify.app]
- **Cloudflare Pages**: [https://the-tap-stack.pages.dev]

## 📦 Getting Started

### Using your package manager

```bash
npm init astro -- --template codiume/the-tap-stack
```

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

## Setup database

1. Create a database on PlanetScale
2. Copy `DATABASE_URL` from PlanetScale to your `.env`
3. Push your prisma schema to PlanetScale `npx prisma db push`

## Project Structure

Inside of your Astro project, you'll see the following folders and files:

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

[astro]:https://astro.build
[planetscale]:https://planetscale.com
[prisma]:https://www.prisma.io
[tailwindcss]:https://tailwindcss.com
[typescript]:https://www.typescriptlang.org
