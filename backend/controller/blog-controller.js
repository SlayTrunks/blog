const Blog = require("../models/blog-model");
const User = require("../models/module");
const jwt = require("jsonwebtoken");
require("dotenv").config
exports.postBlog = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];

    var decoded = await jwt.verify(token, process.env.JWT_PASS);

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
exports.getBlog = async (req, res) => {
  const blog = await Blog.find();
  res.send(blog);
};
exports.detail = async (req, res) => {
  const auth = req.headers.authorization;
  if (auth) {
    try {
      const token = auth.split(" ")[1];
      var decoded = await jwt.verify(token, process.env.JWT_PASS);
      const user = await User.findOne({ username: decoded.username });
      const loggedinUser = user._id
      
      const BlogId = req.params.id;
      const getSingleBlog = await Blog.findOne({ _id: BlogId });
      let { header, image, topic, description, author, _id } = getSingleBlog;
      
      const owner = await User.findOne({ _id: author });

      const show = loggedinUser.toString() == author.toString()
     
      res.json({
        id: _id,
        header: header,
        image: image,
        description: description,
        owner: owner,
        show:show
        
      });
    } catch (error) {
      res.status(400).json({
        msg: error,
      });
    }
  } else {
    try {
      const BlogId = req.params.id;
      const getSingleBlog = await Blog.findOne({ _id: BlogId });
      let { header, image, topic, description, author, _id } = getSingleBlog;
      const owner = await User.findOne({ _id: author });
      // res.send({owner})
      res.json({
        id: _id,
        header: header,
        image: image,
        description: description,
        owner: owner,
        
      });
    } catch (error) {
      res.send(error);
    }
  }
};
exports.editBlog = async(req,res)=>{
  try {
    const data = req.body;
  const id = req.params.id
  const editData = await Blog.findByIdAndUpdate(id,req.body)
  res.status(200).json({
    msg:"editted successfully",
    
  })
  } catch (error) {
    res.status(400).json({
      msg:"something went wrong while creating",
      error:error
    })
  }
}
exports.deleteBlog = async(req,res)=>{
  const id = req.params.id;
  try {
    const deleteBlog = await Blog.findOneAndDelete({_id:id})
    
    res.status(200).json({
      msg:"deleted successfully"
    })
  } catch (error) {
    res.status(400).json({
      msg:"error while deleting"
    })
  }

}