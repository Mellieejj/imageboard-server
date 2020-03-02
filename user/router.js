const User = require("./model");
const bcrypt = require("bcrypt");
const { Router } = require("express");

const router = Router();

router.post("/user", async (request, response, next) => {
  try {
    const encrypted = bcrypt.hashSync(request.body.password, 10);

    const user = {
      email: request.body.email,
      password: encrypted
    };
    const person = await User.create(user);
    response.send(person);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
