import React, { useState } from "react";

const Game = () => {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);

  const choices = ["камень", "ножницы", "бумага"];

  const handleClick = (choice) => {
    setPlayerChoice(choice);
    const computerIndex = Math.floor(Math.random() * 3);
    setComputerChoice(choices[computerIndex]);
    setTimeout(() => setResult(getResultIndex()), 1000);
  };

  const getResultIndex = () => {
    if (playerChoice === computerChoice) {
      return 0; // Ничья
    } else if (
      (playerChoice === "камень" && computerChoice === "ножницы") ||
      (playerChoice === "ножницы" && computerChoice === "бумага") ||
      (playerChoice === "бумага" && computerChoice === "камень")
    ) {
      return 1; // Игрок победил
    } else {
      return 2; // Компьютер победил
    }
  };

  const getResultText = (resultIndex) => {
    switch (resultIndex) {
      case 0:
        return "Ничья";
      case 1:
        return "Вы победили!";
      case 2:
        return "Победил компьютер";
      default:
        return "";
    }
  };

  return (
    <div>
      <h1>Камень, ножницы, бумага</h1>
      <p>Выберите свой вариант:</p>
      {choices.map((choice) => (
        <button key={choice} onClick={() => handleClick(choice)}>
          {choice}
        </button>
      ))}
      {playerChoice && (
        <p>
          Вы выбрали <strong>{playerChoice}</strong>, компьютер выбрал{" "}
          <strong>{computerChoice}</strong>
        </p>
      )}
      {result !== null && <p>{getResultText(result)}</p>}
    </div>
  );
};

export default Game;
