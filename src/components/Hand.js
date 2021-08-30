import rock from "../images/rock.png";
import paper from "../images/paper.png";
import scissors from "../images/scissors.png";

export default function Hand({ select }) {
  return (
    <img
      src={
        select === "rock"
          ? rock
          : select === "paper"
          ? paper
          : select === "scissors"
          ? scissors
          : rock
      }
    alt='hand'/>
  );
}
