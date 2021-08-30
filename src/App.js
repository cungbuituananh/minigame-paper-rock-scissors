import "./App.css";
import { useState, createContext } from "react";
import SelectHand from "./components/SelectHand";
import ShowHands from "./components/ShowHands";

export const ContextElement = createContext();
function App() {
  const [start, setStart] = useState(false);
  const [playerSelect, setPlayerSelect] = useState("rock");
  const [computerSelect, setComputerSelect] = useState("rock");
  const [status, setStatus] = useState("Draw");
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [count, setCount] = useState(0);
  const MAX_GAME = 10;

  function reset() {
    setPlayerSelect("rock");
    setComputerSelect("rock");
    setStatus("Draw");
    setCount(0);
    setPlayerScore(0);
    setComputerScore(0);
  }
  // console.log(playerSelect, computerSelect);
  return (
    <ContextElement.Provider
      value={{
        setPlayerSelect,
        setComputerSelect,
        playerSelect,
        computerSelect,
        status,
        setStatus,
        setPlayerScore,
        setComputerScore,
        playerScore,
        computerScore,
        count,
        setCount
      }}
    >
      <div className="App">
        {start ? (
          <>
            <ShowHands />
            <SelectHand />
          </>
        ) : (
          <>
            <h1>Paper - Rock - Scissor</h1>
            <button
              className="btn btn-outline-success"
              onClick={() => setStart(!start)}
            >
              Start Game
            </button>
          </>
        )}
        {count === MAX_GAME && (
          <div className="result">
            <div className="result-board d-flex flex-column justify-content-center">
              {playerScore > computerScore ? (
                <h1 className="text-center text-light">Player Win</h1>
              ) : (
                <h1 className="text-center text-light">Player Lose</h1>
              )}
              <button className="btn btn-primary" onClick={() => reset()}>
                Play Again
              </button>
            </div>
          </div>
        )}
      </div>
    </ContextElement.Provider>
  );
}

export default App;