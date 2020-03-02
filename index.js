const express = require("express");
const imageRouter = require("./image/router");

const app = express();

const port = process.env.PORT || 4000;

app.use(imageRouter);

app.listen(port, () => {
  console.log(`app listen on ${port}`);
});
