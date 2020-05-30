// Nodes for reading and writing files
let fs = require("fs");
let userInputs = require("./input.js")



fs.writeFile("generatedREADME.md", genREADME(userInputs),function(err) {
    if (err) {
        return console.log(err);
    }
    console.log("Success!")
})



function genREADME(userInputs) {
    return `  
  # ${userInputs.title}\n
  ## Table of Contents \n
  1.[Description](#description)
  2.[Installation](#installation)
  3.[Usage](#usage)
  4.[Contributors](#contributors)
  5.[Testing](#testing)
  6.[Questions](#questions)\n

  ## Description 
  ${userInputs.desc} \n
  URL : ${userInputs.URL}\n

  ## Installation
  ${userInputs.installation} \n

  ## Usage
  ${userInputs.usage} \n

  ## License
  ${userInputs.license} \n

  ## Contributors
  ${userInputs.contributes} \n

  ## Testing
  ${userInputs.test} \n
  
  ## Questions
  Questions? Please send contact me @${userInputs.username} or E-mail : sornwilliam@gmail.com\n
  `;
  }

  