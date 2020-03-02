const User = require("./model");
const { Router } = require("express");

const router = Router();

router.post("/user", async (request, response, next) => {
  try {
    const user = await User.create(request.body);
    response.send(user);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
