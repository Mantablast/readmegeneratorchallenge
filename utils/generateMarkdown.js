console.log("Entered generateMarkdown js file!")
//Add the current year to the copyright section
let year = new Date().getFullYear();
// TODO: Create a function that returns a license badge based on which license is passed in

// If there is no license, return an empty string


// function renderLicenseBadge(data, badgeColor) {
//   if(data.license === "unlicense") {
//     let license = "";
//     renderLicenseLink(data, badgeColor);
//   } else {
//     renderLicenseLink(data, badgeColor);
//   }
// }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}
function renderLicenseBadge(license) {
  if (license === "gpl-3.0") {
    return ![img](https://img.shields.io/badge/license-GPL%20v3.0-blue)
  } 
  else if (license === "gpl-3.0") {
    return ![img](https://img.shields.io/badge/license-MIT-green)
  } 
  else if (license === "agpl-3.0") {
    return ![img](https://img.shields.io/badge/license-agpl%20v3.0-blue)
  } 
  else if (license === "lgpl-3.0") {
    return ![img](https://img.shields.io/badge/license-lgpl%20v3.0-blue)
  }
  else if (license === "apache-2.0") {
    return ![img](https://img.shields.io/badge/license-apache%20v2.0-blue)
  }
  else if (license === "mpl-2.0") {
    return ![img](https://img.shields.io/badge/license-mpl%20v2.0-blue)
  }
  else if (license === "unlicense") {
    return "";
  }
  else if (license === "bsl-1.0") {
    return ![img](https://img.shields.io/badge/license-bsl%20v1.0-blue)
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    
  return `# ${data.title}©${year}

## Description
${data.description}

Project by: ${data.name}  
Repository Link: ${data.githubProjectLink}  
Live Page Url:  
[${data.DeployedLink}](${data.DeployedLink})

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Contributon](#credits)
* [License](#license)
* [Testing](#testing)
* [Questions](#questions)

## Installation
${data.installSteps}

## Usage 
${data.Usage}

## Contribution
${data.Collaborator}  
[${data.CollaboratorLinkInput}](${data.CollaboratorLinkInput})

## License
![img](https://img.shields.io/badge/license-${license})
[Click here for more information on this license](https://choosealicense.com/licenses/${data.license})


## Testing
${data.Test}

## Questions
If you have questions or would like to contact for other reasons, please contact
${data.name}  
Email: ${data.email}
`;
}

// assignBadgecolor();
module.exports = generateMarkdown;

