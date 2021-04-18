// TODO: Include packages needed for this application
//add inquirer
const fs = require('fs'); //is this really needed?
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = () => {
    inquirer.prompt([
//Hi, What's your name?
{
    type: 'input',
    name: 'name',
    message: 'Hi, What is your name? (Required)',
    validate: projectInput => {
      if (projectInput) {
        return true;
      } else {
        console.log('Your name is required!  Thank you.');
        return false;
      }
    }
  },
//Welcome!  What is your project title?
{
    type: 'input',
    name: 'title',
    message: 'Welcome! What is your project title? (Required)',
    validate: projectInput => {
      if (projectInput) {
        return true;
      } else {
        console.log('Project title is required!  Thank you.');
        return false;
      }
    }
  },
//Please provide a detailed description for your project.
{
    type: 'input',
    name: 'description',
    message: 'Please provide a detailed description for your project. (Required)',
    validate: descriptionInput => {
      if (descriptionInput) {
        return true;
      } else {
        console.log('Oops. Please enter in a detailed description for a good README file.');
        return false;
      }
    }
  },
//Please provide your repository link
{
    type: 'input',
    name: 'githubName',
    message: 'Enter your GitHub Username (Required)',
    validate: githubNameInput => {
      if (githubNameInput) {
        return true;
      } else {
        console.log('Please enter your GitHub username!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'githubProjectLink',
    message: 'Enter your GitHub repository link (Required)',
    validate: githubProjectLink => {
      if (githubProjectLink) {
        return true;
      } else {
        console.log('Please enter your GitHub repository link!');
        return false;
      }
    }
  },
//Does your project include a deployed web url? y/n
  {
    type: 'confirm',
    name: 'confirmDeployedLink',
    message: 'Does your project include a deployed web url? y/n',
    default: true
  },
  {
    type: 'input',
    name: 'DeployedLink',
    message: 'Please provide your live deployed web url for your project:',
    when: ({ confirmDeployedLink }) => confirmDeployedLink
  },
//What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.
{
    type: 'input',
    name: 'installSteps',
    message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running. (Required)',
    validate: installInput => {
      if (installInput) {
        return true;
      } else {
        console.log('Please enter at minimum, some short install details to showcase your project.');
        return false;
      }
    }
},
//Provide instructions and examples for use.
{
    type: 'confirm',
    name: 'confirmUsage',
    message: 'Would you like to provide examples or instructions for suggested use? (Recommended) y/n',
    default: true
  },
  {
    type: 'input',
    name: 'Usage',
    message: 'Please provide examples or instructions for suggested use here:',
    when: ({ confirmUsage }) => confirmUsage
  },
//Would you like to add screenshots? y/n
{
    type: 'confirm',
    name: 'confirmScreenshot',
    message: 'Would you like to add screenshots? y/n',
    default: false
},
//Please provide a web based url or relative filepath to your first screenshot.
{
    type: 'input',
    name: 'Screenshot',
    message: 'Please provide a web based url or relative filepath to your first screenshot.',
    when: ({ confirmScreenshot }) => confirmScreenshot
},
//Would you like to add another screenshot and description? y/n
{
    type: 'confirm',
    name: 'confirmScreenshot',
    message: 'Would you like to add another screenshot and description? y/n',
    default: false
},
//Please enter the name of a collaborator?
{
    type: 'confirm',
    name: 'confirmCollaborator',
    message: 'Would you like to add a collaborator on this project? y/n',
    default: true
  },
  {
    type: 'input',
    name: 'Collaborator',
    message: 'Please provide the name of the collaborator:',
    when: ({ confirmCollaborator }) => confirmCollaborator
  },

//Please enter the github url or personal webpage of this collaborator.
{
    type: 'input',
    name: 'collaboratorLinkInput',
    message: 'Please enter the github url or personal webpage of this collaborator. (Required)',
    validate: collaboratorLinkInput => {
      if (collaboratorLinkInput) {
        return true;
      } else {
        console.log('You need to enter a project GitHub link!');
        return false;
      }
    }
},
//Would you like to add another collaborator? y/n
{
    type: 'confirm',
    name: 'confirmCollaborator',
    message: 'Would you like to add another collaborator? y/n',
    default: false
},
//What license does this project have?
{
    type: 'list',
    message: 'What license does this project have? Use the space bar to select an option',
    name: 'license',
    choices: ['No License', 'MIT', 'GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'Boost Software License 1.0', 'The Unlicense', 'Other or I prefer to enter my own license details.']
},
//If you have any other information to add to the license section, please enter it here.  If not, just press enter.
{
    type: 'input',
    name: 'licenseInfo',
    message: 'If you have any other information to add to the license section, please enter it here.  If not, just press enter.'
},
//Select the badges you would like to add to your readme file
{
    type: 'checkbox',
    message: 'Select the badges you would like to add to your readme file:',
    name: 'badges',
    choices: ['Github follow badge', 'Github downloads', 'Github repo size', 'Twitter follow']
},
//Would you like to add a summary of features? y/n
{
    type: 'confirm',
    name: 'confirmFeature',
    message: 'Would you like to add a summary of features? y/n',
    default: true
},
//Please add your summary of features here.
  {
    type: 'input',
    name: 'Feature',
    message: 'Please add your summary of project features here:',
    when: ({ confirmFeature }) => confirmFeature
},
//Are you a supporter and adopter of Contributor Covanent? 
{
    type: 'confirm',
    name: 'confirmFeature',
    message: 'Are you a supporter and adopter of Contributor Covanent?  y/n (Please visit https://www.contributor-covenant.org/ and thoroughly read through the documentation before selecting "y") Selecting "y" will add a Contributor Covenant badge to your readme file.',
    default: true
},
//Would you like to add a test section to your readme? y/n
{
    type: 'confirm',
    name: 'confirmTest',
    message: 'Would you like to add a test section to your readme? y/n',
    default: true
},
//Please add the test information you would like to display on your readme.
{
    type: 'input',
    name: 'Test',
    message: 'Please add the test information you would like to display on your readme.',
    when: ({ confirmTest }) => confirmTest
},
//Please enter your email so you may be contacted for questions (Required)
{
    type: 'input',
    name: 'email',
    message: 'Please enter your email so you may be contacted for questions (Required)',
    validate: email => {
      if (email) {
        return true;
      } else {
        console.log('Please enter your email!');
        return false;
      }
    }
  }
])
.then((response) => {
    console.log("Questions Complete.");
    writeToFile(response);
})
};


// TODO: Create a function to write README file
function writeToFile(response) {
    console.log(response);
    console.log(response.name);
    const wholeObject = generateMarkdown(response);
    console.log(wholeObject);
};

// TODO: Create a function to initialize app
function init() {
    questions();
}

// Function call to initialize app
init();
