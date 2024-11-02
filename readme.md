# ImageGram

ImageGram is a full-stack project with separate frontend and backend components. This README provides an overview of the project structure, installation instructions, and details about each part.

## Table of Contents
- [Frontend](#frontend)
    - [Installation](#frontend-installation)
    - [Demo Images](#demo-images)
- [Backend](#backend)
    - [Installation](#backend-installation)
    - [API Routes](#api-routes)

## Frontend

The frontend of ImageGram is responsible for the user interface and user experience. It includes various components and pages to interact with the backend services.

### Frontend Installation

To set up the frontend, follow these steps:

1. Navigate to the `frontend` directory:
        ```sh
        cd frontend
        ```
2. Install the dependencies:
        ```sh
        npm install
        ```
3. Start the development server:
        ```sh
        npm start
        ```

### Demo Images

Here are some demo images of the frontend:

![Home Page](path/to/homepage.png)
*Home Page*

![Profile Page](path/to/profilepage.png)
*Profile Page*

## Backend

The backend of ImageGram handles the server-side logic, including API routes, database interactions, and authentication.

### Backend Installation

To set up the backend, follow these steps:

1. Navigate to the `backend` directory:
        ```sh
        cd backend
        ```
2. Install the dependencies:
        ```sh
        npm install
        ```
3. Start the server:
        ```sh
        npm start
        ```

### API Routes

The backend provides several API routes for different functionalities:

- **User Routes**
    - `POST /api/users/register` - Register a new user
    - `POST /api/users/login` - Login a user

- **Post Routes**
    - `GET /api/posts` - Get all posts
    - `POST /api/posts` - Create a new post

- **Comment Routes**
    - `POST /api/comments` - Add a comment to a post

For detailed API documentation, refer to the [API Docs](path/to/api-docs).
