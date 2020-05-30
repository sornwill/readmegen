const inquirer = require("inquirer");

// Questions for info for README
function input(){
    return inquirer.prompt([
        {
            type:"input",
            message:"Enter Title :",
            name:"title",
        },
        {
            type:"input",
            message:"Enter Description :",
            name:"desc",
        },
        {
            type:"input",
            message:"Enter Installation Info:",
            name:"installation",
        },
        {
            type:"input",
            message:"Enter Usage Info:",
            name:"usage",
        },
        {
            type:"input",
            message:"Enter License :",
            name:"license",
        },
        {
            type:"input",
            message:"Enter Contributers :",
            name:"contributes",
        },
        {
            type:"input",
            message:"Enter Test Info :",
            name:"test",
        },
        {
            type:"input",
            message:"Enter questions :",
            name:"questions",
        }
    ])
};

module.exports = input;