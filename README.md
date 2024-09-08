# Express.js Employee Management API

This is a simple Express.js application that provides a basic API for managing employee records and performing some basic operations. It includes endpoints for arithmetic operations, sending messages, and CRUD operations for employees.

## Features

- **Arithmetic Endpoint**: Calculate the sum of two numbers.
- **Greeting Endpoints**: Send welcome messages.
- **Employee Management**:
  - Create a new employee
  - Retrieve an employee by ID
  - Retrieve all employees
  - Update an employee by ID
  - Delete an employee by ID

## Installation

1. **Clone the Repository**:

    ```bash
    git clone https://github.com/Jatingupta9120/WebPack-ExpressJs.git
    cd WebPack-ExpressJs
    ```

2. **Install Dependencies**:

    Make sure you have [Node.js](https://nodejs.org/) installed. Run the following command to install the required dependencies:

    ```bash
    npm install
    ```

## Usage

1. **Start the Server**:

    To start the server, use:

    ```bash
    npm start
    ```

    The server will be running on `http://localhost:3000`.

2. **Endpoints**:

    - **GET `/sum`**: Calculate the sum of two numbers.
      - Query Parameters: `a`, `b`
      - Example: `/sum?a=5&b=10`
      - Response: `{ "sum": 15 }`

    - **GET `/jatin`**: Get a welcome message.
      - Response: `"Hello, welcome"`

    - **GET `/game`**: Get a game-related message.
      - Response: `"Welcome Shubham, I am learning Express.js"`

    - **POST `/employee`**: Add a new employee.
      - Request Body: `{ "names": "John Doe", "rollnos": "12345" }`
      - Response: `{ "id": 1, "names": "John Doe", "rollnos": "12345" }`

    - **GET `/employee/:id`**: Retrieve an employee by ID.
      - Example: `/employee/1`
      - Response: `{ "id": 1, "names": "John Doe", "rollnos": "12345" }`

    - **GET `/employee`**: Retrieve all employees.
      - Response: `[ { "id": 1, "names": "John Doe", "rollnos": "12345" } ]`

    - **PUT `/employee/:id`**: Update an employee by ID.
      - Request Body: `{ "names": "Jane Doe", "rollnos": "54321" }`
      - Example: `/employee/1`
      - Response: `{ "id": 1, "names": "Jane Doe", "rollnos": "54321" }`

    - **DELETE `/employee/:id`**: Delete an employee by ID.
      - Example: `/employee/1`
      - Response: `{ "message": "Employee deleted" }`

3. **Serving Static Files**:

    - **GET `/`**: Serves the static HTML file from the `dist` directory.
      - Make sure you have `index.html` in the `dist` folder for this to work.

## Webpack Overview

Webpack is a module bundler for JavaScript applications. It bundles your JavaScript files along with their dependencies into a single or multiple optimized files. Here’s why you might use Webpack:

- **Module Bundling**: Webpack bundles multiple JavaScript modules into a single file, reducing the number of HTTP requests.
- **Code Splitting**: Allows you to split your code into smaller bundles, which can be loaded on demand, improving load times.
- **Asset Management**: Handles assets like CSS, images, and fonts through loaders, allowing you to include them in your JavaScript files.
- **Minification**: Automatically minifies your code and optimizes it for production.
- **Development Features**: Provides features like hot module replacement (HMR) for a better development experience.

For more information on Webpack, visit the [official Webpack documentation](https://webpack.js.org/).

## Contributing

If you’d like to contribute to this project, please fork the repository and submit a pull request. Ensure your code adheres to the existing style and includes appropriate tests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
