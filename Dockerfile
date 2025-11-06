FROM mcr.microsoft.com/devcontainers/typescript-node:22 AS base
WORKDIR /app

RUN apt-get update && apt-get install gnupg2 -y

# Install pnpm globally
RUN corepack enable
RUN corepack prepare pnpm@latest-10 --activate
RUN corepack use pnpm@latest-10

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .
