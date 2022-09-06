const fs = require("fs");
const inquirer = require("inquirer");

// function loop (info){

//   let markdown = []
//   for(let i=0; i < info.length; i++) {
//     let newHTML = `
//     (${email})[mailto:${email}]
//     `
//     markdown.push(newHTML)
//   }
//   return markdown.join('')
// }

const generateReadMe = ({
  title,
  description,
  motivation,
  why,
  problem,
  learned,
  info
}) => `
# ${title}

## Description

${description}  

${loop(info)}

- The Motivation for building this application was  ${motivation}
- The application was built to ${why}
- It solves the problem of ${problem}
- Through the process of building this application I learned ${learned}
`;

inquirer.prompt([
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
]);
// .then(
//   async answers => {
//     let newInfo = []
//       for (let i =0; i<answers.install; i++){
//          await inquirer.prompt([
//               {
//                   type: "input",
//                   name: "question" ,
//                   message: "Answer the question" +i ,
//               },
//               {
//                   type: "input",
//                   name: "email",
//                   message: "whats your email address",
//               }
//           ]).then(
//               data =>{

//                   let newResponse = {
//                       question: data.question,
//                       email: data.email
//                   }
//                   newInfo.push(newResponse)
                 
//               }
//           )
//       }
      
//   }
// ).then(()=> {
//   console.log("Running: ", numberOf)
// })

// function init () {
//   inquirer.prompt ([

//   {
//       type: "number",
//       name: "name",
//       message: "enter a number",
//   }
// ]).then(
//   async answers => {
//       for (let i =0; i<answers.name; i++){
//          await inquirer.prompt([
//               {
//                   type: "input",
//                   name: "question" + i,
//                   message: "Answer the question",
//               },
//               {
//                   type: "input",
//                   name: "email",
//                   message: "whats your email address",
//               }
//           ]).then(
//               data =>{

//                   let newResponse = {
//                       question: data.question,
//                       email: data.email
//                   }
//                   numberOf.contributors = newResponse
//               }
//           )
//       }
      
//   }
// ).then(()=> {
//   console.log("Running: ", numberOf)
// })
// }

// init();

// function contributors () {
//   var install = `${install}`
//   for(let i=0; i<install.length; i++) {
//     inquirer
// .prompt([

//     name: "install"[i],
//     message: "How many steps required to install your application?",
//     type: "number",

//   },
// ]);

contributors().then((response) => {
  const text = generateReadMe(response);
  fs.writeFile("README.md", text, (err) => {
    err ? console.log(err) : console.log("success");
  });
});
