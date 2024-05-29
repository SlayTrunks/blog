const mongoose = require("mongoose")

const blogSchema = new mongoose.Schema({
    header:{
        type:String,
        required:true,
        
        
    },
    image:{
        required:true,
        type:String 
    },
    
    description:{
        type:String,
        required:true,
        
    },
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    
})

const Blog = mongoose.model("Blog",blogSchema)
module.exports = Blog;