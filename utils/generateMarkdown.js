console.log("Entered generateMarkdown js file!")
//Add the current year to the copyright section
let year = new Date().getFullYear();

// TODO: Create a function that returns a license badge based on which license is passed in

// If there is no license, return an empty string
function assignBadgecolor() {
  if(data.license === "MIT") {
    let badgeColor = "green";
  }
  else {
    let badgeColor = "blue";
  }
  renderLicenseBadge(data, badgeColor);
}

function renderLicenseBadge(data, badgeColor) {
  if(data.license === "unlicense") {
    let license = "";
    renderLicenseLink(data, badgeColor);
  } else {
    renderLicenseLink(data, badgeColor);
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data, badgeColor) {
  if(data.license === "unlicense") {
  let license = "";
  generateMarkdown(data, badgeColor, licenseUrl);
  }
  else {
  let licenseUrl = "https://choosealicense.com/licenses/" + data.license;
  generateMarkdown(data, badgeColor, licenseUrl);
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data, badgeColor, licenseUrl) {
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
![img](https://img.shields.io/badge/license-${data.license}-${badgeColor})
[Click here for more information on this license](https://choosealicense.com/licenses/${licenseUrl})


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

