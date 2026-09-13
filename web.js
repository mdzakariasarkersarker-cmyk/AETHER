const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(__dirname));

app.listen(8080, () => {
  console.log("Dragon Web running on port 8080");
});
