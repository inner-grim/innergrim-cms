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
ARG BUILD_ENV=production
RUN if [ "$BUILD_ENV" = "development" ]; then pnpm run build:dev; else pnpm run build:prod; fi

# Step 2: Run the application
FROM node:22-alpine AS runner
WORKDIR /app

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/package.json ./package.json

# Install production dependencies
RUN npm install pnpm -g
RUN pnpm install 

# 런타임 환경 변수 설정
ARG START_ENV=production
ENV START_ENV=$START_ENV

# Start Next.js 
EXPOSE 3000
CMD ["sh", "-c", "if [ \"$START_ENV\" = \"development\" ]; then pnpm run start:dev; else pnpm run start:prod; fi"]