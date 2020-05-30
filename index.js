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
  ## Description 
  ${userInputs.desc} \n
  ## Installation
  ${userInputs.installation} \n
  ## Usage
  ${userInputs.usage} \n
  ## License
  ${userInputs.license} \n
  ## Contributing
  ${userInputs.contributes} \n
  ## Testing
  ${userInputs.test} \n
  ## Questions
  ${userInputs.questions} \n
  `;
  }

  