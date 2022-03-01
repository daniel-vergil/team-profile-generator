// Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const generate = require('./src/generateHtml');

// Create an array of questions for user input
const questions = [
    "Enter your team member's name:",
    "Select your team member's role:",
    "Enter your team member's id:",
    "Enter your team member's email address:",
    "Enter your team member's GitHub username:",
    "Enter your team member's School name:",
    "Enter your team member's office number:",
    "Would you like to add more team members?"
];

// Create a function to write HTML file
function writeToFile(fileName, data) {
    try {
        return fs.writeFileSync(path.join(process.env.PWD, '/dist/', fileName), generate(data));
    } finally {
        console.log("Team profile HTML is generated. Please check the dist folder. Thank you!");
    }
}

// Display instructions to the users
console.log("INSTRUCTIONS: Please answer the below prompts to generate a your team profile. Team profile HTML file will be auto-generated in the dist/ folder. Thank you!");

// Create a function to initialize app
function init() {
    inquirer
        .prompt([{
                type: "input",
                message: questions[0],
                name: "name",
            },
            {
                type: "list",
                message: questions[1],
                choices: ["Manager", new inquirer.Separator(), "Engineer", new inquirer.Separator(), "Intern"],
                name: "role",
            },
            {
                type: "input",
                message: questions[2],
                name: "id",
            },
            {
                type: "email",
                message: questions[3],
                name: "email",
            }
        ])
        .then((response) => {
            // writeToFile("README.md", response);
            if (response.role == "Manager") {
                inquirer
                    .prompt([{
                        type: "input",
                        message: questions[6],
                        name: "officeNumber",
                    }]).then(response => addProfile());
            } else if (response.role == "Engineer") {
                inquirer
                    .prompt([{
                        type: "input",
                        message: questions[4],
                        name: "githubUserName",
                    }]).then(response => addProfile());
            } else {
                inquirer
                    .prompt([{
                        type: "input",
                        message: questions[5],
                        name: "schoolName",
                    }]).then(response => addProfile());
            }
        })
    }

function addProfile() {
    inquirer.prompt([{
        type: "confirm",
        message: questions[7],
        name: "addMember"
    }]).then(response => {
        if (response.addMember) {
            init();
        }
    })
}

// Function call to initialize app
init();