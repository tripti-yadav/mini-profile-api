# Mini Profile API

A small REST API built with Node.js and Express.

It returns information about me, my current skills, and accepts messages.

## Tech Stack

- Node.js
- Express
- JavaScript
- Git
- GitHub

## Endpoints

### GET /about

Returns my name and a sentence about what I am building this month.

Example response:

{
  "name": "Your Name",
  "about": "I am building my backend development skills this month."
}

### GET /skills

Returns an array containing my current skills.

Example response:

{
  "skills": [
    "JavaScript",
    "Node.js",
    "Express",
    "Git",
    "GitHub"
  ]
}

### POST /message

Accepts a JSON body:

{
  "text": "hello"
}

Returns a confirmation that the message was received.

## Run Locally

Clone the repository and enter the project folder:

git clone YOUR_GITHUB_REPOSITORY_URL
cd mini-profile-api

Install dependencies:

npm install

Start the server:

npm start

The API will run at:

http://localhost:3000