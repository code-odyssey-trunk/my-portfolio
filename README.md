# My Portfolio

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app). It showcases the portfolio of Jasim Zainudheen, a fullstack developer based in Munich, Germany.

## Getting Started

To get started with the project, follow these steps:

### Prerequisites

Ensure you have Node.js and npm installed on your machine. You can download them from [nodejs.org](https://nodejs.org/).

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/code-odyssey-trunk/my-portfolio.git
   cd my-portfolio
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

### Running the Development Server

To start the development server, run:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Code Quality

This project uses ESLint and Prettier to maintain code quality and consistency.

### Setting Up ESLint and Prettier

1. **ESLint Configuration:**

   ESLint is configured in `eslint.config.mjs`. The configuration includes Prettier integration to ensure consistent code formatting.

   ```javascript:eslint.config.mjs
   startLine: 1
   endLine: 16
   ```

2. **Prettier Configuration:**

   Prettier is configured in `.prettierrc`:

   ```json:.prettierrc
   startLine: 1
   endLine: 8
   ```

3. **Running ESLint and Prettier:**

   - To lint your code, run:

     ```bash
     npm run lint
     ```

   - To automatically fix some issues, run:

     ```bash
     npm run lint -- --fix
     ```

   - To format your code, run:

     ```bash
     npm run format
     ```

## Project Structure

The project is organized as follows:

- **`src/app`**: Contains the main application components and pages.
- **`src/data`**: Contains data files for skills, journey, and experience.
- **`src/types`**: Contains TypeScript type definitions for various components.

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

---
