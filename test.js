const inquirer = require("inquirer");
let numberOf = []

function init () {
    inquirer.prompt ([

    {
        type: "number",
        name: "name",
        message: "enter a number",
    }
]).then(
    async answers => {
        for (let i =0; i<answers.name; i++){
           await inquirer.prompt([
                {
                    type: "input",
                    name: "question",
                    message: "Answer the question",
                }
            ]).then(
                data =>{
                    numberOf.push(data.question)
                }
            )
        }
        
    }
).then(()=> {
    console.log("Running: ", numberOf)
})
}

init();

// async function next(){
//     await
//     inquirer.prompt([
//         {
//             type: "input",
//             name: "question",
//             message: "Answer the question",
//         }
//     ]).then(
//         data =>{
//             numberOf.push(data.question)
//         }
//     )
// }