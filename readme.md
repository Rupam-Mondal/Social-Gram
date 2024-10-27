# Imagegram Backend

## Introduction
This is the backend service for the Imagegram application. It provides APIs for user authentication, image uploads, and other functionalities.

## Getting Started

### Installation
1. Clone the repository:
    ```sh
    git clone https://github.com/Rupam-Mondal/Social-Gram
    ```
2. Navigate to the project directory:
    ```sh
    cd Backend
    ```
3. Install dependencies:
    ```sh
    npm install
    ```
    or
    ```sh
    yarn install
    ```

### Configuration
1. Create a `.env` file in the root directory and add the following environment variables:
    ```env
    DB_URL = ''
    CDN_API_KEY = 
    CDN_API_SECRET_KEY = ''
    CLOUD_NAME = ''
    JWT_SECRET_KEY = ''
    ```

### Running the Server
1. Start the development server:
    ```sh
    npm start
    ```

## API Routes

### User Routes
- `POST /user/signup` - Register a new user. send a object like given below uin post request
    ```
        {
            username:
            email:
            password:
        }
    ```
- `POST /user/signin` - To login send a object like given.After sign user will get a jwt token. That token is required to send any type request to backend except signup.
    ```
        {
            username:
            email:
            password:
        }
    ```

### Posts Related Routes
- `POST /post` - create post in Imagegram
- `GET /post` - Get all post


## Contributing
Feel free to submit issues and pull requests.

## License
This project is licensed under the MIT License.
