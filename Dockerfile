# --------------------------------------
# Base image (with Node, PNPM, and system deps)
# --------------------------------------
FROM mcr.microsoft.com/devcontainers/typescript-node:22 AS base

# Workspace (can be overridden by devcontainer.json)
ARG WORKDIR_PATH=/app
WORKDIR ${WORKDIR_PATH}

# System setup
RUN apt-get update && apt-get install -y --no-install-recommends \
  gnupg2 \
  && rm -rf /var/lib/apt/lists/*

RUN corepack enable && corepack prepare pnpm@latest-10 --activate

# Copy only package files for dependency install
COPY package.json pnpm-lock.yaml ./

# Vitepress port
EXPOSE 5173

# --------------------------------------
# Production deps only
# --------------------------------------
FROM base AS prod-deps
RUN --mount=type=cache,id=${WORKDIR_PATH}_node-modules,target=${WORKDIR_PATH}/node_modules \
  pnpm install --prod --frozen-lockfile

# --------------------------------------
# Full deps for build (and dev)
# --------------------------------------
FROM base AS build
RUN --mount=type=cache,id=${WORKDIR_PATH}_node-modules,target=${WORKDIR_PATH}/node_modules \
  pnpm install --frozen-lockfile

# Copy full source with correct ownership
COPY . .
