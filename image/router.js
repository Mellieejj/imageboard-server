const Image = require("./model");
const { Router } = require("express");

const router = Router();

router.get("/image", (request, response, next) => {
  Image.findAll()
    .then(image => response.json(image))
    .catch(next);
});

module.exports = router;
