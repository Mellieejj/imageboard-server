const { Router } = require("express");
const { toJWT, toData } = require("./jwt");

const router = Router();

router.post("/login", (request, response, next) => {
  const { email, password } = request.body;

  if (email && password) {
    const jwt = toJWT({ userId: 1 });
    response.send({ jwt });
  } else {
    response.status(400).send({
      message: "Please fill in a valid email & password"
    });
  }
});

router.get("/secret-endpoint", (request, response, next) => {
  const auth =
    request.headers.authorization && request.headers.authorization.split(" ");
  if (auth && auth[0] === "Bearer" && auth[1]) {
    try {
      const data = toData(auth[1]);
      response.send({
        message: "Thanks for visting the secret endpoint",
        data
      });
    } catch (error) {
      response.status(400).send({
        message: `Error ${error.name}: ${error.message}`
      });
    }
  } else {
    response.status(401).send({
      message: "Please supply some valid credentials"
    });
  }
});

module.exports = router;
