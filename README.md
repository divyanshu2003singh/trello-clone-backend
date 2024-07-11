
# Trello Clone Backend

This project is a backend implementation of a Trello-like application using Node.js, Express, and MongoDB. The application supports user authentication, project management, and task management.

## Features

- **User Authentication**: Users can register and login with their name, email, and password. Passwords are securely hashed before storage.
- **Projects**: Users can create, update, and delete projects. Each project includes a name and description.
- **Tasks**: Tasks can be created, updated, and deleted within projects. Tasks include details such as name, description, status, tags, due date, and assigned user.
- **Task Board**: Tasks are displayed on a board and organized by status (e.g., "Backlog", "In Discussion", "In Progress", "Done").
- **Validation**: Both frontend and backend validation are implemented to ensure data integrity and proper user feedback.
- **Authentication**: All APIs and pages are protected, accessible only to authenticated users.

## Tech Stack

- **Node.js**: JavaScript runtime environment.
- **Express**: Web framework for Node.js.
- **MongoDB**: NoSQL database.
- **Mongoose**: ODM for MongoDB.
- **bcryptjs**: Library for hashing passwords.
- **jsonwebtoken**: Library for creating and verifying JWT tokens.
- **dotenv**: Module for loading environment variables.
- **cors**: Middleware for enabling CORS.
- **body-parser**: Middleware for parsing request bodies.

## Getting Started

### Prerequisites

- Node.js installed on your local machine.
- MongoDB instance running locally or remotely.
- Git installed on your local machine.

### Installation

1. **Clone the repository**

   ```bash
   git clone git@github.com:divyanshu2003singh/trello-clone-backend.git
   cd trello-clone-backend
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory and add the following environment variables:

   ```plaintext
   PORT=5001
   MONGO_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   ```

4. **Run the server**

   ```bash
   npm start
   ```

   The server should now be running on `https://divyanshu-singh-trello-clone-backend.onrender.com` or `http://localhost:5001`.

### Project Structure

```plaintext
trello-clone-backend/
├── node_modules/
├── src/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── projectController.js
│   │   └── taskController.js
│   ├── middleware/
│   │   ├── authMiddleware.js
│   │
│   ├── models/
│   │   ├── Project.js
│   │   ├── Task.js
│   │   └── User.js
│   ├── routes/
│   │   ├── auth.js
│   │   ├── projects.js
│   │   └── tasks.js
│   ├── app.js
│   └── server.js
├── .env
├── .gitignore
├── package-lock.json
├── package.json
└── README.md
```

### API Endpoints
Use only the login token to to test the endpoints without that testing can not be done
#### Auth Routes

- **POST /api/auth/register**: Register a new user.
- **POST /api/auth/login**: Login an existing user.

#### Project Routes

- **GET /api/projects**: Get all projects.
- **POST /api/projects**: Create a new project.
- **GET /api/projects/:id**: Get a single project by ID.


#### Task Routes

- **GET /api/tasks**: Get all tasks.
- **POST /api/tasks**: Create a new task.


### Middleware

- **authMiddleware.js**: Middleware to protect routes and ensure only authenticated users can access them.

### License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

### Acknowledgements

- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [bcryptjs](https://www.npmjs.com/package/bcryptjs)
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [cors](https://www.npmjs.com/package/cors)
- [body-parser](https://www.npmjs.com/package/body-parser)

