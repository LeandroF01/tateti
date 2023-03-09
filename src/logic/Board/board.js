import { winnerCombos } from "../../constants/constants";

export const checkWinener = (boardToCheack) => {
  for (const combo of winnerCombos) {
    const [a, b, c] = combo;
    if (
      boardToCheack[a] &&
      boardToCheack[a] === boardToCheack[b] &&
      boardToCheack[a] === boardToCheack[c]
    ) {
      return boardToCheack[a];
    }
  }
  return null;
};

export const checkEndGame = (newBoard) => {
  return newBoard.every((square) => square !== null);
};
