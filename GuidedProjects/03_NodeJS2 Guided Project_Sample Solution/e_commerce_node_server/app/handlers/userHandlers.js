// Importing the UserService class
const Users = require("../service/userService");

// Creating an instance of the UserService class
const users = new Users();

// Handling the request to fetch all users
const fetchAllUsersHandler = (req, res) => {
  // Setting the response header
  res.setHeader("Content-Type", "application/json");

  // Checking if the request method is GET
  if (req.method === "GET") {
    // Setting a success status code
    res.statusCode = 200;

    // Logging the API call for fetching all users
    console.log(`${new Date()} - API called for fetching all users`);

    // Sending the JSON response with all users
    res.end(JSON.stringify(users.getAllUsers()));
  } else {
    // Handling case where the route is not found
    res.statusCode = 404;
    console.log(`${new Date()} - Route not found`);

    // Sending a JSON response for route not found
    res.end(JSON.stringify({ message: "Route not found" }));
  }
};

// Handling the request to fetch a user by username
const fetchUserByUsernameHandler = (req, res, username) => {
  // Setting the response header
  res.setHeader("Content-Type", "application/json");

  // Checking if the request method is GET
  if (req.method === "GET") {
    // Setting a success status code
    res.statusCode = 200;

    // Fetching the user by username
    const user = users.getUserByUsername(username);

    // Logging the API call for fetching a user by username
    console.log(
      `${new Date()} - API called for fetching user using the provided username`
    );

    // Sending the JSON response with the user or a message if not found
    res.end(
      JSON.stringify(
        user
          ? user
          : { message: `User with username ${username} was not found` }
      )
    );
  } else {
    // Handling case where the route is not found
    res.statusCode = 404;
    console.log(`${new Date()} - Route not found`);

    // Sending a JSON response for route not found
    res.end(JSON.stringify({ message: "Route not found" }));
  }
};

// Handling the login request
const loginHandler = (req, res) => {
  // Setting the response header
  res.setHeader("Content-Type", "application/json");

  // Checking if the request method is POST
  if (req.method === "POST") {
    // Initializing a variable to store the request body
    let requestBody = "";

    // Handling data chunks in the request
    req.on("data", (chunk) => {
      requestBody += chunk;
    });

    // Handling the end of the request
    req.on("end", () => {
      // Parsing the JSON request body
      requestBody = JSON.parse(requestBody);

      // Extracting username and password from the request body
      const username = requestBody.username;
      const password = requestBody.password;

      // Performing login and getting the result
      const { login, userObject } = users.login(username, password);

      // Handling login success or failure
      if (login) {
        // Setting a success status code
        res.statusCode = 200;

        // Logging the successful login
        console.log(`${new Date()} - Login is successful`);

        // Sending the JSON response with the user object
        res.end(JSON.stringify(userObject));
      } else {
        // Setting a forbidden status code for invalid credentials
        res.statusCode = 403;

        // Logging the invalid login attempt
        console.log(`${new Date()} - Invalid login credentials`);

        // Sending a JSON response for invalid credentials
        res.end(JSON.stringify({ message: "Invalid Credentials" }));
      }
    });
  } else {
    // Handling case where the route is not found
    res.statusCode = 404;
    console.log(`${new Date()} - Route not found`);

    // Sending a JSON response for route not found
    res.end(JSON.stringify({ message: "Route not found" }));
  }
};

// Exporting the handlers for external use
module.exports = {
  fetchAllUsersHandler,
  fetchUserByUsernameHandler,
  loginHandler,
};