FROM mcr.microsoft.com/playwright:v1.56.1-noble

WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm ci

# Install Playwright browsers
RUN npx -y playwright@1.56.1 install --with-deps

# Copy your project files
COPY . .

# Use shell form to ensure npx resolves correctly
CMD ["npm", "test"]