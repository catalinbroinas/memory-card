import { useState } from "react";

// Date
import { START_STEP } from "../../../../constants/gameConstants";

// Components
import GameMode from "./GameMode";
import GameDifficulty from "./GameDifficulty";

function StartScreen({ onStart }) {
  const [mode, setMode] = useState(null);
  const [startStep, setStartStep] = useState(START_STEP.MODE);

  const handleModeSelect = (value) => {
    setMode(value);
    setStartStep(START_STEP.SETTINGS);
  };

  return (
    <section className="start-screen">
      <h2 className="visually-hidden">Game setup</h2>

      {startStep === START_STEP.MODE && (
        <GameMode onSelectMode={handleModeSelect} />
      )}

      {startStep === START_STEP.SETTINGS && (
        <GameDifficulty onSelectDifficulty={onStart} />
      )}
    </section>
  );
}

export default StartScreen;
