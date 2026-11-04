import { useState } from "react";

// Date
import { START_STEP } from "../../../../constants/gameConstants";

// Components
import GameMode from "./GameMode";
import GameDifficulty from "./GameDifficulty";

function StartScreen({ loading, error, onStart }) {
  const [mode, setMode] = useState(null);
  const [startStep, setStartStep] = useState(START_STEP.MODE);

  const handleModeSelect = (mode) => {
    setMode(mode);
    setStartStep(START_STEP.SETTINGS);
  };

  const handleDifficultySelect = (difficulty) => {
    onStart({ mode, difficulty });
  };

  return (
    <section className="start-screen">
      <h2 className="visually-hidden">Game setup</h2>

      {startStep === START_STEP.MODE && (
        <GameMode onSelectMode={handleModeSelect} />
      )}

      {startStep === START_STEP.SETTINGS && (
        <>
          {loading ? (
            <p>Loading game...</p>
          ) : error ? (
            <p className="alert-danger" role="alert">{error}</p>
          ) : (
            <GameDifficulty onSelectDifficulty={handleDifficultySelect} />
          )}
        </>
      )}
    </section>
  );
}

export default StartScreen;
