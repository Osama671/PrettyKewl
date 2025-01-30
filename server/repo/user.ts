import bcrpyt from "bcrypt";
import client from "./db";

export default async function createUser(
  username: string,
  password: string,
  email: string,
  id: string
) {
  try {
    const saltRounds = 10;
    const hashedPassword = await bcrpyt.hash(password, saltRounds);
    await client.query(`insert into "user" values($1, $2, $3, $4)`, [
      username,
      hashedPassword,
      email,
      id,
    ]);
    return 1;
  } catch (e) {
    console.log(`Error in DB: ${e}`);
  }
}

export async function fetchUser(username: string) {
  try {
    const fetchedUser = await client.query(
      `SELECT * FROM "user" WHERE username = $1`,
      [username]
    );
    return fetchedUser.rows[0];
  } catch (e) {
    console.error(`Error in DB: ${e}`);
  }
}
