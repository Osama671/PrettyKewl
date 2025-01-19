import mongoose from "mongoose";
import bcrpyt from "bcrypt";

mongoose
  .connect("mongodb://127.0.0.1:27017/cardCommerce")
  .then(() => console.log("Connected!"))
  .catch((err) => console.log(`Error connecting to DB: ${err}`));

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
});

const User = mongoose.model("User", userSchema);

export default async function createUser(username, password) {
  const saltRounds = 10;
  const hashedPassword = await bcrpyt.hash(password, saltRounds);
  const newUser = new User({ username: username, password: hashedPassword });
  await newUser.save()
  return newUser
}
