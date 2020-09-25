function generateMarkdown(data) {
  return `# ${data.title}
    ![badge](https://img.shields.io/static/v1?label=${data.name}&message=${data.question2}&color=green)

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
    ${data.questions}

    ## License

    ## Tests
    ${data.tests}

    ##Questions
    For questions, please contact ${data.name} at ${data.question1} or https://github.com/${data.question2}.

  `;
}

module.exports = generateMarkdown;
