FROM node:18

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Remove node_modules (optional, if needed for a clean build)
RUN rm -rf node_modules package-lock.json

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the development server port
EXPOSE 5173

# Run the development server (binding to all interfaces for accessibility)
CMD ["npm", "run", "dev", "--", "--host"]
