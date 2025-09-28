# Dockerfile.dev
FROM node:22-alpine

# Create app directory
WORKDIR /usr/src/app

# Install global deps briefly if needed (optional)
# RUN npm install -g pnpm

# Copy package files only (for faster container npm installs)
COPY package*.json ./

# Install dependencies (this will run inside container and populate a volume)
RUN npm ci

# Copy nothing else here — we'll mount the source during `docker run` / compose

ENV NODE_ENV=development
ENV PORT=5173

# Expose Vite default port
EXPOSE 5173

# Default command for dev (vite should bind to 0.0.0.0)
CMD ["npm", "run", "dev"]
