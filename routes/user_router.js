const express = require("express");
const userController = require("../controllers/user_controller");
const validateToken = require("../middlewares/validate_token");

const router = express.Router();

router.get("/signup", userController.accountCheck);
router.post("/signup", userController.signupController);
router.post("/login", userController.loginUser);
router.get("/me", validateToken.validateToken, userController.user);

module.exports = router;
