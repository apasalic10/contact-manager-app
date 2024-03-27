# Contact Manager App

## Description:
This is a backend application designed for managing contacts. It provides features such as user registration and authentication. User authorization is handled using JWT tokens, regulating access to contacts and enabling functionalities like adding, updating, and deleting contacts.

## Technologies Used:
- Node.js
- Express.js
- MongoDB
- JWT (JSON Web Tokens)

## Installation:
1. Clone the repository: `git clone <repository-url>`
2. Navigate to the project directory: `cd contact-manager-app`
3. Install dependencies: `npm install`
4. Set up environment variables: Create a `.env` file and add required variables such as `PORT`, `DATABASE_URI`, and `ACCESS_TOKEN_SECRET`.
5. Start the server: `npm start`

## Usage:
- Register a new user account using `/api/auth/register` endpoint.
- Log in with registered credentials using `/api/auth/login` endpoint to obtain JWT token.
- Use the JWT token in the request headers (Authorization: Bearer <token>) for accessing protected routes.
- Access contact management functionalities such as adding, updating, and deleting contacts using appropriate API endpoints.

## API Endpoints:
- POST `/api/auth/register`: Register a new user.
- POST `/api/auth/login`: Authenticate and log in user, returning JWT token.
- GET `/api/contacts`: Retrieve all contacts.
- GET `/api/contacts/:id`: Retrieve a specific contact by ID.
- POST `/api/contacts`: Add a new contact.
- PUT `/api/contacts/:id`: Update an existing contact by ID.
- DELETE `/api/contacts/:id`: Delete a contact by ID.
