import { useState } from "react";

// Date
import { START_STEP } from "../../../../constants/gameConstants";

// Components
import GameInfo from "./GameInfo";
import GameDifficulty from "./GameDifficulty";

function StartScreen() {
  const [startStep, setStartStep] = useState(START_STEP.INFO);

  return (
    <section className="start-screen">
      <h2 className="visually-hidden">Gam`e setup</h2>

      {startStep === START_STEP.INFO && (
        <GameInfo onNext={() => setStartStep(START_STEP.SETTINGS)} />
      )}

      {startStep === START_STEP.SETTINGS && (
        <GameDifficulty />
      )}
    </section>
  );
}

export default StartScreen;
