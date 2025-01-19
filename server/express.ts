import express from "express";
import dotenv from "dotenv"
import bodyParser from "body-parser"
import cors from "cors"
import createUser from "./repo/user.ts"

dotenv.config()

const app = express();
const port = process.env.PORT || 8080;

app.use(cors())
app.use(bodyParser.urlencoded())
app.use(bodyParser.json())

app.post("/aaa", (req, res) => {
  console.log("Heya:", req.body)
  const {username, password} = req.body
  createUser(username, password)
  res.json({message: "Success!"})
})

app.get("/", (req, res) => {
  res.json({ message: "Hey" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
