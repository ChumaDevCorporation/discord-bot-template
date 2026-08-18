[English](./README.md) | [Русский](./README.ru.md)

# Discord Bot Template (Sapphire + Drizzle + pnpm)

Охуенный шаблон для создания мощных Discord ботов. Никакого мусора, только то, что реально нужно для быстрого старта и масштабирования.

## Стек

- **Язык**: [TypeScript](https://www.typescriptlang.org/) (строгая типизация)
- **Пакетный менеджер**: [pnpm](https://pnpm.io/) (быстро, воркспейсы)
- **Фреймворк**: [@sapphire/framework](https://www.sapphirejs.dev/) (поверх discord.js)
- **База Данных**: [Drizzle ORM](https://orm.drizzle.team/) + [better-sqlite3](https://github.com/WiseLibs/better-sqlite3) (WAL-mode)
- **Логирование**: [Pino](https://getpino.io/) (асинхронно, быстро)
- **Код стайл**: [ESLint v9](https://eslint.org/) (Strict Type Checking) + [Prettier](https://prettier.io/)
- **Инструменты**: [Zod](https://zod.dev/) (валидация env), [Husky](https://typicode.github.io/husky/) + [lint-staged](https://github.com/lint-staged/lint-staged)

## Структура

- `apps/bot/` — Ядро бота (инициализация, команды, ивенты)
- `packages/database/` — Изолированный слой БД
- `packages/logger/` — Кастомный инстанс логгера
- `packages/tsconfig/` — Базовые конфиги TypeScript

## Быстрый старт

1. Склонируй репозиторий / нажми **Use this template**.
2. Выполни установку зависимостей:
   ```bash
   pnpm install
   ```
3. Скопируй `.env.example` в `.env` и вставь токен своего бота.
4. Создай и примени схему базы данных:
   ```bash
   pnpm run db:push
   ```
5. Запускай бота в dev-режиме:
   ```bash
   pnpm run dev
   ```

## Глобальные скрипты

- `pnpm run dev` — запуск с хот-релоадом
- `pnpm run start` — запуск в проде
- `pnpm run lint` / `pnpm run format` — проверка и форматирование кода
- `pnpm run db:generate` / `pnpm run db:push` — миграции базы данных

## Docker (Production)

Для развертывания бота на сервере используй готовый docker-compose:

```bash
docker-compose up -d --build
```
