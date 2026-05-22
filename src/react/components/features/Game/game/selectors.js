import { shuffleArray } from "../../../../../js/utils/shuffleArray";

export function getVisibleCards({
  deck,
  selectedIds,
  cardsPerRound,
}) {
  if (selectedIds.length === 0) {
    return deck.slice(0, cardsPerRound);
  }

  const unselectedCards = deck.filter(
    (card) => !selectedIds.includes(card.id)
  );

  const guaranteedCard = shuffleArray(unselectedCards).slice(0, 1);

  const remainingCards = shuffleArray(
    deck.filter(
      (card) => card.id !== guaranteedCard[0]?.id
    )
  ).slice(0, cardsPerRound - 1);

  return shuffleArray([
    ...guaranteedCard,
    ...remainingCards,
  ]);
}
