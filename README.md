# Garagezka Workspace

This repository is set up as a monorepo workspace containing separate **Frontend** and **Backend** directories.

## Repository Structure

```
garagezka/
├── backend/            # Express.js backend (API server)
└── frontend/           # React + Vite frontend
```

---

## Getting Started

### Prerequisites

- Node.js (version 18 or above recommended)
- npm (version 9 or above recommended)

### Installation

To install dependencies for all workspaces at once:

```bash
npm install
```

---

## Running the Applications

You can run individual workspaces from the root folder:

### Development Mode

- **Frontend Development Server**:
  ```bash
  npm run frontend:dev
  ```

- **Backend Development Server**:
  ```bash
  npm run backend:dev
  ```

### Production Mode

- **Build Frontend**:
  ```bash
  npm run frontend:build
  ```

- **Start Backend (Production)**:
  ```bash
  npm run backend:start
  ```
