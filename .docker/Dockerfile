# Step 1: Build the Next.js application
FROM node:22-alpine AS builder
WORKDIR /app

# Install dependencies
COPY package.json pnpm-lock.yaml ./
RUN npm install pnpm -g
RUN pnpm install

# Copy source code and build
COPY . .
RUN pnpm run build

# Step 2: Run the application
FROM node:22-alpine AS runner
WORKDIR /app

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/package.json ./package.json

# Install production dependencies
RUN npm install pnpm -g
RUN pnpm install 

# Start Next.js
EXPOSE 3000
CMD ["pnpm", "start"]
