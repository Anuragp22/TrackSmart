# Use a lightweight Node base image
FROM node:18-alpine

# Create a directory inside the container
WORKDIR /usr/src/app

# Copy only your package files first for better caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Install Nodemon globally for development
RUN npm install -g nodemon

# Copy the rest of your backend code
COPY . .

# Expose port 3001 (if you're using that)
EXPOSE 3001

# Default command for development
CMD ["nodemon", "index.js"]
