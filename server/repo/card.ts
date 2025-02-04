import client from "./db";
import { v4 as uuid } from "uuid";

export async function createCard(quantity: number, price: number) {
  try {
    const queryResult = await client.query(
      "INSERT INTO card VALUES ($1, $2, $3)",
      [uuid(), quantity, price]
    );
    console.log("Result: ", queryResult);
    return queryResult;
  } catch (e) {
    console.error(`Error in DB: ${e}`);
  }
}

export async function deleteAllCards() {
  try {
    const queryResult = await client.query("DELETE FROM card *");
    return queryResult;
  } catch (e) {
    console.error(`Error in DB: ${e}`);
  }
}
