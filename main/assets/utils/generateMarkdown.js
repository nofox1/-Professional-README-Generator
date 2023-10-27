// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![License](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return `*[License] (#License-📛)
  `;
  }
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return `
    ## License 📛
    Copyright @ ${license}. All rights reserved.
    
    Licensed under the ${license} license`;
  }
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  (${renderLicenseBadge(data.license)})

  ## Description 🧾

  ${data.description}

  ## Table of Contents 📚

  -[Installation](#installation)

  -[Usage](#usage)

  -[Credits](#credits)

  -[License](#license)

  ${renderLicenseLink(data.license)}

  ## Installation 🔋


  ${data.dependencies}

  ## Usage 
  
  ${data.usage}


  ${renderLicenseSection(data.license)}

  ## Credits

  ${data.contributors}
  ${data.github}
  ${data.email}

`;
}

module.exports = generateMarkdown;
