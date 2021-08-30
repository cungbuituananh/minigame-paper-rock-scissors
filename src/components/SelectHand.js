import rock from "../images/rock.png";
import paper from "../images/paper.png";
import scissors from "../images/scissors.png";

import { ContextElement } from "../App";
import { useContext } from "react";

export default function SelectHand() {
  const hands = ["rock", "paper", "scissors"];

  let {
    setPlayerSelect,
    setComputerSelect,
    setStatus,
    setPlayerScore,
    setComputerScore,
    playerScore,
    computerScore,
    setCount,
    count,
  } = useContext(ContextElement);

  function selectHand(playerSelect) {
    const randomHandComputer = hands[Math.floor(Math.random() * hands.length)];

    setPlayerSelect(playerSelect);
    setComputerSelect(randomHandComputer);
    setCount(count + 1);

    if (playerSelect !== randomHandComputer) {
      if (playerSelect === "paper") {
        if (randomHandComputer === "rock") {
          setStatus("WIN");
          setPlayerScore(playerScore + 1);
        } else if (randomHandComputer === "scissors") {
          setStatus("LOSE");
          setComputerScore(computerScore + 1);
        }
      } else if (playerSelect === "rock") {
        if (randomHandComputer === "paper") {
          setStatus("LOSE");
          setComputerScore(computerScore + 1);
        } else if (randomHandComputer === "scissors") {
          setStatus("WIN");
          setPlayerScore(playerScore + 1);
        }
      } else {
        if (randomHandComputer === "paper") {
          setStatus("Win");
          setPlayerScore(playerScore + 1);
        } else if (randomHandComputer === "rock") {
          setStatus("LOSE");
          setComputerScore(computerScore + 1);
        }
      }
    } else {
      setStatus("DRAW");
    }
  }

  return (
    <div className="d-flex flex-column">
      <h5 className="text-center">Select Your Hand</h5>
      <div className="d-flex select-hand">
        <button onClick={() => selectHand("rock")}>
          <img src={rock} alt="Rock Paper Scissors" />
        </button>
        <button onClick={() => selectHand("paper")}>
          <img src={paper} alt="Rock Paper Scissors" />
        </button>
        <button onClick={() => selectHand("scissors")}>
          <img src={scissors} alt="Rock Paper Scissors" />
        </button>
      </div>
    </div>
  );
}
