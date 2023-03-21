const path = require("path");
const express = require("express");
const app = express();

//console.log(__dirname);
//console.log(path.join(__dirname, "../public"));
const staticPath = path.join(__dirname, "../public")

app.use(express.static(staticPath));
app.get("/", (req, res) => {
    res.write("<h1>Welcome to my Home Page</h1>");
    res.write("<h1>Welcome to my Home Page</h1>");
    res.send();
});

app.get("/about", (req, res) => {
    res.send("Welcome to my About us Page");
});

app.get("/contact", (req, res) => {
    res.send("Welcome to my Contact us Page");
});


app.listen(8000, () => {
console.log("Listing the port at 8000");
});