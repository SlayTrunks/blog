const express = require('express')
const mongoose = require("mongoose")

const connectDb = async ()=>{
    try {
        await  mongoose.connect("mongodb+srv://insane:123@hkirat.lvgqigl.mongodb.net/")
        await console.log("connected to db")
        
       
    } catch (error) {
        console.log({err:error})
    }
}

module.exports = connectDb
