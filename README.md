# Example of project Next JS with pre-rendering static pages

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

This project use [https://jsonplaceholder.typicode.com](https://jsonplaceholder.typicode.com) for data.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Build

Run this command for build the project

```bash
npm run build
# or
yarn build
```

## Test fallback params

Try to change fallback params to true or 'blocking' in file `pages/post/[id].js` line 55 for see the difference on build process.

## Export full static mode

Pass fallback params to false in file `pages/post/[id].js` line 55

```bash
npm run export:static
# or
yarn export:static
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
