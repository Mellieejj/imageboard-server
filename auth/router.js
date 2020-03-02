const { Router } = require("express");
const { toJWT, toData } = require("./jwt");
const bcrypt = require("bcrypt");
const User = require("../user/model");
const auth = require("./middleware");

const router = Router();

router.post("/login", (request, response, next) => {
  const { email, password } = request.body;

  if (email && password) {
    User.findOne({
      where: {
        email: email
      }
    })
      .then(entity => {
        if (!entity) {
          response.status(400).send({
            message: "User with that email does not exist"
          });
        } else if (bcrypt.compareSync(password, entity.password)) {
          response.send({
            jwt: toJWT({ userId: entity.id })
          });
        } else {
          response.status(400).send({
            message: "Password was incorrect"
          });
        }
      })
      .catch(error => {
        console.error(error);
        response.status(500).send({
          message: "Something went wrong"
        });
      });
  } else {
    response.status(400).send({
      message: "Please fill in a valid email & password"
    });
  }
});

router.get("/secret-endpoint", auth, (request, response, next) => {
  response.send({
    message: `Thanks for visting the secret endpoint ${request.user.email}. `
  });
});

module.exports = router;
