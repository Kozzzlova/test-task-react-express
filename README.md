# React + Express Test Task

This project consists of two parts: backend and frontend. Installation and startup instructions for each part are provided below.

## Installation and Setup

### Requirements

- **Node.js**: version 16.x or higher is required

- **pnpm**: the project uses [pnpm](https://pnpm.io/) for managing dependencies. If pnpm is not installed, you can install it using the following command:

  To install pnpm:
  - **Windows**:
    ```bash
    npm install -g pnpm
    ```
  - **macOS/Linux**:
    ```bash
    npm install -g pnpm
    ```

### Backend Setup

1. Go to the backend directory.
2. Install dependencies:
    ```bash
    pnpm install
    ```
3. Start the backend:
    ```bash
    node src/index.js
    ```

The backend will be available on port `5000` by default (unless specified otherwise).

### Frontend Setup

1. Go to the frontend directory.
2. Install dependencies:
    ```bash
    pnpm install
    ```
3. Start the frontend in development mode:
    ```bash
    pnpm dev
    ```

The frontend will be available on port `5` (unless specified otherwise).

### Port Settings

- Backend: `http://localhost:5000`
- Frontend: `http://localhost:5173`

## License

The project is licensed under the MIT License. See the LICENSE file for more details.
