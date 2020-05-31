const inquirer = require("inquirer");


// Questions for info for README
inquirer.prompt([
        {
            type:"input",
            message:"What's your GitHub Username?",
            name:"username",
        },
        {
            type:"input",
            message:"Enter Title :",
            name:"title",nod
        },
        {
            type:"input",
            message:"Enter URL to Project :",
            name:"URL",
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
        }
        
    ])
    .then(function(info){
        console.log(info);
       
    });





