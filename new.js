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
  obj,
}) => `
# ${title} ${title1}
## Description
${license}
${install}
${step1}
${answers}




${description}
- The Motivation for building this application was  ${motivation}
- The application was built to ${why}
- It solves the problem of ${problem}
- Through the process of building this application I learned ${learned}
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
      name: "installation",
      message: "How is this application installed?",
      type: "input",
    },

    {
      name: "usage",
      message: "How is the application used?",
      type: "input",
    },

    {
      name: "screenshot",
      message: "Provide the URL to a screenshot",
      type: "input",
    },
    {
      name: "license",

      message:
        "Choose a license for the application. (navigate using up & down arrow)",
      type: "list",
      choices: ["Apache License 2.0", "GNU GPLv3", "MIT", "ISC License"],
    },
    {
      name: "install",
      message: "How many steps required to install your application?",
      type: "number",
    },
  ])
  .then(async (answers) => {
    var arr = [answers];
    for (let i = 0; i < answers.install; i++) {
      var obj = {};
      var response = await inquirer.prompt([
        {
          type: "input",
          name: "step" + (i + 1),
          message: "Answer the question" + (i + 1),
        },
      ]);
      obj = response;
      arr.push(obj);

      console.log(response);
      var results = answers;
    }
    console.log(arr);
    console.log(results);
    inquirer
      .prompt([
        {
          name: "title1",
          message: "What is the project title?",
          type: "input",
        },
        {
          name: "contributors",
          message: "How many contributors?",
          type: "number",
        },
      ])
      .then(async (answers2) => {
        var arr2 = [answers2];
        for (let x = 0; x < answers2.contributors; x++) {
          var obj2 = {};
          var responseTwo = await inquirer.prompt([
            {
              type: "input",
              name: "cont name" + (x + 1),
              message: "Answer the question" + (x + 1),
            },
            {
              type: "input",
              name: "cont github" + (x + 1),
              message: "Answer the question" + (x + 1),
            },
          ]);
          obj2 = responseTwo;
          arr2.push(obj2);
        }
        console.log(response);
        var results = answers;
        // response.push(answers);
        console.log("results");
        console.log(results);
        console.log("arr");
        console.log(arr);
        console.log("obj");
        console.log(obj);
        console.log("answers2");
        console.log(answers2);
        console.log("arr2");
        console.log(arr2);
        console.log("obj2");
        console.log(obj2);
        console.log("response2");
        console.log(responseTwo);
        var results = answers;
        const text = generateReadMe(results);
        // const moreText = generateReadMe(answers2);
        fs.writeFile("README.md", text, (err) => {
          err ? console.log(err) : console.log("success");
        });
      });
  });

// .then((answers) => {
//   const text = generateReadMe(answers);

//   fs.writeFile("README.md", text, (err) => {
//     err ? console.log(err) : console.log("success");
//   });
// });
// console.log(answers)
