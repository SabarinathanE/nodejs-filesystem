const {writeFile, readdir} = require("node:fs");

function callback() {
console.log("File created ")
}

let timeZone = new Date()
let date = new Date().getDate()
let hours = new Date().getHours()
let mins = new Date().getMinutes()


function writeFileAndUpdate() {
    writeFile(`./Task/${date}-${hours}-${mins}.txt`, `${timeZone}`, "utf8", callback);
}



function readdiectory() {
    readdir("./Task", (err, files) => { 
    if (err) 
      console.log(err); 
    else { 
      console.log("\nCurrent directory filenames:"); 
      files.forEach(file => { 
        console.log(file); 
      }) 
    } 
  }) 
}


module.exports = {
    writeFileAndUpdate,
    readdiectory
}