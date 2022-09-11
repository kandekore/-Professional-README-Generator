const fs = require("fs");
const inquirer = require("inquirer");

const generateReadMe = ({
  title,
  title1,
  description,
  motivation,
  why,
  problem,
  learned,
  license,
  install,
  answers,
  step1,
  contributors,
}) => `
##README CREATE
# ${title}  
${title1}
## Description
${license}
${install}
${step1}
${answers}

## Table of Contents (Optional)

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Description](#Description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#Contributing)
- [Tests](#tests)
- [Questions](#Questions)

## Description

${description}
- The Motivation for building this application was  ${motivation}
- The application was built to ${why}
- It solves the problem of ${problem}
- Through the process of building this application I learned ${learned}



##Install Steps
`;

const appendReadMe = ({ step }) => `

${step}`;
const appendReadMe4 = ({ license }) => `

#APPEND 4
${license}

## Step

`;

const appendReadMe3 = ({ contname, contgithub }) => `

#APPEND 3
[${contgithub}] ${contname}

## Step

`;
inquirer
  .prompt([
    {
      name: "title",
      message: "What is the project title?",
      type: "input",
    },
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
      name: "installation",
      message: "How is this application installed?",
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
      name: "testing",
      message: "how is this application tested",
      type: "input",
    },
    {
      name: "license",
      message:
        "Choose a license for the application. (navigate using up & down arrow)",
      type: "list",
      choices: [
        { name: "Apache License 2.0", value: "http://image.com" },
        { name: "GNU GPLv3", value: "http://image1.com" },
      ],
    },
  ])
  .then(async (answers) => {
    const text = generateReadMe(answers);
    fs.writeFile("README.md", text, (err) => {
      err ? console.log(err) : console.log("");
    });
    console.log(answers);
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
          console.log(response);
          const textInstallSteps = appendReadMe(response);

          fs.appendFile("README.md", textInstallSteps, (err) => {
            err ? console.log(err) : console.log("success");
          });
        }
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
                  message: "Answer the question" + (x + 1),
                },
              ]);
              console.log(contributor);
              const text2 = appendReadMe3(contributor);
              fs.appendFile("README.md", text2, (err) => {
                err ? console.log(err) : console.log("success");
              });
            }
          });
      });
  });
