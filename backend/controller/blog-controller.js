const Blog = require("../models/blog-model");
const User = require("../models/module");
const jwt = require("jsonwebtoken");
exports.postBlog = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    
    var decoded = await jwt.verify(token, "12345");

    const user = await User.findOne({ username: decoded.username });

    const create = await Blog.create({
      header: req.body.header,
      
      description: req.body.description,
      image: req.body.image,
      author: user._id,
    });
    res.status(200).json({
      msg: "Blog post created successfully",
      blog: create,
    });
  } catch (error) {
    res.send({
      msg: error,
    });
  }
};
exports.getBlog = async(req,res)=>{
    const blog = await Blog.find()
    res.send(blog)
}