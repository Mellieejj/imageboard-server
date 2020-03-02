const express = require("express");
const Image = require("./image/model");

const app = express();

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`app listen on ${port}`);
});
