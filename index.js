// TODO: Include packages needed for this application
const inquirer = require('inquirer');


// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    message: 'What is your Github user name?',
    name: 'username'
  },
  {
    type: 'input',
    message: 'What is your email address?',
    name: 'email'
  },
  {
    type: 'input',
    message: 'What is the project name?',
    name: 'projectName'
  },
  {
    type: 'input',
    message: 'Please write a short description of your project?',
    name: 'projectDescription'
  },
  {
    type: 'checkbox',
    message: 'What kind of license should your project have?',
    name: 'licenses',
    choices: ['Apache 2.0', 'MIT', 'ISC', 'BSD 3-Clause', 'BSD 2-Clause', 'GNU GPL v3']
  },
  // {
  //   type: 'input',
  //   message: 'What command should be run to install dependencies?',
  //   name: 'installDepends'
  // },
  // {
  //   type: 'input',
  //   message: 'What command should be run to run tests?',
  //   name: 'runTests'
  // },
  // {
  //   type: 'input',
  //   message: 'What does the user need to know about using the repo?',
  //   name: 'repoUseInfo'
  // },
  // {
  //   type: 'input',
  //   message: 'What does the user need to know about contributing to the repo?',
  //   name: 'contributionInfo'
  // }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
