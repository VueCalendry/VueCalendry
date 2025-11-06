FROM node:22-alpine AS base
WORKDIR /app

# Install pnpm globally
RUN corepack enable
RUN corepack prepare pnpm@latest --activate

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .
