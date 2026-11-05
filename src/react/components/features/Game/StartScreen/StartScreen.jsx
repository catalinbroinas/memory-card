import { useState } from "react";

// Date
import { START_STEP } from "../../../../constants/gameConstants";

// Components
import GameMode from "./GameMode";
import GameDifficulty from "./GameDifficulty";
import LoadingState from "../../../UI/LoadingState";
import ErrorState from "../../../UI/ErrorState";

function StartScreen({ loading, error, onStart, onRetry, onReset }) {
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
            <LoadingState text={"Loading game..."} />
          ) : error ? (
            <ErrorState message={error} />
          ) : (
            <GameDifficulty onSelectDifficulty={handleDifficultySelect} />
          )}
        </>
      )}
    </section>
  );
}

export default StartScreen;
