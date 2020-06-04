// Nodes for reading and writing files
let fs = require("fs");
// let userInputs = require("./input.js")
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
            name:"title",
        },
        {
            type:"input",
            message:"Enter URL to Projects :",
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
        
       
        
            fs.writeFile("generatedREADME.md", genREADME(info),function(err) {
                if(err){
                    console.log(err);
                }
                console.log("SUCCESS");
             })
    
    });






    function genREADME(info) {
        const licenseBadge = "(https://img.shields.io/badge/license-"+ info.license + "-brightgreen)";

        return `  
      # ${info.title}
      ![licenseBadge]${licenseBadge}
      ## Table of Contents 
      1.[Description](#description)
      2.[Installation](#installation)
      3.[Usage](#usage)
      4.[Contributors](#contributors)
      5.[Testing](#testing)
      6.[Questions](#questions)
    
      ## Description 
      ${info.desc} 
      URL : ${info.URL}
    
      ## Installation
      ${info.installation} 
    
      ## Usage
      ${info.usage} 
    
      ## License
      ${info.license} 
    
      ## Contributors
      ${info.contributes} 
    
      ## Testing
      ${info.test} 
      
      ## Questions
      Questions? Please send contact me @${info.username} or E-mail : sornwilliam@gmail.com
      `;
      };
    