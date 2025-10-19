# Multi-stage build strategy to optimise nextjs image size from 2GB.

# DEPENDENCY STAGE:
FROM node:25-alpine AS deps
WORKDIR /usr/src/app

COPY package.json ./
COPY yarn.lock ./
RUN yarn install --frozen-lockfile

# BUILD STAGE:
FROM node:22-alpine AS builder
WORKDIR /usr/src/app

COPY . .
COPY --from=deps /usr/src/app/node_modules ./node_modules
RUN yarn build

# RUNNER STAGE: (The image that will actually be deployed).
FROM node:22-alpine AS runner
WORKDIR /usr/src/app

COPY --from=builder /usr/src/app/package.json .
COPY --from=builder /usr/src/app/yarn.lock .
COPY --from=builder /usr/src/app/next.config.ts .
COPY --from=builder /usr/src/app/public ./public
COPY --from=builder /usr/src/app/.next/standalone .
COPY --from=builder /usr/src/app/.next/static ./.next/static

# internal 3000 to an external port in the docker-compose file)
EXPOSE 3000
# command that is run to start the app (can be overriden in the docker-compose file)
CMD ["node", "server.js"]