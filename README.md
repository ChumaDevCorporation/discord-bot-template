[English](./README.md) | [Русский](./README.ru.md)

# Discord Bot Template (Sapphire + Drizzle + pnpm)

A robust, enterprise-grade template for building powerful Discord bots. No garbage, just exactly what you need for a fast start and easy scaling.

## Tech Stack

- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict Typings)
- **Package Manager**: [pnpm](https://pnpm.io/) (fast, workspaces)
- **Framework**: [@sapphire/framework](https://www.sapphirejs.dev/) (built on discord.js)
- **Database**: [Drizzle ORM](https://orm.drizzle.team/) + [better-sqlite3](https://github.com/WiseLibs/better-sqlite3) (WAL-mode)
- **Logging**: [Pino](https://getpino.io/) (async, fast)
- **Code Style**: [ESLint v9](https://eslint.org/) (Strict Type Checking) + [Prettier](https://prettier.io/)
- **Tools**: [Zod](https://zod.dev/) (env validation), [Husky](https://typicode.github.io/husky/) + [lint-staged](https://github.com/lint-staged/lint-staged)

## Structure

- `apps/bot/` — Bot Core (initialization, commands, events)
- `packages/database/` — Isolated Database layer
- `packages/logger/` — Custom logger instance
- `packages/tsconfig/` — Base TypeScript configurations

## Quick Start

1. Clone the repository / click **Use this template**.
2. Install dependencies:
   ```bash
   pnpm install
   ```
3. Copy `.env.example` to `.env` and insert your bot token.
4. Generate and push the database schema:
   ```bash
   pnpm run db:push
   ```
5. Start the bot in development mode:
   ```bash
   pnpm run dev
   ```

## Global Scripts

- `pnpm run dev` — start with hot-reload
- `pnpm run start` — start for production
- `pnpm run lint` / `pnpm run format` — lint and format the code
- `pnpm run db:generate` / `pnpm run db:push` — database migrations

## Docker (Production)

Deploy the bot securely to a server using the included docker-compose:

```bash
docker-compose up -d --build
```
