const express = require("express");

const app = express();

// Middleware: allows Express to understand JSON sent in requests
app.use(express.json());

// Root endpoint
app.get("/", (req, res) => {
    res.json({
        message: "Mini Profile API is running!",
        endpoints: [
            "GET /about",
            "GET /skills",
            "POST /message"
        ]
    });
});

// GET /about
app.get("/about", (req, res) => {
    res.json({
        name: "Tripti",
        about: "I am building my backend development skills this month."
    });
});

// GET /skills
app.get("/skills", (req, res) => {
    res.json({
        skills: [
            "JavaScript",
            "Node.js",
            "Express",
            "GitHub",
            "Git"
        ]
    });
});

// POST /message
app.post("/message", (req, res) => {
    res.json({
        message: "Message received!",
        text: req.body.text
    });
});

// Render provides its own PORT.
// Locally, the server will use port 3000.
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});