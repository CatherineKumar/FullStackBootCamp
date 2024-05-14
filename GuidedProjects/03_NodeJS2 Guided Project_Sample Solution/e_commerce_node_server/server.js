const http = require("http");
const url = require("url");

// Importing handlers for products and users
const producthandlers = require("./app/handlers/productHandlers");
const userhandlers = require("./app/handlers/userHandlers");

// Creating an HTTP server
const server = http.createServer((req, res) => {
  // Extracting and parsing the request URL
  const requestUrl = req.url;
  const parts = url.parse(requestUrl, true);

  // Handling different routes based on the pathname
  switch (parts.pathname) {
    // Handling product-related routes
    case "/v1/products": {
      const { id } = parts.query;
      if (id) {
        // Handling product retrieval by ID
        return producthandlers.fetchProductByIdHandler(req, res, id);
      } else {
        // Handling request for all products
        return producthandlers.fetchAllProductsHandler(req, res);
      }
    }

    // Handling user-related routes
    case "/v1/users": {
      const { username } = parts.query;
      if (username) {
        // Handling user retrieval by username
        return userhandlers.fetchUserByUsernameHandler(req, res, username);
      } else {
        // Handling request for all users
        return userhandlers.fetchAllUsersHandler(req, res);
      }
    }

    // Handling login route
    case "/v1/login":
      return userhandlers.loginHandler(req, res);

    // Handling default case for unknown routes
    default: {
      res.statusCode = 404;
      res.setHeader("Content-Type", "application/json");
      console.log(`${new Date()} - Route not found`);
      res.end(JSON.stringify({ message: "Route not found" }));
    }
  }
});

// Setting the server to listen on port 8080
const port = 8080;
server.listen(port, () => {
  console.log(`${new Date()} - Server is running on port ${port}`);
});
