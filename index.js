const {createServer} = require("node:http");
const {writeFileAndUpdate, readdiectory} =  require("./filesystem")


const server = createServer((req, res) => {
    writeFileAndUpdate();
    readdiectory();
    res.writeHead(200, {"Content-Type" : "text/plain"});
    res.end("File Created Succesfully")
})

server.listen(3000, "127.0.0.1", () => {
    console.log("Listening on 127.0.0.1: 3000")
})