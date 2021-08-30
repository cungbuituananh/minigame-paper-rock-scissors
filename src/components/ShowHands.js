import { ContextElement } from "../App";
import { useContext } from "react";
import Hand from "./Hand";

export default function ShowHands() {
  let {
    playerSelect,
    computerSelect,
    status,
    playerScore,
    computerScore,
    count,
  } = useContext(ContextElement);
  return (
    <div className="d-flex align-items-center display-hands">
      <div className="d-flex flex-column align-items-center show-hands">
        <div className="text-center">
          <h6>Player</h6>
          <h4>{playerScore}</h4>
        </div>
        <Hand select={playerSelect} />
      </div>
      <div className="text-center mx-3">
        <h5>Game {count}</h5>
        <h3
          className={
            status === "WIN"
              ? "text-success"
              : status === "LOSE"
              ? "text-danger"
              : "text-primary"
          }
        >
          {status}
        </h3>
      </div>
      <div className="d-flex flex-column align-items-center show-hands">
        <div className="text-center">
          <h6>Computer</h6>
          <h4>{computerScore}</h4>
        </div>
        <Hand select={computerSelect} />
      </div>
    </div>
  );
}
