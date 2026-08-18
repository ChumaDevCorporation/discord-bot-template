FROM node:22-alpine AS builder

# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat python3 make g++ 

WORKDIR /app
RUN corepack enable pnpm

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY packages/ ./packages/
COPY apps/ ./apps/

# Install dependencies (ignoring scripts initially)
RUN pnpm install --frozen-lockfile

# Rebuild sqlite3 if necessary
RUN pnpm rebuild better-sqlite3

# Final image
FROM node:22-alpine AS runner
WORKDIR /app
RUN corepack enable pnpm

ENV NODE_ENV=production

COPY --from=builder /app /app

CMD ["pnpm", "run", "start"]
