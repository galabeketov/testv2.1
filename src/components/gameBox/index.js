import GameBoxWrapper from "./GameBoxWrapper";
import TranslateGame from "../../games/Translate/Translate";
import tests from "../../data/Levels/Level1/tests";
import { useState } from "react";
import { Button } from "@mui/material";
import TypeTest from "../../games/Test";
import ListeningGame from "../../games/Listining/Listining";

const GameBox = () => {
  const [level, setLevel] = useState(0);

  const nextLevel = () => {
    if (level + 1 < tests.length) setLevel(level + 1);
  };

  const test = tests[level];

  const chooseType = (type, test) => {
    switch (type) {
      case "translate":
        return <TranslateGame test={test} setLevel={setLevel} />;
      case "test":
        return <TypeTest test={test} />;
      case "imgTest":
        return <p>Hello world</p>;
      case "listening":
        return <ListeningGame test={test} setlevel={setLevel} />;
    }
  };

  return (
    <GameBoxWrapper>
      {chooseType(test.type, test)}
      <div className="game-footer py-5 px-5 d-flex justify-content-between align-items-center">
        <Button variant={"outlined"} color={"primary"} onClick={nextLevel}>
          next
        </Button>
        <Button variant={"contained"} color={"success"} onClick={nextLevel}>
          Submit
        </Button>
      </div>
    </GameBoxWrapper>
  );
};

export default GameBox;
