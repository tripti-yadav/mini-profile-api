const express = require("express");

const app = express();

app.use(express.json());

app.get("/about", (req, res) => {
    res.json({
        name: "Tiri",
        about: "I am building my backend development skills this month."
    });
});
app.get("/skills", (req, res) => {
    res.json({
        skills: [
            "JavaScript",
            "Node.js",
            "Express",
            "Git",
            "GitHub"
        ]
    });
});
app.post("/message", (req, res) => {
    res.json({
        message: "Message received!",
        text: req.body.text
    });
});
app.listen(3000, () => {
    console.log("Server running on port 3000");
});