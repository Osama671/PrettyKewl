import express, { Request, Response } from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import cookieparser from "cookie-parser";
import session from "express-session";
import createUser, {fetchUser} from "./repo/user.ts";

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(cookieparser("heya"));
app.use(session({ secret: "heya" }));

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Hey" });
});

app.get("/cookie", (req: Request, res: Response) => {
  if (!req.session.test) {
    req.session.test = 1;
  } else {
    req.session.test += 1;
  }
  console.log("Session: ", req.session);
  res.cookie("Heya", "you geh");
  console.log("COOKIE: ", req.cookies);
  res.json({ count: req.session.test | 0 });
});

app.post("/aaa", (req: Request, res: Response) => {
  const { username, password } = req.body;
  createUser(username, password);
  res.json({ message: "Success!" });
});

app.get("/register", (req: Request, res: Response) => {});

app.get("/login", (req: Request, res: Response) => {
  console.log(req.query)
  const {username} = req.query
  fetchUser(username)
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
