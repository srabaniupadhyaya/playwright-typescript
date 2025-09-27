# Use Playwright base image
FROM mcr.microsoft.com/playwright:v1.44.0

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install -g playwright

# Install Playwright with dependencies
RUN npx playwright install --with-deps

# Copy all project files
COPY . .

# Start Playwright tests
CMD ["/bin/sh", "-c", "npx playwright test"]