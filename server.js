const express = require("express");
const app = express();
const fs = require("fs");
// To make the path of the file more strict. and retrieve the file path from the path.resolve method. it will return the path relative to the server.js file and from the directory that we run the script from.
const path = require("path");

// return the data of our index page.
const indexHTML = (() => {
    return fs.readFileSync(path.resolve(__dirname, "./index.html"), "utf-8");
})();

app.get('*', (req, res) => {
    res.write(indexHTML);
    res.end();
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});
