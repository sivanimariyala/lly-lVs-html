const express = require("express");
const session = require("express-session");

const app = express();

// Middleware for session
app.use(session({
    secret: "mysecretkey",
    resave: false,
    saveUninitialized: true
}));

// Home Route
app.get("/", (req, res) => {
    res.send("Welcome! Go to /login to start session.");
});

// Login Route
app.get("/login", (req, res) => {
    req.session.username = "Sivani";
    res.send("Session Created! Go to /profile");
});

// Profile Route
app.get("/profile", (req, res) => {

    if (req.session.username) {
        res.send("Hello " + req.session.username);
    } else {
        res.send("No session found! Please login.");
    }

});

// Logout Route
app.get("/logout", (req, res) => {

    req.session.destroy((err) => {
        if (err) {
            return res.send("Error logging out");
        }
        res.send("Logged out successfully!");
    });

});

// Start Server
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
