const express = require("express");

const app = express();
const PORT = 3000;
app.use(express.json()); //Notice express.json middleware

app.get("/", (req, res) => {
  res.status(200);
  res.send("Welcome to root URL of Server");
});

app.post("/my-post-first", (req, res) => {
  console.log(req.body);

  res.status(200);
  const retVal = Array.from(Array(10).keys()).map(
    (index) => `f-${req.body.myInput}-${req.headers?.who}-${index * 12}`
  );
  res.send({ result: retVal });
});

app.post("/my-post-second", (req, res) => {
  console.log(req.body);

  res.status(200);
  const retVal = Array.from(Array(10).keys()).map(
    (index) => `s-${req.body.myInput}-${req.headers?.who}-${index * 12}`
  );
  res.send({ result: retVal });
});

app.listen(PORT, (error) => {
  if (!error) console.log("Server is Successfully Running");
  else console.log("Error occurred, server can't start", error);
});

module.exports = app;
