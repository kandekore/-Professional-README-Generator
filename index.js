const fs = require("fs");
const inquirer = require("inquirer");

const generateReadMe = ({ username, github, linkedin }) => `success
    <h1>${username}</h1>
    <p>${github}</p>
    <p>${linkedin}</p>

`;

inquirer
  .prompt([
    {
      name: "username",
      message: "what is your name?",
      type: "input",
    },
    {
      name: "github",
      message: "what is your Git Hub URL??",
      type: "input",
    },
    {
      name: "linkedin",
      message: "what is your Linkedin URL??",
      type: "input",
    },
  ])
  .then((response) => {
    const text = generateReadMe(response);
    fs.writeFile("README.md", text, (err) => {
      err ? console.log(err) : console.log("success");
    });
  });
