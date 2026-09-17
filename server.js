const express = require("express");

const app = express();

app.use(express.json());

app.get("/about", (req, res) => {
    res.json({
        name: "Tripti",
        about: "I am building my backend development skills this month."
    });
});
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
app.post("/message", (req, res) => {
    res.json({
        message: "Message received!",
        text: req.body.text
    });
});
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});