const fs = require("fs");
const inquirer = require(`inquirer`);
const generateMarkdown = require(`./utils/generateMarkdown`);

// array of questions for user
const questions = [];

inquirer.prompt([
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "inpiut",
    name: "description",
    message: "Please provide a description of your project.",
  },
  {
    type: "input",
    name: "installation",
    message: "Please provide installation instruction for your project.",
  },
  {
    type: "input",
    name: "usage",
    message: "Please provide usage criteria for your project.",
  },
  {
    type: "list",
    name: "license",
    message:
      "Please choose, from the list below, the license you would like to use for your project.",
    choices: ["MIT", "CPAN", "NPM", "GNU", "APM", "ISC"],
  },
  {
    type: "input",
    name: "contribute",
    message:
      "Please provide how others may go about contributing to this project.",
  },
  {
    type: "input",
    name: "tests",
    message: "Please provide how others may test this project.",
  },
  {
    type: "input",
    name: "questions",
    message:
      "Please provide your email address and GitHub username associated with this project.",
  },
]);

// function to write README file
function writeToFile(fileName, data) {}

// function to initialize program
function init() {}

// function call to initialize program
init();
