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
        },
        {
            type:"input",
            message:"If you have any screen shots, please enter file name (Make sure to include .png, .jpeg, .gif, etc, at end of input) :",
            name:"screenshot",
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
        const screenies = "(./assets/img/"+ info.screenshot + ")";
        

        return `  
# ${info.title}
![licenseBadge]${licenseBadge}
## Table of Contents 
1. [Description](#description)

2. [Screenshots](#screenshots)

3. [Installation](#installation)

4. [Usage](#usage)

5. [Contributors](#contributors)

6. [Testing](#testing)

7. [Questions](#questions)

    
## Description 
${info.desc}


URL : ${info.URL}

## Screenshots
![screenshots]${screenies}
    
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
    