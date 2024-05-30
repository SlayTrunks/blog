const express = require("express");
const app = express();
const router = require("./routes/routes");
const cors = require("cors");
const connectDb = require("./db/connect");

app.use(express.json());

app.use(cors({
  origin: 'http://localhost:5173', // Frontend URL
 
  methods: ['GET', 'POST', 'PUT', 'DELETE',"PATCH"],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
connectDb();
app.use(router);
app.listen(3000, (req, res) => {
  console.log("listening on port 3000");
});
