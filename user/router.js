const User = require("./model");
const bcrypt = require("bcrypt");
const { Router } = require("express");
const Image = require("../image/model")

const router = Router();

router.post("/user", async (request, response, next) => {
  try {
    const encrypted = bcrypt.hashSync(request.body.password, 10);

    const user = {
      name: request.body.name,
      email: request.body.email,
      password: encrypted
    };
    const person = await User.create(user);
    response.send(person);
  } catch (error) {
    next(error);
  }
});

router.get("/user", async (request, response, next) => {
  try {
    const people = await User.findAll();
    response.json(people);
  } catch (error) {
    next(error);
  }
});

// zelfde als hierboven
// router.get("/user", (request, response, next) => {
//   User.findAll()
//     .then(person => response.json(person))
//     .catch(next);
// });

router.get("/user/:userId", async (request, response, next) => {
  try {
    const person = await User.findByPk(request.params.userId, {include: Image });
    if (!person) {
      return response.status(404).end();
    } else {
      response.json(person);
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
