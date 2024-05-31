const express = require("express");
const app = express();
const User = require("../models/module");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt")
require("dotenv").config

exports.signup = async (req, res) => {
 
  try {
    const hash = await bcrypt.hash(req.body.password,10)
    console.log(hash)
   
    
    const create = await User.create({username:req.body.username,password:hash});
    var token = jwt.sign({ username: req.body.username }, process.env.JWT_PASS);
    res.status(200).json({
      msg: "successfully created account",
      token: token,
    });
  } catch (error) {
    res.status(400).json({
      msg: error.errmsg,
    });
  }
};

exports.login = async (req, res) => {
  const check = await User.findOne({ username: req.body.username });
  var token = jwt.sign({ username: req.body.username }, process.env.JWT_PASS);
  if (check) {
    
  
    const comp = await bcrypt.compare(req.body.password,check.password)
   
    if (comp) {
      res.status(200).json({
        msg: "loggedin successfully",
        token: token,
      });
      
    } else {
      res.status(400).json({
        msg: "incorrect password",
      });
    }
  } else {
    res.status(404).json({
      msg: "username doesnot exist",
    });
  }
};

exports.profile = async(req,res)=>{
try {
  const token = req.headers.authorization.split(" ")[1]
  var decoded = jwt.verify(token,process.env.JWT_PASS)
  const user = await User.findOne({username:decoded.username})
  res.status(200).json({
    msg:user
  })
} catch (error) {
  res.status(400).json({
    msg:"error in idk"
  })
}

}
