const express = require("express");
const app = express();
const port = 5000;

app.use(quest);

const cookieParser = require("cookie-parser");

// load the cookie-parsing middleware
app.use(cookieParser());

app.get("/", (req, res) => {
  console.log("Midleware Quest");
  res.send("Middleware Quest");
});

app.get("/quest", (req, res) => {
  //console.log(`Check quest is ${req.check}`);
  console.log("Midleware Quest 1");
  res.send("Middleware Quest 1");
});

function quest(req, res, next) {
  //console.log("before");
  next();
  console.log("after");
}

function quest2(req, res, next) {
  if (req.query.check === "true") {
    req.check = true;
    next();
    return;
  }
  res.send("no quest2");
}
app.listen(port, (error) => {
  error ? console.log(error) : console.log(`App is running at port ${port}`);
});
