import dotenv from "dotenv";
import postgres from "postgres";

dotenv.config();

let sql;
const sqlURL = process.env.POSTGRESURL || "";
if (sqlURL === "") {
  throw new Error("Error with SQL connection, check .env file thx uwu");
} else {
  sql = postgres(sqlURL);
}

export default sql;
