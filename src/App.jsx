import { useEffect, useState } from "react";
import "./App.css";
import GameOverlay from "./components/GameOverlay";
import NavBar from "./components/NavBar";
import { Tooltip } from "@mui/material";

function App() {
  const [isClicked, setIsClicked] = useState(false);
  const info = `Click "NEW" if you have never seen the word.
  Click "SEEN" if you have already seen the word.
  You have 3 lives. Every wrong guess takes 1 life.`;
  return (
    <>
      <NavBar />
      {isClicked ? (
        <GameOverlay />
      ) : (
        <div
          className="lead text-center bg-light d-flex justify-content-center align-items-center flex-column position-relative"
          style={{ height: "500px" }}
        >
          Welcome to Mind Game. <br />
          Click "START" to play the game.
          <br />
          Good Luck!
          <Tooltip title={info}>
            <i className="fa fa-info-circle position-absolute top-0 end-0 mx-3"></i>
          </Tooltip>
          <button
            className="btn btn-warning my-3"
            onClick={() => setIsClicked(true)}
          >
            START
          </button>
        </div>
      )}
    </>
  );
}

export default App;
