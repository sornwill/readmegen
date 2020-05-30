// Nodes for reading and writing files
let fs = require("fs");


fs.writeFile("README.md", process.argv[2],function(err) {
    if (err) {
        return console.log(err);
    }
    console.log("Success!")
})