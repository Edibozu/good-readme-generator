function generateMarkdown(data) {
    return `# ${data.title}
    ![anything](https://img.shields.io/badge/banana-potato-blue)

    ## Description
    ${data.description}

    ## Table of Contents
    *[Installation](#Installation)
    *[Usage](#Usage)
    *[Contribute](#Contribute)
    *[Tests](#Tests)
    *[Questions](#Questions)
    *[License](#License)
    
  `;
  }
  
  module.exports = generateMarkdown;
  