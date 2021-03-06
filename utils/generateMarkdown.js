console.log("Entered generateMarkdown js file!")
//Add the current year to the copyright section
let year = new Date().getFullYear();

//Generating links for the badges 
function renderLicenseBadge(license) {
  if (license === "gpl-3.0") {
    return '![img](https://img.shields.io/badge/license-GPL%20v3.0-blue)'
  }
  else if (license === "mit") {
    return '![img](https://img.shields.io/badge/license-MIT-green)'
  }
  else if (license === "agpl-3.0") {
    return '![img](https://img.shields.io/badge/license-agpl%20v3.0-blue)'
  }
  else if (license === "lgpl-3.0") {
    return '![img](https://img.shields.io/badge/license-lgpl%20v3.0-blue)'
  }
  else if (license === "apache-2.0") {
    return '![img](https://img.shields.io/badge/license-apache%20v2.0-blue)'
  }
  else if (license === "mpl-2.0") {
    return '![img](https://img.shields.io/badge/license-mpl%20v2.0-blue)'
  }
  else if (license === "unlicense") {
    return "";
  }
  else if (license === "bsl-1.0") {
    return '![img](https://img.shields.io/badge/license-bsl%20v1.0-blue)'
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  let license = renderLicenseBadge(data.license);

  return `# ${data.title} ©${year} ${license}

## Description
${data.description}

Project by: ${data.name}  
Main Github: [${data.githubName}](https://github.com/${data.githubName})
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
${license}
[Click here for more information on this license](https://choosealicense.com/licenses/${data.license})


## Testing
${data.Test}

## Questions
If you have questions or would like to contact for other reasons, please contact
${data.name}  
Email: ${data.email}
Main Github: [${data.githubName}](https://github.com/${data.githubName})
`;
}

// assignBadgecolor();
module.exports = generateMarkdown;

