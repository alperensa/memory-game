import React, { useEffect, useState } from "react";
import { wordArray } from "../data/words";

function GameOverlay() {
  const [words, setWords] = useState(wordArray);
  const length = words.length;
  const [usedWords, setUsedWords] = useState([]);
  const [currentWord, setCurrentWord] = useState();
  const [lives, setLives] = useState(3);
  const [isTrue, setIsTrue] = useState(true);

  const newWord = () => {
    let currentWordIndex = Math.floor(Math.random() * length);
    setCurrentWord(words[currentWordIndex]);
    setUsedWords([...usedWords, currentWord]);
  };
  const handleClick = (e) => {
    const isUsed = usedWords.includes(currentWord) ? true : false;
    switch (e.target.id) {
      case "seen":
        isUsed ? setIsTrue(true) : (setLives(lives - 1), setIsTrue(false));
        break;

      case "new":
        isUsed ? (setLives(lives - 1), setIsTrue(false)) : setIsTrue(true);
        break;

      default:
        break;
    }
    newWord();
  };
  useEffect(() => {
    newWord();
  }, []);

  return lives > 0 ? (
    <div
      className={`position-relative lead d-flex align-items-center justify-content-center flex-column ${
        isTrue ? "bg-success" : "bg-danger"
      }`}
      style={{ height: "500px" }}
    >
      <div className="lead display-6 position-absolute top-0  m-2">
        Lives: {lives}
      </div>
      <div className="display-1 lead mb-4">{currentWord}</div>
      <div className="button-group">
        <button
          id={"seen"}
          className="btn btn-warning mx-4"
          onClick={handleClick}
        >
          Seen
        </button>
        <button id={"new"} className="btn btn-warning" onClick={handleClick}>
          New
        </button>
      </div>
    </div>
  ) : (
    <div
      className={`lead d-flex align-items-center justify-content-center flex-column bg-danger display-1 lead `}
      style={{ height: "500px" }}
    >
      {" "}
      GAME OVER
      <button
        className="btn btn-warning px-4"
        onClick={() => location.reload()}
      >
        RESTART
      </button>
    </div>
  );
}

export default GameOverlay;
