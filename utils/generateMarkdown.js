function generateMarkdown(data) {
  return `
  # ${data.title}
  ![](https://img.shields.io/badge/Language-NodeJs-green)

  ## Description
  ${data.description}

  ## Table of Contents
  *[Installation](#Installation)

  *[Usage](#Usage)

  *[Contribute](#Contribute)

  *[Tests](#Tests)

  *[Questions](#Questions)

  *[License](#License)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contribute
  ${data.contribute}

  ## Tests
  ${data.tests}
  
  ## Questions
  For questions, please contact ${data.name} at ${data.question1} or https://github.com/${data.question2}.

  ## License
  This project is licensed by ${data.license}. Please visit (https://choosealicense.com/) for further information on licensing.
    `;
}

module.exports = generateMarkdown;
