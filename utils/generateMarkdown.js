console.log("Entered generateMarkdown js file!")
//Add the current year to the copyright section
let year = new Date().getFullYear();
// TODO: Create a function that returns a license badge based on which license is passed in

// If there is no license, return an empty string
function assignBadgecolor(license) {
  if(license === "MIT") {
    let badgeColor = "green";
  }
  else {
    let badgeColor = "blue";
  }
  renderLicenseBadge(license, badgeColor);
}

function renderLicenseBadge(license, badgeColor) {
  if(license === "unlicense") {
    let license = " ";
  } else {
  return `
  [![license](https://img.shields.io/badge/license-${data.license}-${badgeColor})
  `
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === "unlicense") {
  let license = " ";
  }
  else {
    let licenseUrl = "https://choosealicense.com/licenses/${license}";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  Name: ${data.name}

`;
}

module.exports = generateMarkdown;
