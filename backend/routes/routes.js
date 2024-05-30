const express = require("express");
const router = express.Router();

const { signup, login, profile } = require("../controller/controller");
const {postBlog,getBlog, detail, editBlog, deleteBlog} = require("../controller/blog-controller")

router.get("/", (req, res) => {
  res.send("yo wassup");
});
router.post("/signup", signup);
router.post("/login", login);
router.get("/profile", profile);
router.post("/postblog",postBlog)
router.get("/getblog",getBlog)
router.get("/detail/:id",detail)
router.patch("/editblog/:id",editBlog)
router.delete("/delete/:id",deleteBlog)

module.exports = router;
