// Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const generate = require('./src/generateHtml');
const manager = require('./lib/Manager');
const engineer = require('./lib/Engineer');
const intern = require('./lib/Intern');
const managerHtml = require('./src/managerHtml');
const engineerHtml = require('./src/engineerHtml');
const internHtml = require('./src/internHtml');

var profile = [];
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
                    }]).then(contactDetails => {
                        var newManager = new manager(response.name, response.id, response.email, contactDetails.officeNumber);
                        const managerCard = managerHtml(newManager.getName(), newManager.getId(), newManager.getEmail(), newManager.getOfficeNumber());
                        profile.push(managerCard);
                        addProfile();
                    });
            } else if (response.role == "Engineer") {
                inquirer
                    .prompt([{
                        type: "input",
                        message: questions[4],
                        name: "githubUserName",
                    }]).then(gitHub => {
                        var newEngineer = new engineer(response.name, response.id, response.email, gitHub.githubUserName);
                        const engineerCard = engineerHtml(newEngineer.getName(), newEngineer.getId(), newEngineer.getEmail(), newEngineer.getGithub());
                        profile.push(engineerCard);
                        addProfile();
                    });
            } else {
                inquirer
                    .prompt([{
                        type: "input",
                        message: questions[5],
                        name: "schoolName",
                    }]).then(schoolName => {
                        var student = new intern(response.name, response.id, response.email, schoolName.schoolName);
                        const internCard = internHtml(student.getName(),student.getId(), student.getEmail(), student.getSchool());
                        profile.push(internCard);
                        addProfile()
                    });
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