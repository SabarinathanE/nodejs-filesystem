const { response } = require("express");
const fs = require("fs");
var revil = [];

getDateString=()=> {
    const date = new Date();
    var currentTimeInSeconds = Math.floor(Date.now() / 1000);
    const year = date.getFullYear();
    const month = `${date.getMonth() + 1}`.padStart(2, '0');
    const day = `${date.getDate()}`.padStart(2, '0');
    var hour = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    return `${year}-${month}-${day}-${hour}-${minutes}-${seconds}` 
}


var data = getDateString();
const date = new Date();
let time = date.getTime();

const express = require("express");   
const app = express();
const PORT = 3000;

fs.writeFile(`./Task/${data}.txt`, `Date:${data}Time:${time}`,
 (err) => console.log("hi there project success"));

fs.readFile(`./Task/${data}.txt`, "utf-8", (err, data) => { 
    console.log(data);
    app.get("/", (request, response) => {
        response.send(data);
    });
    app.listen(PORT, () => console.log("App is started", PORT));
}
);

const Store = './Task';

fs.readdir(Store, (err, files) => {
   
    files.forEach(file => {
        console.log(file);
        revil.push(file);
    });

});
app.get("/files", (request, response) => {
    response.send(revil);
});