import "./App.css";
import { useState } from "react";

function App() {
  const [buttonColor, setButtonColor] = useState("red");
  const nextColor = buttonColor === "red" ? "blue" : "red";

  return (
    <div>
      <button className={buttonColor} onClick={() => setButtonColor(nextColor)}>
        change to {nextColor}
      </button>
      <br />
      <labe htmlFor="disable-button-checkbox">Disable button</labe>
      <input
        type="checkbox"
        id="disable-button-checkbox"
        defaultChecked={false}
      />
    </div>
  );
}

export default App;
