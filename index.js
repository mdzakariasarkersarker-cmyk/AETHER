const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Dragon Math AI 🐉🧮");
});

app.listen(3000, () => {
  console.log("Dragon Math AI running on port 3000");
});
