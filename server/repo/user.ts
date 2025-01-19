import bcrpyt from "bcrypt";
import sql from "./db";

export default async function createUser(username, password) {
  const saltRounds = 10;
  const hashedPassword = await bcrpyt.hash(password, saltRounds);
  await sql`insert into "user" (username, password) values(${username}, ${hashedPassword});`;
  
  return 1;
}
