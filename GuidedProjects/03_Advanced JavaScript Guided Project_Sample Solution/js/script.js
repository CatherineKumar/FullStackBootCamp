// Function to handle user registration
function register() {
    const { fullname, username, email, contact, password, confirmPassword } = fetchRegisterPageData()

    // Check if passwords match
    if (password !== confirmPassword) {
        document.getElementById("message").textContent = "Passwords do not match!";
        return;
    }

    // Create user object with registration details
    const user = { fullname, username, email, contact, password };
    localStorage.setItem("user", JSON.stringify(user));

    // Redirect to another page after successful registration
    loadSignInPage();
}

// Function to redirect to signin.html page
function loadSignInPage() {
    window.location.href = '../html/signin.html';
}

// Function to fetch data from the register.html page
function fetchRegisterPageData() {
    // Fetch form values
    const fullname = document.getElementById("fullname").value;
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const contact = document.getElementById("contact").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    return { fullname, username, email, contact, password, confirmPassword }
}

// Function to handle user sign-in
function signIn() {
    const { username, password, messageElement } = fetchSignInPageData()

    try {
        // Fetch userInfo from the local storage
        const registeredUser = JSON.parse(localStorage.getItem("user"));
        console.log(registeredUser);

        // Check if the entered username or password is empty
        if (username === "" || password === "") {
            messageElement.textContent =
                "Username and Password fields cannot be empty!!";
        } else {
            // Check if the username and password of the registeredUser from local storage matches the entered username and password
            if (
                username === registeredUser.username &&
                password === registeredUser.password
            ) {
                // Set the session storage with the login info
                sessionStorage.setItem("login", true);
                window.location.href = "../html/index.html";
            } else {

                // If the username or password does not match, display error message
                messageElement.textContent = "Incorrect Username or Password!!";
                // Set the login info in the session storage as false
                sessionStorage.setItem("login", false);
            }
        }
    } catch (err) {
        // If the user is not registered, display appropriate error message
        messageElement.textContent =
            "The user is not registered yet. Please click on the register button to register yourself!!";
    }
}

// Function to fetch data from the signin.html page
function fetchSignInPageData() {
    // Fetch data from the signin form 
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const messageElement = document.getElementById("message");

    return { username, password, messageElement };
}

// Function to load content on the index.html page
function loadContent() {
    // Fetch the login info from the session storage
    const userLogin = sessionStorage.getItem("login");

    // Check whether the login status is true
    if (userLogin) {
        fetchAndLoadData()
    }
    else {
        // If login status is false, redirect to signin.html page
        loadSignInPage();
    }
}

// Function to set the endpoint to fetch data and set the list element to store the fetched data
function fetchAndLoadData() {
    const productsDataURL = `https://store-api-o6m1.onrender.com/v1/products`;

    // Fetch the list elements from index.html which will store products data
    const productList = document.getElementById('product-list');

    // Call the fetchData function to fetch the data from the above-mentioned endpoint
    fetchData(productsDataURL, productList);
}

// Function to fetch data from an external URL endpoint
async function fetchData(url, listElement) {

    try {
        const response = await fetch(url);
        const data = await response.json();
        if (data) {
            displayData(data, listElement);
        }
    } catch (err) {
        console.log("Data could not be fetched", err);
    }
}

// Display data which is fetched from an external API
function displayData(data, listElement) {
    data.data.forEach(item => {
        // Create HTML structure for displaying each of the product item details
        const itemTable = `<table class="product">
            <tr><th colspan="2">${item.title}</th></tr>
            <tr><td><img src="${item.image}"></td><td>${item.description}</td></tr>
            <tr><td><b>Price: $${item.price}</b></td><td>Rating: ${item.rating.rate} (${item.rating.count} reviews)</td></tr>
            </table>`

        // Append the product container to the product list
        listElement.innerHTML += itemTable;
    });
}

// Function to handle user logout
function logout() {
    sessionStorage.setItem("login", false);
    loadSignInPage();
}