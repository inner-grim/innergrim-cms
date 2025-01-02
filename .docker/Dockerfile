# Step 1: Build the Next.js application
FROM node:22-alpine AS builder
WORKDIR /app

# Install dependencies
COPY package.json pnpm-lock.yaml ./
RUN npm install pnpm -g
RUN pnpm install

# Copy source code and build
COPY . .

# 환경 변수에 따라 다른 빌드 스크립트 실행 
ARG BUILD_ENV
RUN pnpm run build:${BUILD_ENV}

# Step 2: Run the application
FROM node:22-alpine AS runner
WORKDIR /app

# Set build-time argument with a default value
ARG ENVIRONMENT

# Copy environment file
COPY ../.env.${ENVIRONMENT} /app/.env.${ENVIRONMENT}

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/package.json ./package.json

# Install production dependencies
RUN npm install pnpm -g
RUN pnpm install 

# 런타임 환경 변수 설정
ARG START_ENV
ENV START_ENV=$START_ENV

# Start Next.js 
EXPOSE 3000
ARG BUILD_ENV
ENV BUILD_ENV=${BUILD_ENV}

CMD ["/bin/sh", "-c", "pnpm run start:${BUILD_ENV}"]

