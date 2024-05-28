const express = require("express");
const router = express.Router();

const { signup, login, profile } = require("../controller/controller");

router.get("/", (req, res) => {
  res.send("yo wassup");
});
router.post("/signup", signup);
router.post("/login", login);
router.get("/profile", profile);

module.exports = router;
