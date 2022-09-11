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




${description}
- The Motivation for building this application was  ${motivation}
- The application was built to ${why}
- It solves the problem of ${problem}
- Through the process of building this application I learned ${learned}
`;

const appendReadMe = ({
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
##APPEND1

${title1}
## Description

`;
const appendReadMe2 = ({ step1, step2, arr }) => `

#APPEND2

${arr}
${step1}
${step2}
## Step

`;
const appendReadMe3 = ({ contname }) => `

#APPEND 3
${contname}

## Step

`;

const appendReadMe4 = ({ license }) => `

#APPEND 4
${license}

## Step

`;

inquirer
  .prompt([
    // {
    //   name: "title",
    //   message: "What is the project title?",
    //   type: "input",
    // },
    // {
    //   name: "description",
    //   message: "Give the project a description",
    //   type: "input",
    // },
    // {
    //   name: "motivation",
    //   message: "The motivation for building this app was...",
    //   type: "input",
    // },
    // {
    //   name: "why",
    //   message: "The application was built to...",
    //   type: "input",
    // },
    // {
    //   name: "problem",
    //   message: "The application solves the problem of...",
    //   type: "input",
    // },
    // {
    //   name: "installation",
    //   message: "How is this application installed?",
    //   type: "input",
    // },

    // {
    //   name: "usage",
    //   message: "How is the application used?",
    //   type: "input",
    // },

    // {
    //   name: "screenshot",
    //   message: "Provide the URL to a screenshot",
    //   type: "input",
    // },
    // {
    //   name: "license",

    //   message:
    //     "Choose a license for the application. (navigate using up & down arrow)",
    //   type: "list",
    //   choices: ["Apache License 2.0", "GNU GPLv3", "MIT", "ISC License"],
    // },
    {
      name: "install",
      message: "How many steps required to install your application?",
      type: "number",
    },
  ])
  .then(async (answers) => {
    var arr = [];
    for (let i = 0; i < answers.install; i++) {
      var obj = "";
      var response = await inquirer.prompt([
        {
          type: "input",
          name: "step" + (i + 1),
          message: "Answer the question" + (i + 1),
        },
      ]);
      var obj = response;
      arr.push(obj);

      console.log(response);
      var results = answers;
    }
    console.log(arr);
    console.log(results);
    inquirer
      .prompt([
        {
          name: "contributors",
          message: "How many contributors?",
          type: "number",
        },
      ])
      .then(async (answers2) => {
        var arr2 = [];
        for (let x = 0; x < answers2.contributors; x++) {
          var obj2 = "";
          var responseTwo = await inquirer.prompt([
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

          console.log(responseTwo);
          console.log(responseTwo.contname);
          console.log(responseTwo.contgithub);

          console.log("contname" + [x] + ":" + responseTwo.contname);

          var obj2 = responseTwo;

          arr2.push(obj2);
          console.log(responseTwo.name);
          console.log(responseTwo.value);
          var results2 = answers2;
        }

        // .then(async (answers2) => {
        var lic = [];
        var licResponse = await inquirer.prompt([
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
        ]);
        //  if (licResponse == ({ license: 'Apache License 2.0' })){
        //  var licImg = "http://image.com"
        //  }
        //  else if (licResponse == ({ license: 'GNU GPLv3' })){
        //  var licImg = "http://image1.com"
        //  }

        console.log(licResponse);

        //  lic.push(licImg)
        //      console.log(licImg)

        // // })

        // console.log(licImg)

        console.log(lic);
        console.log("results2");
        console.log(answers);
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
        const text2 = appendReadMe(answers2);
        const text3 = appendReadMe2(arr);
        const text4 = appendReadMe3(arr2);
        const licImg = appendReadMe4(licResponse);

        // console.log((results, answers2).replace(/} { /g, ""));
        // const moreText = generateReadMe(answers2);
        fs.writeFile("README.md", text, (err) => {
          err ? console.log(err) : console.log("success");
        });
        fs.appendFile("README.md", text2, (err) => {
          err ? console.log(err) : console.log("success");
        });

        fs.appendFile("README.md", text3, (err) => {
          err ? console.log(err) : console.log("success");
        });
        fs.appendFile("README.md", text4, (err) => {
          err ? console.log(err) : console.log("success");
        });
        fs.appendFile("README.md", licImg, (err) => {
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
