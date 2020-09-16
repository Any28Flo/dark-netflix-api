const express = require("express");
const characterController = require("../controllers/characterController");
const authController = require("../controllers/authController");
const router = express.Router();

router.route("/").get(characterController.getAllCharacters);
router.route("/random").get(characterController.getRandomCharacter);

router
  .route("/:id")
  .get(characterController.getCharacter)
  .patch(
    authController.restrictTo("admin", "contr"),
    characterController.updateCharacter
  )
  .delete(
    authController.protect,
    authController.restrictTo("admin", "contr"),
    characterController.deleteCharacter
  );

module.exports = router;
