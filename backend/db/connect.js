const express = require('express')
const mongoose = require("mongoose")
require("dotenv").config()


const connectDb = async ()=>{
    try {
       
        await  mongoose.connect(process.env.MONGO_URI)
         console.log("connected to db")
        
       
    } catch (error) {
        console.log({err:error})
    }
}

module.exports = connectDb
