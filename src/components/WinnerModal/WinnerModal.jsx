import React from "react";
import { Square } from "../Square/Square";

export const WinnerModal = ({ winner, resetGame }) => {
  if (winner === null) return null;

  const winnerText = winner === false ? "Emapate" : "Gano";

  return (
    <section>
      <section className="winner">
        <div>
          <h2>{winnerText}</h2>
          <header className="win">{winner && <Square>{winner}</Square>}</header>
          <footer>
            <button onClick={resetGame}>Reset</button>
          </footer>
        </div>
      </section>
    </section>
  );
};

export default WinnerModal;
