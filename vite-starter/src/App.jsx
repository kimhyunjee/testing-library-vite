import "./App.css";
import { useState } from "react";

function App() {
  const [buttonColor, setButtonColor] = useState("red");
  const [disabled, setDisabled] = useState(false);
  const nextColor = buttonColor === "red" ? "blue" : "red";

  return (
    <div>
      <button
        className={buttonColor}
        onClick={() => setButtonColor(nextColor)}
        disabled={disabled}
      >
        change to {nextColor}
      </button>
      <br />
      <labe htmlFor="disable-button-checkbox">Disable button</labe>
      <input
        type="checkbox"
        id="disable-button-checkbox"
        defaultChecked={false}
        onChange={(e) => setDisabled(e.target.checked)}
      />
    </div>
  );
}

export default App;
