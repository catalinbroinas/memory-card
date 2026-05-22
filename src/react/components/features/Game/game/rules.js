
export function isValidCard(deck, cardId) {
  return deck.some((card) => card.id === cardId);
}

export function isDuplicate(selectedIds, cardId) {
  return selectedIds.includes(cardId);
}

export function isWin(score, rounds) {
  return score >= rounds;
}
