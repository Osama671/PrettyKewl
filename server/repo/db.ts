import dotenv from "dotenv";
import pg from "pg";

dotenv.config();

const { Client } = pg;
const client = new Client({
  user: process.env.DBUSER,
  password: process.env.DBPASSWORD,
  host: process.env.DBHOST,
  port: Number(process.env.DBPORT),
  database: process.env.DBDATABASE,
});
await client.connect();

export default client
