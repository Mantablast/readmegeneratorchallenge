// TODO: Include packages needed for this application
//add inquirer
const fs = require('fs'); //update delete write etc
const inquirer = require('inquirer');
const path = require('path');
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
    type: 'input',
    name: 'DeployedLink',
    message: 'Please provide your live deployed web url for your project or type "none" if not applicable'
    
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
    type: 'input',
    name: 'Usage',
    message: 'Please provide examples or instructions for suggested use here: (Required)',
    validate: Usage => {
        if (Usage) {
          return true;
        } else {
          console.log('To ensure your project looks professional, please provide examples or instructions for suggested use here.');
          return false;
        }
      }
  },

//What license does this project have?
{
    type: 'list',
    message: 'What license does this project have? Use the space bar to select an option',
    name: 'license',
    choices: [
        {
            name: 'MIT',
            value: 'mit',
        },
        {
            name: 'GNU GPLv3',
            value: 'gpl-3.0',
        },
        {
            name: 'GNU AGPLv3',
            value: 'agpl-3.0',
        },
        {
            name: 'GNU LGPLv3',
            value: 'lgpl-3.0',
        },
        {
            name: 'APACHE 2.0',
            value: 'apache-2.0',
        },
        {
            name: 'Mozilla Public 2.0',
            value: 'mpl-2.0',
        },
        {
            name: 'The Unlicense',
            value: 'unlicense',
        },
        {
            name: 'Boost Software 1.0 ',
            value: 'bsl-1.0',
        },
    ],
},
//Please add the test information you would like to display on your readme.
{
    type: 'input',
    name: 'Test',
    message: 'Please add the test information you would like to display on your readme.',
    validate: Test => {
        if (Test) {
          return true;
        } else {
          console.log('To ensure your readme looks professional, please add the test information you would like to display on your readme!');
          return false;
        }
      }
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
    console.log("Questions are almost complete!");
    inquirer.prompt({
        type: 'confirm',
        name: 'confirmCollaborator',
        message: 'Would you like to add another collaborator? y/n',
        default: false
    }).then(response2 => {
        if (response2.confirmCollaborator) {
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'Collaborator',
                    message: 'Please provide the name of the collaborator:',
                   
                },
                //Please enter the github url or personal webpage of this collaborator.
                {
                    type: 'input',
                    name: 'CollaboratorLinkInput',
                    message: 'Please enter the github url or personal webpage of this collaborator. (Required)',
                    
                    
                },
            ])
            .then(response3 =>{
                response.Collaborator = response3.Collaborator
                response.CollaboratorLinkInput = response3.CollaboratorLinkInput
                writeToFile(response);
                console.log("Success!  Your README.md file has been generated.");
            })
        } 
        else {
            response.Collaborator = "";
            response.CollaboratorLinkInput = "";
            writeToFile(response);
            console.log("Success!  Your README.md file has been generated.");
        }
       
    })
})
};

// TODO: Create a function to write README file
function writeToFile(response) {
    console.log(response);
    console.log(response.name);
    const wholeObject = generateMarkdown(response);
    console.log(wholeObject);
    fs.writeFileSync(path.join(process.cwd(), "README.md"), wholeObject);
};

// TODO: Create a function to initialize app
function init() {
    questions();
}

// Function call to initialize app
init();
