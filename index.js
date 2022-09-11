const fs = require("fs");
const inquirer = require("inquirer");

const generateReadMe = ({
  title,
  description,
  motivation,
  why,
  problem,
  learned,
  license,
  usagelink,
  usagelinkstatment,
  usage,
}) => `

![badmath](${license})

# ${title}  

## Table of Contents 

- [Description](#Description)
- [Usage](#usage)
- [Installation](#installation)
- [Testing](#testing)
- [Contributors](#Contributors)
- [Questions](#Questions)


## Description

${description}
- The Motivation for building this application was  ${motivation}
- The application was built to ${why}
- It solves the problem of ${problem}
- Through the process of building this application I learned ${learned}

## Usage

${usagelinkstatment} [this link.](${usagelink})

${usage}

## License

This application is covered under the ![badmath](${license}) licence


## Installation
`;

const appendReadMe = ({ step }) => `

${step}`;

const appendReadMeTest = ({ test }) => `

## Testing

${test}

## Contributors
`;

const appendReadMe3 = ({ contname, contgithub }) => `

[${contname}](https://github.com/${contgithub})

`;

const appendReadMeQuest = ({ username, email }) => `

## Questions

Please contact me if you have any questions

[${username}](https://github.com/${username})

[${email}](mailto:${email})



`;
inquirer
  .prompt([
    {
      name: "title",
      message: "What is the project title?",
      type: "input",
    },
    {
      name: "description",
      message: "Give the project a description",
      type: "input",
    },
    {
      name: "motivation",
      message: "The motivation for building this app was...",
      type: "input",
    },
    {
      name: "why",
      message: "The application was built to...",
      type: "input",
    },
    {
      name: "problem",
      message: "The application solves the problem of...",
      type: "input",
    },
    {
      name: "learned",
      message: "Through the process of building this application I learned...",
      type: "input",
    },
    {
      name: "usagelink",
      message: "Provide a link to the application or an application video",
      type: "input",
    },
    {
      name: "usagelinkstatment",
      message: "Describe the link",
      type: "list",
      choices: [
        "For a video of how to use the application please follow",
        "To see the deployed application please follow",
      ],
    },
    {
      name: "usage",
      message: "How is the application used?",
      type: "input",
    },
    {
      name: "license",
      message:
        "Choose a license for the application. (navigate using up & down arrow)",
      type: "list",
      choices: [
        {
          name: "Apache License 2.0",
          value: "https://img.shields.io/badge/license-MIT%2FApache--2.0-blue",
        },
        {
          name: "GNU GPL",
          value: "https://img.shields.io/badge/license-GPL-blue",
        },
        {
          name: "MIT",
          value: "https://img.shields.io/badge/license-MIT-green",
        },
      ],
    },
  ])
  .then(async (answers) => {
    const text = generateReadMe(answers);
    fs.writeFile("README.md", text, (err) => {
      err ? console.log(err) : console.log("");
    });
    // console.log(answers);
    inquirer
      .prompt([
        {
          name: "install",
          message: "How many steps required to install your application?",
          type: "number",
        },
      ])
      .then(async (installSteps) => {
        for (let i = 0; i < installSteps.install; i++) {
          var response = await inquirer.prompt([
            {
              type: "input",
              name: "step",
              message: "What is step " + (i + 1) + "?",
            },
          ]);
          // console.log(response);
          const textInstallSteps = appendReadMe(response);

          fs.appendFile("README.md", textInstallSteps, (err) => {
            err ? console.log(err) : console.log("");
          });
        }
      })
      .then(async () => {
        var testing = await inquirer.prompt([
          {
            name: "test",
            message: "how is this application tested",
            type: "input",
          },
        ]);
        const testsection = appendReadMeTest(testing);

        fs.appendFile("README.md", testsection, (err) => {
          err ? console.log(err) : console.log("");
        });
      })

      .then(async () => {
        await inquirer
          .prompt([
            {
              name: "contributors",
              message: "How many contributors?",
              type: "number",
            },
          ])
          .then(async (contr) => {
            for (let x = 0; x < contr.contributors; x++) {
              var contributor = await inquirer.prompt([
                {
                  type: "input",
                  name: "contname",
                  message: "contributor " + (x + 1) + " name",
                },
                {
                  type: "input",
                  name: "contgithub",
                  message: "What is thier GitHub ID",
                },
              ]);
              // console.log(contributor);
              const text2 = appendReadMe3(contributor);
              fs.appendFile("README.md", text2, (err) => {
                err ? console.log(err) : console.log("");
              });
            }
          });

        // console.log(answers);
      })
      .then(async () => {
        var questions = await inquirer.prompt([
          {
            name: "username",
            message: "What is your GitHub username?",
            type: "input",
          },
          {
            name: "email",
            message: "What is your email address?",
            type: "input",
          },
        ]);
        const quest = appendReadMeQuest(questions);

        fs.appendFile("README.md", quest, (err) => {
          err
            ? console.log(err)
            : console.log("Your README.md file has been created");
        });
      });
  });
