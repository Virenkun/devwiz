# Use Bun as the base image
FROM oven/bun:1 AS base

# Set the working directory
WORKDIR /app

# Copy package.json and bun.lockb if it exists
COPY package.json ./

# Optional: Check if bun.lockb exists before copying it
COPY bun.lockb* ./

# Install dependencies using Bun
RUN bun install

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN bun next build

# Expose the desired port (default Next.js port is 3000)
EXPOSE 3000

# Start the application
CMD ["bun", "run", "start"]
