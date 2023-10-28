///create and array of license object with associated badges and 
let licenseArr = [
{name: "MIT", 
 link: "https://opensource.org/licenses/MIT",
badge: "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)"
},
{name: "GPL v3", 
 link: "https://www.gnu.org/licenses/gpl-3.0",
badge: "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)"
},
{name: "Apache 2.0", 
 link: "https://opensource.org/licenses/Apache-2.0",
badge: "![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)"
},
{name: "BSD 3", 
 link: "https://opensource.org/licenses/BSD-3-Clause",
badge: "![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)"
},
{name: "ISC", 
 link: "https://opensource.org/licenses/ISC",
badge: "![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)"
},
{name: "EPL 1.0", 
 link: "https://opensource.org/licenses/EPL-1.0",
badge: "![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)"
}

]



// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge;
  for (let item of licenseArr){
    if (item.name === license){
      badge = item.badge;
      break;
    } else{
      badge = "";
    }
  }
  return badge
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  for (let item of licenseArr){
    if (item.name === license){
      return  `For more info on the license follow this link:
      ${item.link}`
    } 
  }
  return "";  
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === ""){
    return ""
  } else {
    return `This project is licensed under the <strong>${license}</strong> license.
   `
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectName}
  
  ${renderLicenseBadge(data.license)}
  
  ## Description
  
  ${data.projectDescription}
  
  ## Table of Contents
  
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  - [License](#license)
  
  
  ## Installation
  
  \`\`\`bash
  ${data.installDepends}
  \`\`\`
  
  ## Usage
  
  ${data.repoUseInfo}
  
  
  ## Contributing
  
  ${data.contributionInfo}

  ## Tests
  
  \`\`\`bash
  ${data.runTests}
  \`\`\`

  ## Questions
  
  If you have any questions about the repo, open an issue or contact me directly at ${data.email}.  You can find more of my work on Github at https://github.com/${data.username}

  ## License

  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}

  `;
  
}

module.exports = generateMarkdown;
