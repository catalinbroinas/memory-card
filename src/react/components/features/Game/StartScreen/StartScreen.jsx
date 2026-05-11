import { useState } from "react";

// Date
import { START_STEP } from "../../../../constants/gameConstants";

// Components
import GameInfo from "./GameInfo";

function StartScreen() {
  const [startStep, setStartStep] = useState(START_STEP.INFO);

  return (
    <section className="start-screen">
      <h2 className="visually-hidden">Gam`e setup</h2>

      {startStep === START_STEP.INFO && (
        <GameInfo />
      )}
    </section>
  );
}

export default StartScreen;
