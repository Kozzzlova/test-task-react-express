# React + Express Test Task

This project consists of two parts: backend and frontend. Installation and startup instructions for each part are provided below.

## Installation and Setup

### Requirements

- **Node.js**:  >= 18.0.0 (recommended: LTS 18.17.0 or newer)

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

1. Go to the backend directory:
    ```shell
    cd ./backend
    ```
2. Rename the .env.example file to .env:
    ```shell
    cp .env.example .env
    ```
3. Install dependencies:
    ```bash
    pnpm install
    ```
4. Start the backend:
    ```bash
    pnpm start
    ```

The backend will be available on port `3000` by default (unless specified otherwise).

### Frontend Setup

1. Go to the frontend directory:
    ```shell
    cd ./frontend
    ```
2. Rename the .env.example file to .env:
    ```shell
    cp .env.example .env
    ```
3. Install dependencies:
    ```bash
    pnpm install
    ```
4. Start the frontend in development mode:
    ```bash
    pnpm dev
    ```

The frontend will be available on port `5173` (unless specified otherwise).

### Port Settings

- Backend: http://localhost:3000/
- Frontend: http://localhost:5173

## License

The project is licensed under the MIT License. See the LICENSE file for more details.

# Reflection Questions

1. I work with Redux because it is a standard tool for centralized state management in JavaScript applications. In my project, I use Redux Toolkit (RTK) because it simplifies setup, reduces boilerplate, and provides built-in support for handling async logic with RTK Query. Key reasons for this choice:

- Simplified Redux Setup: RTK reduces boilerplate code with utilities, making actions and reducers easier to manage.
  
- Efficient API Management: RTK Query helps easily manage server-side queries, handle caching, and sync data without having to manually update state in Redux.
  
- Centralized UI State Management: I store minimal state in Redux, such as filter status, allowing to efficiently manage data in the UI.
  
- Scalability: RTK Query allows you to easily extend the application by adding new API queries and components without complicating the logic.

2. Besides using Redux, the status filter could be implemented in several ways:

- Local state in components with useState

- Using React Context

- If the filtering is implementing on the server, you can pass the filter in requests

- Using other libraries like Zustand

3. When designing the API, I took several factors:

- Simplicity vs. Scalability: The implementation of two main endpoints (GET /bets and PUT /bets/:betId) ensures simplicity of implementation and rapid development. In the future, if there is a need for additional features, new endpoints can be added without complicating the initial architecture.

- Error handling: I tried to provide minimal but informative error handling. For example, when updating a bet by ID, it checks whether a bet with this ID exists. Also implemented protection against frontend errors (checking the presence of a status in a request when updating it)

4. If I had more time, I would add the following improvements to this dashboard:

- Implementing server pagination 

- Adding multi-level filters

- Moving filtering from the client to the server

- Adding the ability to sort 

- Adding loaders to improve UX

- Implementing universal error handling when working with API

- Displaying error messages in the UI when errors occur on the server or while working with the API

5. I chose SQLite over array storage for storing data in the project for several reasons:

- Data persistence: SQLite allows to store data in an on-disk database, which ensures its safety between application launches.

- Performance at scale: SQLite is optimized for working with large amounts of data

- Flexibility and extensibility: Using SQLite makes it easier to scale the project

- SQLite is also ideal for small projects that don't require complex server database setup. It's easy to use, lightweight, and doesn't require a separate server to operate, which speeds up development and simplifies testing.

