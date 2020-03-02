const express = require("express");
const imageRouter = require("./image/router");
const userRouter = require("./user/router");
const authRouter = require("./auth/router");

const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

const corsMiddleware = cors();
app.use(corsMiddleware);

const parserMiddleware = bodyParser.json();
app.use(parserMiddleware);

const port = process.env.PORT || 4000;

app.use(imageRouter);
app.use(authRouter);
app.use(userRouter);

app.listen(port, () => {
  console.log(`app listen on ${port}`);
});
