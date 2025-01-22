import bcrpyt from "bcrypt";
import client from "./db"

export default async function createUser(username: string, password: string) {
  const saltRounds = 10;
  const hashedPassword = await bcrpyt.hash(password, saltRounds);
  // await client.query(`insert into "user" (username, password) values(${username}, ${hashedPassword});`)
  await client.query(`insert into "user" values($1, $2)`, [username, hashedPassword])
  return 1;
}

export async function fetchUser(username: string) {
  try {
    const fetchedUser = await client.query(`SELECT * FROM "user" WHERE username = $1`, [username])
    console.log("DB: ", fetchedUser.rows);
  } catch (e) {
    console.error(`Error in DB: ${e}`);
  }
}
