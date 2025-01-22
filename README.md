Here is the updated **README.md** file based on your folder structure:

---

# TrackSmart

A full-stack project with a **Node.js backend** and a **Vite-based frontend**, containerized using **Docker Compose** for a smooth development workflow.

---

## Table of Contents

- [Folder Structure](#folder-structure)
- [Getting Started](#getting-started)
- [Setup and Installation](#setup-and-installation)
- [Running the Application](#running-the-application)
- [Development Workflow](#development-workflow)
- [Troubleshooting](#troubleshooting)
- [Contribution](#contribution)
- [License](#license)

---

## Folder Structure

```
TrackSmart/
├── backend/                # Backend service (Node.js)
│   ├── index.js            # Main backend entry point
│   ├── package.json        # Backend dependencies
│   ├── package-lock.json   # Backend lockfile
│   ├── Dockerfile          # Dockerfile for backend
│   ├── .gitignore          # Ignore unnecessary backend files
├── frontend/               # Frontend service (Vite + React)
│   ├── src/                # Frontend source code
│   ├── public/             # Frontend public files
│   ├── package.json        # Frontend dependencies
│   ├── package-lock.json   # Frontend lockfile
│   ├── Dockerfile          # Dockerfile for frontend
│   ├── .gitignore          # Ignore unnecessary frontend files
│   ├── vite.config.ts      # Vite configuration file
│   ├── tsconfig.json       # TypeScript configuration
├── docker-compose.yml      # Docker Compose configuration
├── README.md               # Project documentation
└── .dockerignore           # Files to ignore in Docker builds
```

---

## Getting Started

This project uses:

- **Node.js**: For the backend API.
- **Vite**: For the frontend React application.
- **Docker Compose**: To containerize and orchestrate services.

---

## Setup and Installation

### Prerequisites

- Install **Docker** and **Docker Compose** (version 2.22.0 or later).
- Clone this repository:
  ```bash
  git clone https://github.com/Anuragp22/TrackSmart.git
  cd TrackSmart
  ```

---

## Running the Application

1. **Build the Docker images**:

   ```bash
   docker compose build
   ```

2. **Start the services with Watch Mode**:

   ```bash
   docker compose up --watch
   ```

3. **Access the application**:
   - **Frontend**: [http://localhost:5173](http://localhost:5173)
   - **Backend**: [http://localhost:3001](http://localhost:3001)

## Troubleshooting

1. **Frontend Not Accessible**:

   - Ensure Vite is configured to bind to all network interfaces by adding `--host` to `vite.config.ts`:
     ```json
     "scripts": {
       "dev": "vite --host"
     }
     ```

2. **File Changes Not Detected**:

   - Ensure `CHOKIDAR_USEPOLLING=true` is set in the environment variables for the frontend service in `docker-compose.yml`:
     ```yaml
     environment:
       - CHOKIDAR_USEPOLLING=true
     ```

3. **Clean Up and Restart**:

   - If containers behave unexpectedly, clean up and rebuild:
     ```bash
     docker compose down --volumes
     docker compose build
     docker compose up
     ```

4. **Check Logs**:
   - View logs for the backend:
     ```bash
     docker compose logs -f backend
     ```
   - View logs for the frontend:
     ```bash
     docker compose logs -f frontend
     ```

---
