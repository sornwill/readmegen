// Nodes for reading and writing files
let fs = require("fs");
const userInputs = require("./input.js")


init();


function init(){
    writeREADME();

   
}

function genREADME(info) {
    return `  
  # ${info.title}\n
  ## Table of Contents \n
  1.[Description](#description)
  2.[Installation](#installation)
  3.[Usage](#usage)
  4.[Contributors](#contributors)
  5.[Testing](#testing)
  6.[Questions](#questions)\n

  ## Description 
  ${info.desc} \n
  URL : ${info.URL}\n

  ## Installation
  ${info.installation} \n

  ## Usage
  ${info.usage} \n

  ## License
  ${info.license} \n

  ## Contributors
  ${info.contributes} \n

  ## Testing
  ${info.test} \n
  
  ## Questions
  Questions? Please send contact me @${info.username} or E-mail : sornwilliam@gmail.com\n
  `;
  };

  
function writeREADME(){
    fs.writeFile("generatedREADME.md", genREADME(info),function(err) {
        if(err){
            console.log(err);
        }
        console.log("SUCCESS");
     })
}
  