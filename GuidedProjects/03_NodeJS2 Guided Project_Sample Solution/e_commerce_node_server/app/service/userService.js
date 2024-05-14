// Importing the file system module
const fs = require("fs");

// Creating a class for managing users
class Users {
  // Constructor to initialize the class with user data from a JSON file
  constructor() {
    // Reading and parsing the content of the users.json file
    this.users = JSON.parse(fs.readFileSync("./app/data/users.json", "utf-8"));
  }

  // Method to retrieve all users
  getAllUsers() {
    return this.users;
  }

  // Method to retrieve a user by username
  getUserByUsername(username) {
    // Finding the user in the users array based on the provided username
    const user = this.users.find((user) => user.username === username);

    // Returning the found user (or null if not found)
    return user;
  }

  // Method to handle user login based on provided username and password
  login(username, password) {
    // Finding the user in the users array based on the provided username and password
    const user = this.users.find(
      (user) => user.username === username && user.password === password
    );

    // Returning an object indicating whether the login was successful and the user object
    if (user) {
      return { login: true, userObject: user };
    }

    return { login: false, userObject: null };
  }
}

// Exporting the Users class for external use
module.exports = Users;