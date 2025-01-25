import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import cookieparser from "cookie-parser";
import userRouter from "./routes/user.ts"

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(cookieparser("heya"));

app.use("/user", userRouter)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
