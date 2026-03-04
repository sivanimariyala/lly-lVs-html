const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Default route - Login form
app.get("/", (req, res) => {
    res.send(`
        <h2>Login Page</h2>
        <form method="POST" action="/login">
            Username: <input type="text" name="username" /><br><br>
            Password: <input type="password" name="password" /><br><br>
            <button type="submit">Login</button>
        </form>
    `);
});

// Login route
app.post("/login", (req, res) => {
    const { username, password } = req.body;

    if (username === "admin" && password === "1234") {
        res.send("<h2>Login Successful! Welcome Admin </h2>");
    } else {
        res.send("<h2>Invalid Username or Password </h2>");
    }
});

// Start server
app.listen(4000, () => {
    console.log("Server running on http://localhost:4000");
});