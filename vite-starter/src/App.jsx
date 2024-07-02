import "./App.css";
import { useState } from "react";
import "./App.css";
import { kebabCaseToTitleCase } from "./helpers";

function App() {
  const [buttonColor, setButtonColor] = useState("medium-violet-red");
  const [disabled, setDisabled] = useState(false);
  const nextColorClass =
    buttonColor === "medium-violet-red" ? "midnight-blue" : "medium-violet-red";
  const className = disabled ? "gray" : buttonColor;
  const nextColorTitleCase = kebabCaseToTitleCase(nextColorClass);

  return (
    <div>
      <button
        className={className}
        onClick={() => setButtonColor(nextColorClass)}
        disabled={disabled}
      >
        change to {nextColorTitleCase}
      </button>
      <br />
      <labe htmlFor="disable-button-checkbox">Disable button</labe>
      <input
        type="checkbox"
        id="disable-button-checkbox"
        defaultChecked={disabled}
        onChange={(e) => setDisabled(e.target.checked)}
      />
    </div>
  );
}

export default App;
