import { createCard, deleteAllCards } from "../repo/card";

export async function seedNewCards(seedAmount: number, deleteCards?: boolean) {
  const maxSeedAmount = 50;

  if (seedAmount <= 0) {
    throw new Error(
      "Invalid seed amount. Please provide a number greater than 0"
    );
  }
  if (deleteCards) await deleteAllCards();

  [...Array(Math.floor(Math.min(seedAmount, maxSeedAmount)))].map(async () => {
    const quantity = Math.floor(Math.random() * 10) + 6;
    const price = Math.floor(Math.random() * 55) + 21;
    await createCard(quantity, price);
  });
  console.log(`${seedAmount} cards created!`);
}
