const Image = require("./model");
const { Router } = require("express");
const auth = require("../auth/middleware");
const User = require("../user/model");

const router = Router();

router.get("/image", (request, response, next) => {
  Image.findAll({ include: User })
    .then(image => response.json(image))
    .catch(next);
});

router.post("/image", auth, async (request, response, next) => {
  try {
    const post = await Image.create(request.body);
    console.log(request.body);
    response.send(post);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
